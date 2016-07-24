var roleClaimer = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.traveling()) {
            return;
        }
        console.log(creep.claimController(creep.room.controller));
        if (creep.claimController(creep.room.controller) < 0) {
            if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleClaimer;