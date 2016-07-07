var roleCreepAttack = {

    /** @param {Creep} creep **/
    run: function (creep) {
        // if (creep.needsRecycled()) {
        //     return;
        // }
        if (creep.traveling()) {
            return;
        }


        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            if (creep.attack(closestHostile) < 0) {
                creep.moveTo(closestHostile);
            }
            return;
        }
        var closestHostileStructure = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, 
            {filter: (s) => s.structureType != STRUCTURE_WALL && s.hitsMax > 1});
        if (closestHostileStructure) {
            if (creep.attack(closestHostileStructure) < 0) {
                creep.moveTo(closestHostileStructure);
            }
            return;
        }
    }
};

module.exports = roleCreepAttack;