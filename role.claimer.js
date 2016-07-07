var roleClaimer = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(500, 1400)) {
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
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleUpgrader;