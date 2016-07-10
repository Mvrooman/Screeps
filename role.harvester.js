var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(500, 1400)) {
            return;
        }
        if (creep.traveling()) {
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


            // creep.getNearestEnergy();
            // return;
            var closestLink = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LINK && s.energy > 0 && s.pos.roomName == creep.pos.roomName && s.pos.inRangeTo(creep.room.controller.pos, 10)
            });
            if (closestLink != undefined) {
                if (closestLink.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestLink);
                }
            }

            var closestEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == creep.room && s.amount >= 100});
            var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER ) &&
                    s.store[RESOURCE_ENERGY] > 200 &&
                    s.pos.roomName == creep.pos.roomName &&
                    s.pos.findInRange(FIND_SOURCES, 1).length > 0
                });

            if (closestEnergy != undefined) {
                if (closestEnergy.amount > 800 || closestContainer == undefined ||
                    creep.pos.getRangeTo(closestEnergy.pos.x, closestEnergy.pos.y) <= creep.pos.getRangeTo(closestContainer.pos.x, closestContainer.pos.y)) {
                    var result;
                    // if (closestEnergy.pos.inRangeTo(closestContainer, 0)) {
                    //     result = closestContainer.transfer(this, RESOURCE_ENERGY);
                    // }
                    // else {
                    result = creep.pickup(closestEnergy)
                    // }
                    if (result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestEnergy);
                    }
                    return;
                }
                // console.log('1:' + creep.name);
            }

            if (closestContainer != undefined) {
                var result = closestContainer.transfer(creep, RESOURCE_ENERGY);
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestContainer);
                }

                return;
            }
            else {
                console.log('no container')
            }

            var closestStorage = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => (s.structureType == STRUCTURE_STORAGE ) &&
                    s.store[RESOURCE_ENERGY] > 200 &&
                    s.pos.roomName == creep.pos.roomName
                });

            if (closestStorage != undefined) {
                if (closestStorage.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStorage);
                }
                return;
            }

            var closestSource = creep.pos.findClosestByRange(FIND_SOURCES, {filter: (s) => s.energy > 0});
            if (closestSource != undefined) {
                var harvestResult = creep.harvest(closestSource);
                if (harvestResult == ERR_NOT_IN_RANGE) {
                    var result = creep.moveTo(closestSource);
                    // if (result < 0 && result != -11) {
                    //     console.log('Error moving to source: ' + result);
                    // }
                    // console.log('3:' + creep.name);
                    return;
                }
                // if (harvestResult < 0) {
                //     console.log('Harvest Error: ' + creep.name + ' : ' + harvestResult);
                // }
            }
            else {
                console.log('No sources found: ' + creep.name);
            }

        }
        else {

            var closestStructure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity && s.structureType != STRUCTURE_LINK
            });

            if (closestStructure != undefined) {
                if (creep.transfer(closestStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStructure);
                }
            }
            else {
                var closestContainer = creep.pos.findClosestByPath(FIND_STRUCTURES,
                    {
                        filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                        s.store[RESOURCE_ENERGY] < s.storeCapacity && s.pos.findInRange(FIND_SOURCES, 1).length == 0
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