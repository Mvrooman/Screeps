var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        //creep.say('B');
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(200, 800)) {
            return;
        }
        if (creep.traveling()) {
            return;
        }
        if(creep.pos.roomName=='E43N34')
        {
          //  creep.memory.destination = undefined;
            // creep.memory.destination=undefined;
            // creep.drop(RESOURCE_ENERGY);
            //creep.gotoRoom('C6');
        }
        if (creep.memory.building == undefined) creep.memory.building = false;

        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if (creep.memory.building) {
            var closestSite = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);
            if (closestSite != undefined) {
                if (creep.build(closestSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestSite, {maxRooms: 1,reusePath: 50});
                }
                creep.build(closestSite);
            }
            else {
                console.log('No build sites in ' + creep.room.name);
                creep.memory.role = 'upgrader';
                creep.memory.upgrading = true;
                console.log('Builder -> Upgrader');
            }
        }
        else {
            creep.getNearestEnergy();
        }
    }
};

module.exports = roleBuilder;