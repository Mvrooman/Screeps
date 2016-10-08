var roleMiner = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            //return;
        }
        if (creep.needsRenew(500, 800)) {
            return;
        }
        var resources=  creep.pos.findInRange(FIND_DROPPED_RESOURCES, 1, {filter: (s) => s.room == creep.room})[0];
        if(resources)
        {
            creep.pickup(resources)
        }
        if (creep.traveling()) {
            return;
        }

        if (creep.memory.harvesting == undefined) {
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting && _.sum(creep.carry) == creep.carryCapacity) {
            creep.memory.harvesting = false;
        }
        if (!creep.memory.harvesting &&  _.sum(creep.carry) == 0) {
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting) {

            var mineralDeposit = creep.room.find(FIND_MINERALS)[0];

            if (mineralDeposit != undefined) {
                var harvestResult = creep.harvest(mineralDeposit);
                if (harvestResult == ERR_NOT_IN_RANGE) {
                    var result = creep.moveTo(mineralDeposit);
                    return;
                }


            }
        }
        else {

            var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => (s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_TERMINAL) &&
                    _.sum(s.store) < s.storeCapacity
                });

            if (closestContainer != undefined) {
                for (var resourceType in creep.carry) {
                    if (creep.transfer(closestContainer, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestContainer);
                        return;
                    }
                }
            }
        }
    }
}

module.exports = roleMiner;