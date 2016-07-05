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
};