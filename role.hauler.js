var roleHauler = {

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

        if (creep.memory.hauling == undefined) {
            creep.memory.hauling = false;
        }
        if (!creep.memory.hauling && creep.carry.energy == creep.carryCapacity) {
            creep.memory.destination = Game.flags[creep.memory.dropRoomName].pos;
            creep.memory.hauling = true;
            return;
        }
        if (creep.memory.hauling && creep.carry.energy == 0) {
            creep.memory.destination = Game.flags[creep.memory.pickupRoomName].pos;
            creep.memory.hauling = false;
            return;
        }
        if (!creep.memory.hauling) {
            creep.getNearestEnergy();
        }
        else {
            var closestStructure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity
            });

            if (closestStructure != undefined) {
                if (creep.transfer(closestStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStructure);
                }
            }
            else {
                var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
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
                else
                {
                    if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage);
                    }
                    return;
                }
                console.log('No where to deliver energy: ' + creep.name);

                creep.drop(RESOURCE_ENERGY);
            }
        }
    }
}

module.exports = roleHauler;