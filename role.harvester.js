var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
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
            // var sources = creep.room.find(FIND_SOURCES);
            // if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(sources[0]);
            // }

            var closestDroppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_ENERGY);
            if (closestDroppedEnergy != undefined) {
                if (creep.pickup(closestDroppedEnergy) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestDroppedEnergy);
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
                console.log('No where to deliver energy: '+creep.name);
            }

        }
    }
}

module.exports = roleHarvester;