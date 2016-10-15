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
            var structure;
             structure = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => s.hits < Math.min(s.hitsMax, 3200000) * 0.9
                    && (s.structureType != STRUCTURE_WALL || s.hits < 10000)
                    && (s.structureType != STRUCTURE_RAMPART || s.hits < 10000)
                    && creep.room.name == s.room.name
                    && s.structureType != STRUCTURE_ROAD
                });
            if (!structure) {
                structure = creep.pos.findClosestByRange(FIND_STRUCTURES,
                    {
                        filter: (s) => s.hits < Math.min(s.hitsMax, 3200000) * 0.9
                        && (s.structureType != STRUCTURE_WALL || s.hits < 50000)
                        && (s.structureType != STRUCTURE_RAMPART || s.hits < 50000)
                        && creep.room.name == s.room.name
                        && s.structureType != STRUCTURE_ROAD
                    });
            }
            if (!structure) {
                 structure = creep.pos.findClosestByRange(FIND_STRUCTURES,
                    {
                        filter: (s) => s.hits < Math.min(s.hitsMax, 3200000) * 0.9
                        && (s.structureType != STRUCTURE_WALL || s.hits < 250000)
                        && (s.structureType != STRUCTURE_RAMPART || s.hits < 250000)
                        && creep.room.name == s.room.name
                        && s.structureType != STRUCTURE_ROAD
                    });
            }
            if (!structure) {
                structure = creep.pos.findClosestByRange(FIND_STRUCTURES,
                    {
                        filter: (s) => s.hits < Math.min(s.hitsMax, 3200000) * 0.9
                        && (s.structureType != STRUCTURE_WALL || s.hits < 3050000)
                        && (s.structureType != STRUCTURE_RAMPART || s.hits < 3050000)
                        && creep.room.name == s.room.name
                        && s.structureType != STRUCTURE_ROAD
                    });
            }
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE|| Game.time % 9 == 0) {
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