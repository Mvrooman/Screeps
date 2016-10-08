var roleRepairer = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(200, 700)) {
            return;
        }
        if (creep.traveling()) {
            return;
        }

        if (creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
        }
        if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }

        if (creep.memory.repairing) {
            var structure = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => s.hits < Math.min(s.hitsMax, 3200000) * 0.9
                    && (s.structureType != STRUCTURE_WALL || s.hits < 2600000)
                    && (s.structureType != STRUCTURE_RAMPART || s.hits < 2600000)
                    && creep.room.name == s.room.name
                    && s.structureType != STRUCTURE_ROAD
                });
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure, {maxRooms: 1, reusePath: 20, costCallback: Empire.stayInRoom});
                    creep.repair(structure)
                }
            }
        }
        else {
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleRepairer;