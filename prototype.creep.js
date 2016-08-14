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

    Creep.prototype.traveling = function () {
        if (true) {

            // if (this.pos.roomName == 'E44N34' && this.memory.role=='upgrader') {
            //    this.gotoRoom('E44N35')
            // }
            // if (this.pos.roomName == 'E44N35' && this.memory.role=='upgrader') {
            //     this.gotoRoom('E44N35_2')
            // }
        }
        if (!this.memory.base) {
            this.memory.base = this.pos.roomName;
        }
        // if (this.pos.roomName == 'E43N35' && this.memory.role != 'tank')
        //     this.gotoRoom('E44N35')
        var safetyPos = Game.flags['4'].pos;
        if (this.memory.destination && this.memory.destination.x == safetyPos.x &&
            this.memory.destination.y == safetyPos.y &&
            this.memory.destination.roomName == safetyPos.roomName &&
            this.pos.roomName == safetyPos.roomName &&
            this.pos.y < 49
            && this.memory.role != 'tank') {
            console.log('Going to 4');
            this.say('4')
            this.memory.destination = undefined;
        }
        if (this.pos.roomName == 'E46N35' && this.memory.role != 'claimer') {
            this.gotoRoom('4');
        }
        // if(this.memory.reachedDestination && this.pos.roomName == this.memory.base && this.memory.role !='hauler')
        // {
        //     this.memory.destination = undefined;
        // }
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
            result = this.moveTo(this.memory.destination, {reusePath: 50});
            if (result != 0 && result != -11 && result && result != -4)
                console.log(result);
            return true;
        }
        return false;

    };

    Creep.prototype.getNearestEnergy = function () {
        var closestLink = this.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_LINK && s.energy > 0 && s.pos.roomName == this.pos.roomName && s.pos.inRangeTo(this.room.controller.pos, 10)
        });
        if (closestLink != undefined) {
            if (closestLink.transferEnergy(this) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestLink);
                closestLink.transferEnergy(this);
            }
            return;
        }
        var closestEnergy;
        closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 1800});
        if (!closestEnergy)
            closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 1000});
        if (!closestEnergy)
            closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 350});

        var closestContainer = this.pos.findClosestByRange(FIND_STRUCTURES,
            {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                s.store[RESOURCE_ENERGY] > 600 &&
                s.pos.roomName == this.pos.roomName
            });

        if (closestEnergy) {
            this.pickup(closestEnergy);
            if (closestEnergy.amount > 1500) {
                console.log('large energy drop warning (' + closestEnergy.amount + '): ' + this.room.name)
            }
            if (closestEnergy.amount > 800 || closestContainer == undefined ||
                this.pos.getRangeTo(closestEnergy.pos.x, closestEnergy.pos.y) <= this.pos.getRangeTo(closestContainer.pos.x, closestContainer.pos.y)) {
                var result;
                // if (closestContainer != undefined && closestEnergy.pos.inRangeTo(closestContainer, 0)) {
                //     result = closestContainer.transfer(this, RESOURCE_ENERGY);
                // }
                // else {
                result = this.pickup(closestEnergy);
                //
                // if (closestContainer != undefined)
                //     closestContainer.transfer(this, RESOURCE_ENERGY);

                // }
                if (result == ERR_NOT_IN_RANGE) {
                    this.moveTo(closestEnergy);
                    // if (closestContainer != undefined)
                    //     closestContainer.transfer(this, RESOURCE_ENERGY);
                    this.pickup(closestEnergy);


                }

                return;
            }
            // console.log('1:' + this.name);
        }

        if (closestContainer != undefined) {
            if (closestContainer.transfer(this, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestContainer);

                var containerResult =
                    //closestContainer.transfer(this, RESOURCE_ENERGY);
                    this.withdraw(closestContainer, RESOURCE_ENERGY)
                if (this.pos.roomName == 'E43N35') {
                    console.log(this.name + ' ' + containerResult + this.pos.roomName)
                }
            }
            return;
        }
        var closestSource = this.pos.findClosestByRange(FIND_SOURCES, {filter: (s) => s.energy > 0});
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
};