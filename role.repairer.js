var roleRepairer = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRenew(500, 1400)) {
            return;
        }

        if (creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
        }
        if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }

        if (creep.memory.repairing) {
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES,
                {
                    filter: (s) => s.hits < s.hitsMax * 0.8
                    && (s.structureType != STRUCTURE_WALL || s.hits < 3000)
                });
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
        }
        else {
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleRepairer;