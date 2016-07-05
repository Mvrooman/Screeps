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

    Creep.prototype.getNearestEnergy = function () {
        var closestEnergy = this.pos.findClosestByPath(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 200});
        if (closestEnergy != undefined) {
            if (this.pickup(closestEnergy) == ERR_NOT_IN_RANGE) {
                this.moveTo(closestEnergy);
            }
        }
        else {

            var closestSource = this.pos.findClosestByPath(FIND_SOURCES);

            if (closestSource != undefined) {
                if (this.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                    this.moveTo(closestSource);
                }
            }
        }
    }
};