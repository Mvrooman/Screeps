var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.firstSpawn == undefined) {
            creep.memory.firstSpawn = true;
        }
        if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.firstSpawn = false;
        }
        if (creep.memory.firstSpawn && creep.carry.energy != creep.carryCapacity) {
            creep.getNearestEnergy();
            return;
        }
        if (creep.carry.energy > 100
            //&& creep.memory.building
        ) {
            var closestSites = creep.pos.findInRange(FIND_MY_CONSTRUCTION_SITES, 3);
            if (closestSites && closestSites.length > 0) {
                var result = creep.build(closestSites[0]);
            }
        }


        if (creep.needsRecycled()) {
            return;
        }

        if (creep.needsRenew(200, 1400)) {
            return;
        }
        if (creep.traveling()) {
            return;
        }
        creep.firstSpawn = false;
        if (creep.pos.roomName == 'E43N34') {
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
                    if (Memory.kernal.pathFinding) {
                        creep.moveTo(closestSite, {reusePath: 5, swampCost: 1, costCallback: Empire.stayInRoom});
                    }
                    else {
                        creep.moveTo(closestSite, {reusePath: 5, costCallback: Empire.stayInRoom});
                    }
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