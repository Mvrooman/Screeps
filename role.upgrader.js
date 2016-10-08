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
        if (creep.needsRenew(500, 1000)) {
            return;
        }


        if (creep.room.find(FIND_CONSTRUCTION_SITES).length > 0 && !creep.memory.manual) {
            console.log('Upgrader -> Builder ' + creep.room.name);
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
            var result = creep.upgradeController(creep.room.controller);
           // if (result == ERR_NOT_IN_RANGE) {
                if (Memory.kernal.pathFinding) {
                    creep.moveTo(creep.room.controller, {reusePath: 5, swampCost: 1, costCallback: Empire.stayInRoom});
                }
                else {
                    creep.moveTo(creep.room.controller, {reusePath: 5, costCallback: Empire.stayInRoom});
                }
          //  }
            if (result != OK && result != ERR_NOT_IN_RANGE) {
                console.log("Upgrade error: " + result + " " + creep.room.name);
                if (result == ERR_NOT_OWNER) {
                    // creep.memory.role='repairer';
                }
            }
        }
        else {
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleUpgrader;