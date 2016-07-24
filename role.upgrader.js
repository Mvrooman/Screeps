var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function (creep) {
//gamecreep.say('U');

        if (creep.traveling()) {
            return;
        }
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(500, 1400)) {
            return;
        }



        if (creep.room.find(FIND_CONSTRUCTION_SITES).length > 0) {
            console.log('Upgrader -> Builder');
            creep.memory.role = 'builder'
            creep.memory.building = true;
            return;
        }

        if (creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
        }
        if (creep.memory.upgrading) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleUpgrader;