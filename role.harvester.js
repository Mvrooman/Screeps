var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if(creep.body.length < 9)
        {
            creep.memory.recycle = true;
        }
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(500, 1400)) {
            return;
        }

        if (creep.memory.harvesting == undefined) {
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = false;
        }
        if (!creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting) {
            creep.getNearestEnergy();
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
            else {
                console.log('No where to deliver energy: ' + creep.name);
               // creep.drop(RESOURCE_ENERGY);
            }
        }
    }
}

module.exports = roleHarvester;