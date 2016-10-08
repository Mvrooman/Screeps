var roleCollector = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.needsRecycled()) {
            //return;
        }
        if (creep.needsRenew(500, 800)) {
            return;
        }
        if (creep.traveling()) {
            return;
        }

        if (creep.memory.harvesting == undefined) {
            creep.memory.harvesting = true;
        }
        //creep.say(creep.memory.harvesting && _.sum(creep.carry) == creep.carryCapacity)
        if (creep.memory.harvesting && (_.sum(creep.carry) === creep.carryCapacity)) {
            creep.say('FULL')
            creep.memory.harvesting = false;
        }

        if (!creep.memory.harvesting && _.sum(creep.carry) === 0) {
            creep.say('READY')
            creep.memory.harvesting = true;
        }
        if (creep.memory.harvesting) {

            closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES,
                {
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.pos.roomName == creep.pos.roomName && s.store[RESOURCE_ENERGY] != _.sum(s.store)
                });
            if (closestContainer != undefined) {
                creep.say('COLLECTING')
                for (var resourceType in closestContainer.store) {
                    if (closestContainer.transfer(creep, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestContainer);
                        return;
                    }
                }
            }
            else {
                //creep.memory.role = 'harvester';
                creep.memory.harvesting = false;
                if (_.sum(creep.carry)==0) {
                    creep.memory.role = 'harvester'
                    creep.say('DONE COLLECTING')
                }
                else {
                    creep.say('Nothing to do')
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
                return;
            }
        }
    }
}
module.exports = roleCollector;