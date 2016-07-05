var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRenew()) {
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