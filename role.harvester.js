var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {

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

            // var closestEnergy = creep.pos.findClosestByPath(FIND_DROPPED_ENERGY, {filter: (s) => s.room == this.room && s.amount >= 100});
            // if (closestEnergy != undefined) {
            //     if (creep.pickup(closestEnergy) == ERR_NOT_IN_RANGE) {
            //         creep.moveTo(closestEnergy);
            //     }
            // }
            // var closestSource = creep.pos.findClosestByPath(FIND_SOURCES);
            // if (closestSource != undefined) {
            //     if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
            //         creep.moveTo(closestSource);
            //     }
            //}
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
                var closestContainer = creep.pos.findClosestByPath(FIND_STRUCTURES,
                    {
                        filter: (s) => s.structureType == STRUCTURE_CONTAINER &&
                        s.store[RESOURCE_ENERGY] < 2000
                    });
                if (closestContainer != undefined) {
                    if (creep.transfer(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestContainer);
                    }
                    return;
                }
                console.log('No where to deliver energy: ' + creep.name);

                creep.drop(RESOURCE_ENERGY);
            }
        }
    }
}

module.exports = roleHarvester;