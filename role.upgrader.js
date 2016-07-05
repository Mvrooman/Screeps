var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (!creep.memory.renewing && creep.ticksToLive < 500) {
            creep.memory.renewing = true;
        }
        if (creep.memory.renewing) {
            if (creep.ticksToLive > 1400) {
                creep.memory.renewing = false;
            }
            var closestSpawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
            creep.moveTo(closestSpawn);
            return;
        }

        if (creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
        }
        if (creep.memory.upgrading) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var closestSource = creep.pos.findClosestByPath(FIND_SOURCES);
            if (closestSource != undefined) {
                if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestSource);
                }
                //creep.pos.
            }
        }
    }
};

module.exports = roleUpgrader;