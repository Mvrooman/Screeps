var roleCreepAttack = {

    /** @param {Creep} creep **/
    run: function (creep) {
        // if (creep.needsRecycled()) {
        //     return;
        // }
        if (creep.traveling()) {
            return;
        }

        var closestAttackFlag = creep.pos.findClosestByPath(FIND_FLAGS, {filter: (f) => f.name.startsWith('Attack')});

        if (closestAttackFlag != undefined) {
            console.log('attacking: ' + closestAttackFlag.name);
            var attackTarget = creep.room.find(FIND_STRUCTURES, {filter: (s)=> s.pos.x == closestAttackFlag.pos.x && s.pos.y == closestAttackFlag.pos.y});

            if (attackTarget != undefined) {
                if (creep.attack(attackTarget[0]) < 0) {
                    creep.moveTo(attackTarget[0]);
                }
                return;
            }
            else {
                console.log('no attack target')
            }
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