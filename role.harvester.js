var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.carry.energy < creep.carryCapacity) {
            // var sources = creep.room.find(FIND_SOURCES);
            // if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(sources[0]);
            // }


            var closestSource = creep.pos.findClosestByPath(FIND_SOURCES);
            
            if (closestSource != undefined) {
                if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestSource);
                }
            }
        }
        else {

            var closestStructure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity
            });

            if (closestStructure != undefined) {
                if (creep.transfer(closestStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStructure);
                }
            }
        }
    }
}
module.exports = roleHarvester;