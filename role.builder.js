var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.needsRenew()) {
            return;
        }
        // if (!creep.memory.renewing && creep.ticksToLive < 500) {
        //     creep.memory.renewing = true;
        // }
        // if (creep.memory.renewing) {
        //     if (creep.ticksToLive > 1400) {
        //         creep.memory.renewing = false;
        //     }
        //     var closestSpawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        //     creep.moveTo(closestSpawn);
        //     return;
        // }

        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if (creep.memory.building) {
            var closestSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {filter: (s) =>s.structureType == STRUCTURE_WALL});
            if (closestSite != undefined) {
                if (creep.build(closestSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestSite);
                }
            }
            else {

                var closestSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                if (closestSite != undefined) {
                    if (creep.build(closestSite) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestSite);
                    }
                }
            }
        }
        else {
            var closestSource = creep.pos.findClosestByPath(FIND_SOURCES);
            if (closestSource != undefined) {
                if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestSource);
                }
            }
        }
    }
};

module.exports = roleBuilder;