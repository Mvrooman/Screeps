var roleExtractor = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(100, 1400)) {
            return;
        }
        var sourcePosition = new RoomPosition(creep.memory.sourcePosition.x, creep.memory.sourcePosition.y, creep.memory.sourcePosition.roomName);


        if (creep.pos.x != sourcePosition.x ||
            creep.pos.y != sourcePosition.y ||
            creep.room.name != sourcePosition.roomName) {
            creep.say('-> Source')
            var result = creep.moveTo(sourcePosition);
            return;
        }
        else {
            if(creep.memory.travelTime == undefined)
            {
                creep.memory.travelTime = 1500 - creep.ticksToLive;
            }
            var closestSource = creep.pos.findClosestByRange(FIND_SOURCES);
            if (closestSource != undefined) {
                var result = creep.harvest(closestSource);
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sourcePosition);
                    creep.harvest(closestSource);
                }
            }
        }
    }
}

module.exports = roleExtractor;