module.exports = function () {
    Creep.prototype.gotoRoom = function (roomName) {
        this.memory.destination = Game.flags[roomName].pos;
    }
    Creep.prototype.needsRenew = function (minTicks, maxTicks) {
        // return false;
        if (this.pos.roomName != 'E43N34') {
            return false;
        }
        if (!this.memory.renewing && this.ticksToLive < minTicks) {
            this.memory.renewing = true;
        }
        if (this.memory.renewing) {
            if (this.ticksToLive > maxTicks) {
                this.memory.renewing = false;
            }
            var closestSpawn = this.pos.findClosestByRange(FIND_MY_SPAWNS);
            if (closestSpawn == undefined) {
                this.memory.renewing = false;
                return false;
            }
            else {
                this.moveTo(closestSpawn);
                return true;
            }
        }
        return false;
    }
    Creep.prototype.needsRecycled = function () {

        if (this.memory.recycle) {
            this.say("Recycle Me");
            var closestSpawn = this.pos.findClosestByRange(FIND_MY_SPAWNS);
            this.moveTo(closestSpawn);
            return true;
        }
        return false;
    };

    Creep.prototype.lifespan = function () {
        if (this.getActiveBodyparts(CLAIM) > 0) {
            return 500;
        }
        return 1500;
    }

    Creep.prototype.checkRoads = function () {
        let structures = this.pos.lookFor(LOOK_STRUCTURES);
        let roads = _.filter(structures, (s) => s.structureType == STRUCTURE_ROAD);
        if (roads.length > 0) {
            let road = roads[0];
            if (road.hits < road.hitsMax * 0.8) {
                this.repair(road)
            }
        }

        else if (this.fatigue > 0) {
            var flags = this.pos.lookFor(LOOK_FLAGS);
            flags = _.filter(flags, f => f.memory.fatigueCount);
            var flag;
            if (flags.length > 0) {
                flag = flags[0];
                flag.memory.fatigueCount += 1;
            }
            else {
                Memory.kernal.flagRoomCount++;
                let flagName = this.pos.createFlag('_' + Memory.kernal.flagRoomCount);
                flag = Game.flags[flagName];
                flag.memory.fatigueCount = 1;
                flag.firstFatigue = Game.time;
            }
            flag.lastFatigue = Game.time;
        }
    };


    RoomPosition.prototype.posName = function () {
        return this.roomName + 'X' + this.x + 'Y' + this.y;
    };


    Creep.prototype.traveling = function () {
        this.checkRoads();
        if (!this.memory.base) {
            this.memory.base = this.pos.roomName;
        }

        if (this.memory.destination != undefined) {
            if (this.memory.reachedDestination == undefined) {
                this.memory.travelTime = this.lifespan() - this.ticksToLive;
            }
            if (this.getActiveBodyparts(HEAL) > 0 && this.hitsMax > this.hits) {
                this.heal(this);
            }
            var destination = this.memory.destination;
            var waypoint = this.memory.waypoint;
            if (waypoint != undefined) {
                if (this.pos.inRangeTo(waypoint, 2) && this.room.name == waypoint.roomName) {
                    console.log('Waypoint reached');
                    this.memory.waypoint = undefined;
                    return false;
                }
                this.memory.waypoint = new RoomPosition(this.memory.waypoint.x, this.memory.waypoint.y, this.memory.waypoint.roomName);
                var result = this.moveTo(this.memory.waypoint);
                return true;
            }

            if (this.pos.inRangeTo(destination, 2) && this.room.name == destination.roomName) {
                console.log('Destination reached');
                this.memory.reachedDestination = true;
                this.memory.destination = undefined;
                if (!this.memory.finalDestination) {
                    this.memory.finalDestination = this.pos.finalDestination;
                }
                if (this.memory.travelTime == undefined) {
                    this.memory.travelTime = this.lifespan() - this.ticksToLive;
                }
                return false;
            }
            this.memory.destination = new RoomPosition(this.memory.destination.x, this.memory.destination.y, this.memory.destination.roomName);
            if (Memory.kernal.pathFinding && Game.time % 3 == 0) {
                result = this.moveTo(this.memory.destination, {
                    reusePath: 10,
                    swampCost: 1,
                    ignoreRoads: true
                });
            }
            else {
                result = this.moveTo(this.memory.destination, {reusePath: 5});
            }
            result = this.moveTo(this.memory.destination, {reusePath: 50});
            if (result != 0 && result != -11 && result && result != -4)
                console.log(result);
            return true;
        }
        return false;

    };

    Creep.prototype.getNearestEnergy = function () {
        var closestLink = this.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_LINK && s.energy > 0 && s.pos.roomName == this.pos.roomName && s.pos.inRangeTo(this.room.controller.pos, 10) && s.pos.inRangeTo(this.pos, 10)
        });
        if (closestLink != undefined) {
            if (closestLink.transferEnergy(this) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestLink);
                closestLink.transferEnergy(this);
            }
            return;
        }
        var closestEnergy;
        closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 1200});
        if (!closestEnergy)
            closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 800});
        if (!closestEnergy)
            closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 500});

        var closestContainer = this.pos.findClosestByRange(FIND_STRUCTURES,
            {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                s.store[RESOURCE_ENERGY] > 500 &&
                s.pos.roomName == this.pos.roomName
            });

        if (closestEnergy) {
            this.pickup(closestEnergy);
            if (closestEnergy.amount > 600) {
                console.log('large energy drop warning (' + closestEnergy.amount + '): ' + this.room.name)
            }
            if (closestEnergy.amount > 800 || closestContainer == undefined ||
                this.pos.getRangeTo(closestEnergy.pos.x, closestEnergy.pos.y) <= this.pos.getRangeTo(closestContainer.pos.x, closestContainer.pos.y)) {
                var result;
                result = this.pickup(closestEnergy);
                if (result == ERR_NOT_IN_RANGE) {
                    this.moveTo(closestEnergy);
                    this.pickup(closestEnergy);
                }
                return;
            }
        }

        if (closestContainer != undefined) {
            if (closestContainer.transfer(this, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                if (Memory.kernal.pathFinding) {
                    this.moveTo(closestContainer, {reusePath: 5, swampCost: 1});
                }
                else {
                    this.moveTo(closestContainer, {reusePath: 5});
                }
                var containerResult = this.withdraw(closestContainer, RESOURCE_ENERGY)
            }
            return;
        }
        var closestSource = this.pos.findClosestByPath(FIND_SOURCES, {filter: (s) => s.energy > 0});
        if (closestSource != undefined) {
            var harvestResult = this.harvest(closestSource);
            if (harvestResult == ERR_NOT_IN_RANGE) {
                var result = this.moveTo(closestSource);
                this.harvest(closestSource);
                // if (result < 0 && result != -11) {
                //     console.log('Error moving to source: ' + result);
                // }
                // console.log('3:' + this.name);
                return;
            }
            // if (harvestResult < 0) {
            //     console.log('Harvest Error: ' + this.name + ' : ' + harvestResult);
            // }
        }
        else {
            //console.log('No sources found: ' + this.name);
        }
    }
}
;