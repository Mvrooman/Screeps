module.exports = function () {
    Creep.prototype.gotoRoom = function (roomName) {
        this.memory.destination = Game.flags[roomName].pos;
    }
    Creep.prototype.needsRenew = function (minTicks, maxTicks) {
        return false;
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

    Creep.prototype.lifespan = function()
    {
        if(this.getActiveBodyParts(CLAIM)>0)
        {
            return 500;
        }
        return 1500;
    }

    Creep.prototype.traveling = function () {
        if (this.memory.destination != undefined) {
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
                this.memory.destination = undefined;
                if(this.memory.travelTime == undefined)
                {
                    this.memory.travelTime = this.lifespan() - this.ticksToLive;
                }
                return false;
            }
            this.memory.destination = new RoomPosition(this.memory.destination.x, this.memory.destination.y, this.memory.destination.roomName);
            var result = this.moveTo(this.memory.destination);
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

        var closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 300});
        var closestContainer = this.pos.findClosestByRange(FIND_STRUCTURES,
            {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                s.store[RESOURCE_ENERGY] > 300 &&
                s.pos.roomName == this.pos.roomName
            });
        if (closestEnergy != undefined) {
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
                    if (closestContainer != undefined)
                        closestContainer.transfer(this, RESOURCE_ENERGY);
                    this.pickup(closestEnergy);

                }

                return;
            }
            // console.log('1:' + this.name);
        }

        if (closestContainer != undefined) {
            if (closestContainer.transfer(this, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestContainer);
                closestContainer.transfer(this, RESOURCE_ENERGY);
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