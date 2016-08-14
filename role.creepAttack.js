var roleCreepAttack = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.traveling()) {
            return;
        }
        if (creep.needsRecycled()) {
            return;
        }
        if (creep.needsRenew(400, 1400)) {
            return;
        }
        // var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        // if (closestHostile) {
        //
        //     creep.attack(closestHostile)
        //     //  }
        //     //return;
        // }

        var closestAttackFlag = creep.pos.findClosestByPath(FIND_FLAGS, {filter: (f) => f.name.startsWith('Attack')});

        if (closestAttackFlag != undefined) {
            // console.log('attacking: ' + closestAttackFlag.name);
            var attackTarget = creep.room.find(FIND_STRUCTURES, {filter: (s)=> s.pos.x == closestAttackFlag.pos.x && s.pos.y == closestAttackFlag.pos.y});

            if (attackTarget != undefined) {
                //   creep.rangedAttack(attackTarget);
                var result = creep.attack(attackTarget[0]);
                if (creep.attack(attackTarget[0]) < 0) {
                    creep.moveTo(attackTarget[0], {maxRooms: 2});
                    creep.attack(attackTarget[0])
                }
                return;
            }
            else {
                console.log('no attack target')
            }
        }


        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            creep.rangedAttack(closestHostile);
            var result = creep.attack(closestHostile);
            if (result != OK) {
                creep.moveTo(closestHostile,{maxRooms: 1});
                result = creep.attack(closestHostile)
            }
            if (result == OK) {
                return;
            }
            if (creep.getActiveBodyparts(HEAL) > 0 && creep.hitsMax > creep.hits) {
                creep.heal(creep);
            }
            return;
        }

        var closestDismantleFlag = creep.pos.findClosestByPath(FIND_FLAGS, {filter: (f) => f.name.startsWith('Dismantle')});

        if (closestDismantleFlag != undefined) {
            // console.log('attacking: ' + closestAttackFlag.name);
            var attackTarget = creep.room.find(FIND_STRUCTURES, {filter: (s)=> s.pos.x == closestDismantleFlag.pos.x && s.pos.y == closestDismantleFlag.pos.y});

            if (attackTarget != undefined) {
                creep.rangedAttack(attackTarget)
                var result = creep.attack(attackTarget[0])
                if (result < 0) {
                    creep.moveTo(attackTarget[0], {maxRooms: 1});
                    result = creep.attack(attackTarget[0])
                }
                if (result == 0)
                    return;

            }
            else {
                console.log('no attack target')
            }
        }

        if (creep.getActiveBodyparts(HEAL) > 0 && creep.hitsMax > creep.hits) {
            creep.heal(creep);
        }
        var closestHostileStructure = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES,
            {filter: (s) => s.structureType != STRUCTURE_WALL && s.hitsMax > 1});
        if (closestHostileStructure) {
            creep.rangedAttack(attackTarget)
            if (creep.attack(closestHostileStructure) < 0) {
                creep.moveTo(closestHostileStructure, {maxRooms: 2});
            }
            return;
        }

        var sourceKeeper = _.sortBy(creep.room.find(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR}), (s) => s.ticksToSpawn)[0];
        if (sourceKeeper) {
            creep.moveTo(sourceKeeper, {maxRooms: 2});
        }

    }
};

module.exports = roleCreepAttack;