var roleExtractor = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(100, 1400)) {
            return;
        }
        if (creep.pos.x != creep.memory.home.x || creep.pos.y != creep.memory.home.y) {
            creep.say('Going Home');
            creep.moveTo(creep.memory.home.x, creep.memory.home.y);
            return;
        }
        else {
            var closestSource = creep.pos.findClosestByRange(FIND_SOURCES);
            if (closestSource != undefined) {
                var result = creep.harvest(closestSource);
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.memory.home.x, creep.memory.home.y);
                }
            }
        }
    }
}

module.exports = roleExtractor;