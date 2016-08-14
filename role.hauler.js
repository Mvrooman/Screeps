var roleHauler = {

    /** @param {Creep} creep **/
    run: function (creep) {

        // if(creep.pos.roomName=='E43N35')
        // {
        //     // creep.memory.destination=undefined;
        //     // creep.drop(RESOURCE_ENERGY);
        //     //creep.gotoRoom('L');
        //     creep.memory.pickupRoomName = 'E43N34'
        //     creep.gotoRoom('E43N34');
        //
        // }

            // if(creep.memory.pickupRoomName == 'E46N36')
            // {
            //     creep.gotoRoom('E46N36')
            // }


        if (creep.needsRecycled()) {
            return;
        }
         // if (creep.needsRenew(200, 400)) {
         //     return;
         // }
        if (creep.traveling()) {
            return;
        }
        if (Game.flags[creep.memory.dropRoomName] == undefined) {

            console.log('Error no drop flag');
            //creep.memory.role = 'harvester';
            return;
        }


        if (creep.memory.hauling == undefined) {
            creep.memory.hauling = false;
        }
        if (creep.memory.hauling == true && creep.pos.roomName != Game.flags[creep.memory.dropRoomName].pos.roomName) {
            //stuck?
            creep.memory.destination = Game.flags[creep.memory.dropRoomName].pos;
        }
        if (!creep.memory.hauling && creep.carry.energy == creep.carryCapacity) {
            if (creep.pos.roomName != creep.memory.dropRoomName)
                creep.memory.destination = Game.flags[creep.memory.dropRoomName].pos;
            creep.memory.hauling = true;
            return;
        }
        if (creep.memory.hauling && creep.carry.energy == 0) {
            if (creep.pos.roomName != creep.memory.pickupRoomName)
                creep.memory.destination = Game.flags[creep.memory.pickupRoomName].pos;
            creep.memory.hauling = false;
            return;
        }
        if (!creep.memory.hauling) {
            creep.getNearestEnergy();
        }
        else {
            var closestStructure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity &&
                (s.structureType != STRUCTURE_LINK ||
                (s.pos.inRangeTo(Game.flags[creep.memory.dropRoomName].pos, 3) && s.pos.inRangeTo(creep.pos, 10)))
            });
            if (closestStructure != undefined) {
                if (creep.transfer(closestStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestStructure, {reusePath: 20});
                    creep.transfer(closestStructure, RESOURCE_ENERGY)
                }
            }
            else {
                var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                    {
                        filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL)
                        && s.store[RESOURCE_ENERGY] < s.storeCapacity
                        && s.room.name == creep.pos.roomName
                    });
                if (closestContainer != undefined) {
                    if (creep.transfer(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestContainer, {reusePath: 20});
                        creep.transfer(closestContainer, RESOURCE_ENERGY)
                    }
                    return;
                }
                else {
                    if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage, {reusePath: 20});
                        creep.transfer(creep.room.storage, RESOURCE_ENERGY)
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