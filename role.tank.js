var roleTank = {

    /** @param {Creep} creep **/
    run: function (creep) {
        // if (creep.needsRecycled()) {
        //     return;
        // }
        if (creep.traveling()) {
            return;
        }

        if (creep.hits < creep.hitsMax) {
            creep.heal(creep);
        }
        else {
            var creepToHeal = creep.pos.findClosestByRange(FIND_CREEPS, {filter: (c) => c.hits < c.hitsMax});
            if (creepToHeal != undefined) {
                creep.heal(creepToHeal);
            }
        }

        var closestDismantleFlag = creep.pos.findClosestByPath(FIND_FLAGS, {filter: (f) => f.name.startsWith('Dismantle')});
        if (closestDismantleFlag != undefined) {
            console.log('dismantling: ' + closestDismantleFlag.name);
            var dismantleTarget = creep.room.find(FIND_STRUCTURES, {filter: (s)=> s.pos.x == closestDismantleFlag.pos.x && s.pos.y == closestDismantleFlag.pos.y});

            if (dismantleTarget != undefined) {
                if (creep.dismantle(dismantleTarget[0]) < 0) {
                    creep.moveTo(dismantleTarget[0]);
                }
                return;
            }
            else {
                console.log('no dismantle target')
            }
        }

        var closestHostileStructure = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES,
            {filter: (s) => s.structureType != STRUCTURE_WALL && s.hitsMax > 1});
        if (closestHostileStructure) {
            if (creep.attack(closestHostileStructure) < 0) {
                creep.moveTo(closestHostileStructure);
            }
            return;
        }
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            if (creep.attack(closestHostile) < 0) {
                creep.moveTo(closestHostile);

            }
        }
    }
};

module.exports = roleTank;