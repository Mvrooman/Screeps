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
            this.moveTo(closestSpawn);
            return true;
        }
        return false;
    }

    Creep.prototype.needsRecycled = function () {

        if (this.memory.recycle) {
            this.say("Recycle Me")
            var closestSpawn = this.pos.findClosestByRange(FIND_MY_SPAWNS);
            this.moveTo(closestSpawn);
            return true;
        }
        return false;
    }

    Creep.prototype.getNearestEnergy = function () {
        var closestEnergy = this.pos.findClosestByPath(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 10});
        if (closestEnergy != undefined) {
            if (this.pickup(closestEnergy) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestEnergy);
            }
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
            return;
        }


        var closestSource = this.pos.findClosestByRange(FIND_SOURCES);
        if (closestSource != undefined) {
            if (this.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestSource);
            }
            return;
        }

    }
};