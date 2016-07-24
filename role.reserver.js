var roleReserver = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            return;
        }
        if(creep.traveling()){
            return;
        }

       // if (creep.claimController(creep.room.controller) < 0) {
            if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
                creep.reserveController(creep.room.controller)
            }
        creep.attackController(creep.room.controller)
       // }
    }
};

module.exports = roleReserver;