var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        //creep.say('B');
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(500, 1400)) {
            return;
        }
        if (creep.traveling()) {
            return;
        }
        if (creep.memory.building == undefined) creep.memory.building = false;

        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if (creep.memory.building) {
            var closestSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (closestSite != undefined) {
                if (creep.build(closestSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestSite);
                }
                creep.build(closestSite);
            }
            else {
                console.log('No build sites in ' + creep.room.name);
                creep.memory.role = 'upgrader';
                creep.memory.upgrading = true;
                console.log('Upgrader -> Builder');
            }
        }
        else {
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleBuilder;