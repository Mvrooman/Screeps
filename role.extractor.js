var roleExtractor = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(100, 1400)) {
            return;
        }
        if (creep.memory.stuck && creep.traveling()) {
            return;
        }

        if (!creep.memory.sourcePosition) {
            console.log('No Source')
            return;
        }
        var sourcePosition = new RoomPosition(creep.memory.sourcePosition.x, creep.memory.sourcePosition.y, creep.memory.sourcePosition.roomName);


        if (creep.pos.x != sourcePosition.x ||
            creep.pos.y != sourcePosition.y ||
            creep.room.name != sourcePosition.roomName) {
            creep.say('-> Source')
            var result = creep.moveTo(sourcePosition, {reusePath: 20});
            if (creep.memory.travelTime == undefined && creep.pos.inRangeTo(sourcePosition, 2) && creep.room.name == sourcePosition.roomName) {
                creep.memory.travelTime = creep.lifespan() - creep.ticksToLive;
            }
            return;
        }
        else {
            if (creep.memory.travelTime == undefined && creep.pos.inRangeTo(sourcePosition, 2) && creep.room.name == sourcePosition.roomName) {
                creep.memory.travelTime = creep.lifespan() - creep.ticksToLive;
            }

            var closestEnergy = creep.pos.findInRange(FIND_DROPPED_ENERGY, 0)
            if (closestEnergy.length > 0) {
                if (closestEnergy.amount > 600) {
                    console.log("Energy Dropped (" + closestEnergy[0].amount + ") : " + JSON.stringify(creep.pos));
                }
                // creep.pickup(closestEnergy[0]);
            }

            var closestSource = creep.pos.findClosestByRange(FIND_SOURCES);
            if (closestSource != undefined) {
                var result = creep.harvest(closestSource);
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sourcePosition, {reusePath: 10});
                    creep.harvest(closestSource);
                }
                else if (result == OK && _.sum(creep.carry) > 40) {
                    var closestSite = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);
                    if (closestSite != undefined) {
                        creep.build(closestSite);
                    }
                }
            }
            // if (creep.carryCapacity == _.sum(creep.carry)) {
            //     creep.drop(RESOURCE_ENERGY);
            // }
        }
    }
}

module.exports = roleExtractor;