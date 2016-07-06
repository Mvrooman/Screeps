var roleExtractor = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.needsRenew(300, 1400)) {
            return;
        }

        var closestSource = creep.pos.findClosestByRange(FIND_SOURCES);
        if (closestSource != undefined) {
            var result = creep.harvest(closestSource);
            if (result == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.memory.home.x, creep.memory.home.y);
            }
        }
    }
}

module.exports = roleExtractor;