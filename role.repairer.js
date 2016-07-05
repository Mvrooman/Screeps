var roleRepairer = {

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
        }        if (creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
        }
        if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }

        if (creep.memory.repairing) {
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES,
                {
                    filter: (s) => s.hits < s.hitsMax
                     && (s.structureType != STRUCTURE_WALL || s.hits < 3000)
                });
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};

module.exports = roleRepairer;