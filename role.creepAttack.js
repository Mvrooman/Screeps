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
        if (!creep.memory.attack) {
            var closestAttackFlag = creep.pos.findClosestByPath(FIND_FLAGS, {filter: (f) => f.room.name == creep.room.name && f.name.startsWith('Attack')});

            if (closestAttackFlag != undefined) {
                console.log(closestAttackFlag.name)
                // console.log('attacking: ' + closestAttackFlag.name);
                var attackTarget = creep.room.find(FIND_STRUCTURES, {filter: (s)=> s.pos.x == closestAttackFlag.pos.x && s.pos.y == closestAttackFlag.pos.y});

                if (attackTarget.length > 0) {
                    //   creep.rangedAttack(attackTarget);
                    var result = creep.attack(attackTarget[0]);
                    if (creep.attack(attackTarget[0]) < 0) {
                        creep.moveTo(attackTarget[0], {costCallback: Empire.stayInRoom});
                        creep.attack(attackTarget[0])
                    }
                    return;
                }
                else {
                    closestAttackFlag.remove();
                    console.log('no attack target')
                }
            }
        }

        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            console.log('Hostile creep: ' + creep.room.name);
            creep.rangedAttack(closestHostile);
            var result = creep.attack(closestHostile);
            if (result != OK) {
                creep.moveTo(closestHostile, {costCallback: Empire.stayInRoom});
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
                    creep.moveTo(attackTarget[0], {costCallback: Empire.stayInRoom});
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
            {filter: (s) => s.structureType != STRUCTURE_RAMPART && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_STORAGE && s.hitsMax > 1});
        if (closestHostileStructure) {
            creep.rangedAttack(attackTarget)
            var result = creep.attack(closestHostileStructure);
            if (result < 0) {
                console.log(result)
                creep.moveTo(closestHostileStructure, {costCallback: Empire.stayInRoom});
            }
            return;
        }

        var sourceKeeper = _.sortBy(creep.room.find(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR}), (s) => s.ticksToSpawn)[0];
        if (sourceKeeper) {
            // creep.memory.destinationCount=5;
            // creep.memory.destination = sourceKeeper.pos;
            creep.moveTo(sourceKeeper, {costCallback: Empire.stayInRoom});
            return;
        }

        var enemySites = creep.pos.findClosestByRange(FIND_HOSTILE_CONSTRUCTION_SITES, {filter: (s)=> s.room.name == creep.room.name
       // && s.pos.x != creep.pos.x && s.pos.y != creep.pos.y
        })
        if (enemySites) {
            creep.moveTo(enemySites)
        }

        // else{
        //     var creepToHeal = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (c) => c.hits < c.hitsMax});
        //     if (creepToHeal != undefined && creep.getActiveBodyparts(HEAL) > 0) {
        //         console.log('found creep to heal');
        //         creep.rangedHeal(creepToHeal);
        //         creep.heal(creepToHeal);
        //         creep.moveTo(creepToHeal);
        //         return;
        //     }
        // }

    }
};

module.exports = roleCreepAttack;