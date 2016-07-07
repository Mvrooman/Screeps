var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(500, 1400)) {
            return;
        }

        if(creep.traveling()){
            return;
        }

        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if (creep.memory.building) {
            var closestSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {filter: (s) =>s.structureType != STRUCTURE_ROAD});
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
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleBuilder;