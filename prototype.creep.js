module.exports = function () {
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
    };

    Creep.prototype.needsRecycled = function () {

        if (this.memory.recycle) {
            this.say("Recycle Me");
            var closestSpawn = this.pos.findClosestByRange(FIND_MY_SPAWNS);
            this.moveTo(closestSpawn);
            return true;
        }
        return false;
    };

    Creep.prototype.traveling = function () {
        //return false;
        if (this.memory.destination != undefined) {
            var destination = this.memory.destination;
            //if ( Math.abs(this.pos.x-destination.x) <3 && Math.abs(this.pos.y-destination.y) <3 && this.pos.roomName == destination.roomName) {
            if (this.pos.inRangeTo(destination, 2)) {
                console.log('Destination reached');
                this.memory.sameRoom = 0;
                this.memory.destination = undefined;
                return false;
            }
            // if (this.pos.roomName == destination.roomName) {
            //     if (this.memory.sameRoom == undefined)
            //         this.memory.sameRoom = 1;
            //     else
            //         this.memory.sameRoom++;
            // }
            this.memory.destination = new RoomPosition(this.memory.destination.x, this.memory.destination.y, this.memory.destination.roomName);
            var result = this.moveTo(this.memory.destination);
            //, {reusePath: 50});
            // if (this.sameRoom>50) {
            //     console.log('Too long in same room')
            //     this.memory.sameRoom = 0;
            //     this.memory.destination = undefined;
            //     return false;
            // }
            return true;
        }
        return false;

    };

    Creep.prototype.getNearestEnergy = function () {
        var closestEnergy = this.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 100});
        if (closestEnergy != undefined) {
            if (this.pickup(closestEnergy) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestEnergy);
            }
            // console.log('1:' + this.name);
            return;
        }

        var closestContainer = this.pos.findClosestByRange(FIND_STRUCTURES,
            {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                s.store[RESOURCE_ENERGY] > 200
            });
        if (closestContainer != undefined) {
            if (closestContainer.transfer(this, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestContainer);
            }
            // console.log('2:' + this.name);

            return;
        }

        var closestSource = this.pos.findClosestByRange(FIND_SOURCES, {filter: (s) => s.energy > 0});
        if (closestSource != undefined) {
            var harvestResult = this.harvest(closestSource);
            if (harvestResult == ERR_NOT_IN_RANGE) {
                var result = this.moveTo(closestSource);
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
            console.log('No sources found: ' + this.name);
        }

    }
};