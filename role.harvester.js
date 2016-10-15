var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            //return;
        }
        if (creep.needsRenew(500, 800)) {
            return;
        }
        if (creep.traveling()) {
            return;
        }

        if (_.sum(creep.carry) != creep.carry[RESOURCE_ENERGY]) {
            creep.memory.role = 'collector';
            return;
        }

        if (creep.memory.harvesting == undefined) {
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting && _.sum(creep.carry) == creep.carryCapacity) {
            creep.memory.harvesting = false;
        }
        if (!creep.memory.harvesting && _.sum(creep.carry) == 0) {
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting) {


            // creep.getNearestEnergy();
            // return;
            var closestLink = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LINK && s.energy > 0 && s.pos.roomName == creep.pos.roomName && s.pos.inRangeTo(creep.room.controller.pos, 10) && s.pos.inRangeTo(creep.pos, 15)
            });
            if (closestLink != undefined) {
                if (closestLink.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestLink, {maxRooms: 1, reusePath: 20});
                    closestLink.transferEnergy(creep)
                }

                //  return;
            }

            var closestEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY, {filter: (s) => s.room == creep.room && s.amount >= 100});

            // var closestContainer = this.pos.findClosestByRange(FIND_STRUCTURES,
            //     {
            //         filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
            //         s.store[RESOURCE_ENERGY] > 600 &&
            //         s.pos.roomName == this.pos.roomName
            //     });
            var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => ((s.structureType == STRUCTURE_CONTAINER
                        && s.pos.findInRange(FIND_SOURCES, 1).length > 0
                    )) &&
                    //|| s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                    s.store[RESOURCE_ENERGY] > 1000 &&
                    s.pos.roomName == creep.pos.roomName
                    //&&                    s.pos.findInRange(FIND_SOURCES, 1).length > 0
                });

            if (!closestContainer) {
                closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                    {
                        filter: (s) => (s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                        s.store[RESOURCE_ENERGY] > 200 &&
                        s.pos.roomName == creep.pos.roomName
                        //&&                    s.pos.findInRange(FIND_SOURCES, 1).length > 0
                    });
            }

            if (closestEnergy != undefined) {
                creep.say('Energy!');
                //console.log('Energy!')
                if (closestEnergy.amount > 3100) {
                    console.log('large energy drop warning (' + closestEnergy.amount + '): ' + creep.room.name)
                }
                if (closestEnergy.amount > 100 || closestContainer == undefined ||
                    creep.pos.getRangeTo(closestEnergy.pos.x, closestEnergy.pos.y) <= creep.pos.getRangeTo(closestContainer.pos.x, closestContainer.pos.y)) {
                    var result1;
                    if (closestContainer != undefined && closestEnergy.pos.inRangeTo(closestContainer, 0)) {
                        result = closestContainer.transfer(creep, RESOURCE_ENERGY);
                        if (result == ERR_NOT_IN_RANGE) {
                            creep.moveTo(closestContainer, {reusePath: 20});
                            closestContainer.transfer(creep, RESOURCE_ENERGY);
                            creep.pickup(closestEnergy)
                        }
                        return;
                    }
                    else {
                        var result2 = creep.pickup(closestEnergy)
                    }
                    if (result2 == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestEnergy, {maxRooms: 1, reusePath: 20});
                        creep.pickup(closestEnergy);
                    }

                    return;
                }
            }

            if (closestContainer != undefined) {
                var result = closestContainer.transfer(creep, RESOURCE_ENERGY);
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestContainer, {reusePath: 5});
                    closestContainer.transfer(creep, RESOURCE_ENERGY)
                }

                return;
            }
            else {
                //console.log('no source container: ' + creep.room.name);
            }

            var closestStorage = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => (s.structureType == STRUCTURE_STORAGE ) &&
                    s.store[RESOURCE_ENERGY] > 200 &&
                    s.pos.roomName == creep.pos.roomName
                });

            if (closestStorage != undefined) {
                if (closestStorage.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStorage, {maxRooms: 1, reusePath: 20});
                    closestStorage.transfer(creep, RESOURCE_ENERGY)
                }

                return;
            }

            var closestSource = creep.pos.findClosestByRange(FIND_SOURCES, {filter: (s) => s.energy > 0 && s.room.name == creep.pos.roomName});
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
            var closestStructure;

            closestStructure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity-150 && s.structureType == STRUCTURE_TOWER
            });

            if (!closestStructure) {
                closestStructure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (s) => s.energy < s.energyCapacity && s.structureType != STRUCTURE_LINK && s.structureType != STRUCTURE_STORAGE
                });
            }

            if (closestStructure) {
                if (creep.transfer(closestStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStructure, {maxRooms: 1, reusePath: 20});
                    var result = creep.transfer(closestStructure, RESOURCE_ENERGY)
                    if (result == 0) {
                        console.log("HARVESTER RESULT: " + result)
                    }
                }
            }
            else {
                var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                    {
                        filter: (s) => (s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                        _.sum(s.store) < s.storeCapacity && s.pos.findInRange(FIND_SOURCES, 1).length == 0
                    });
                if (!closestContainer) {
                    closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                        {
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER ) &&
                            _.sum(s.store) < s.storeCapacity && s.pos.findInRange(FIND_SOURCES, 1).length == 0
                        });
                }
                if (closestContainer != undefined) {
                    if (creep.transfer(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestContainer, {maxRooms: 1, reusePath: 20});
                        creep.transfer(closestContainer, RESOURCE_ENERGY)
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