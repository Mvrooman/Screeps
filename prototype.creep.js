module.exports = function () {
    Creep.prototype.gotoRoom = function (roomName) {
        this.memory.destination = Game.flags[roomName].pos;
    }
    Creep.prototype.wp = function (roomName) {
        if (this.memory.waypoint) {
            this.memory.waypoint.push(Game.flags[roomName].pos);
        }
        else {
            this.memory.waypoint = [Game.flags[roomName].pos]
        }
    }
    Creep.prototype.wpc = function (roomName) {
        this.memory.waypoint = [];
    }
    Creep.prototype.needsRenew = function (minTicks, maxTicks) {
        // return false;
        if (!this.memory.renew) {
            return false;
        }
        if (!this.memory.renewing && this.ticksToLive < minTicks) {
            this.memory.renewing = true;
        }
        if (this.memory.renewing) {
            if (this.ticksToLive > maxTicks) {
                this.memory.renewing = false;
            }
            var closestSpawn = this.pos.findClosestByRange(FIND_MY_SPAWNS, {filter: (s) => s.room.name == this.room.name});
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
            if (waypoint != undefined && waypoint.length > 0 && (!this.memory.sourceRoom || (this.room.name != this.memory.sourceRoom && this.fatigue == 0))) {
                this.memory.sourceRoom = undefined;
                var currentWaypoint = new RoomPosition(waypoint[0].x, waypoint[0].y, waypoint[0].roomName);
                var result = this.moveTo(currentWaypoint);

                let range = this.pos.getRangeTo(currentWaypoint);
                if (this.memory.lastRange && range == Infinity && this.memory.lastRange < 5) {
                    console.log('!!!Portal!!!')
                    this.memory.sourceRoom = waypoint[0].roomName;
                    this.memory.waypoint.shift();
                    this.memory.lastRange = undefined;
                    if (this.memory.waypoint.length == 0) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                this.memory.lastRange = range;
                if (this.pos.inRangeTo(currentWaypoint, 0) && this.room.name == currentWaypoint.roomName) {
                    console.log('Waypoint reached');
                    this.memory.waypoint.shift();
                    this.memory.lastRange = undefined;
                    if (this.memory.waypoint.length == 0) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                return true;
            }
            else if (this.memory.sourceRoom) {
                return true;
            }

            if (this.room.name == destination.roomName && this.pos.inRangeTo(destination, 2)) {
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

                result = this.moveTo(this.memory.destination, {reusePath: 15});

           // result = this.moveTo(this.memory.destination, {reusePath: 50});
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
                this.moveTo(closestLink, {costCallback: Empire.stayInRoom});
                closestLink.transferEnergy(this);
            }
            return;
        }
        var closestEnergy;
        closestEnergy = Empire.claimEnergy(this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 1200}), this);
        if (!closestEnergy) {
            closestEnergy = Empire.claimEnergy(this.pos.findInRange(FIND_DROPPED_ENERGY, 25, {filter: (s) => s.room == this.room && s.amount >= 600})[0], this);
        }
        if (!closestEnergy) {
            closestEnergy = Empire.claimEnergy(this.pos.findInRange(FIND_DROPPED_ENERGY, 8, {filter: (s) => s.room == this.room && s.amount >= 300})[0], this);
        }

        var closestContainer = this.pos.findClosestByRange(FIND_STRUCTURES,
            {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                s.store[RESOURCE_ENERGY] > 300 &&
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
                    this.moveTo(closestEnergy, {costCallback: Empire.stayInRoom});
                    this.pickup(closestEnergy);
                }
                return;
            }
        }

        if (closestContainer != undefined) {
            if (closestContainer.transfer(this, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                if (Memory.kernal.pathFinding) {
                    this.moveTo(closestContainer, {reusePath: 5, swampCost: 1, costCallback: Empire.stayInRoom});
                }
                else {
                    this.moveTo(closestContainer, {reusePath: 5, costCallback: Empire.stayInRoom});
                }
                var containerResult = this.withdraw(closestContainer, RESOURCE_ENERGY)
            }
            return;
        }
        var closestSource = this.pos.findClosestByRange(FIND_SOURCES, {
            filter: (s) => s.energy > 0
            && s.room.name == this.pos.roomName
        });
        if (closestSource != undefined) {
            var harvestResult = this.harvest(closestSource);
            if (harvestResult == ERR_NOT_IN_RANGE) {
                var result = this.moveTo(closestSource, {costCallback: Empire.stayInRoom});
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