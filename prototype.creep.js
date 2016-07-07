module.exports = function () {
    Creep.prototype.needsRenew = function (minTicks, maxTicks) {
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
        if (this.memory.destination != undefined) {
            var destination = this.memory.destination;
            if (this.pos.x == destination.x && this.pos.y == destination.y && this.pos.roomName == destination.roomName) {
                console.log('Destination reached');
                if (this.move(TOP) != 0)
                    if (this.move(BOTTOM) != 0)
                        if (this.move(LEFT) != 0)
                            this.move(RIGHT);

                this.memory.destination = undefined;
                return false;
            }
            this.memory.destination = new RoomPosition(this.memory.destination.x, this.memory.destination.y, this.memory.destination.roomName);
            var result = this.moveTo(this.memory.destination);
            return true;
        }
        return false;
    };

    Creep.prototype.getNearestEnergy = function () {
        var closestEnergy = this.pos.findClosestByPath(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 10});
        if (closestEnergy != undefined) {
            if (this.pickup(closestEnergy) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestEnergy);
            }
            // console.log('1:' + this.name);
            return;
        }

        var closestContainer = this.pos.findClosestByPath(FIND_STRUCTURES,
            {
                filter: (s) => s.structureType == STRUCTURE_CONTAINER &&
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
            if (harvestResult < 0) {
                console.log('Harvest Error: ' + this.name + ' : ' + harvestResult);
            }
        }
        else {
            console.log('No sources found: ' + this.name);
        }

    }
};