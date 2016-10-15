var roleTank = {

    /** @param {Creep} creep **/
    run: function (creep) {

        //console.log('Tank: ' + creep.room.name)
        var heal = true;

        if (creep.hits < creep.hitsMax) {
            creep.heal(creep);
        }
        if (creep.traveling()) {
            return;
        }
        if (creep.needsRecycled()) {
            return;
        }
        // if (creep.needsRenew(200, 400)) {
        //     return;
        // }

        else if (heal) {
            var creepToHeal = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (c) => c.hits < c.hitsMax && c.room.name == creep.room.name});
            if (creepToHeal != undefined && creep.getActiveBodyparts(HEAL) > 0) {
                console.log('found creep to heal');
                let r = creep.rangedHeal(creepToHeal);
                let h = creep.heal(creepToHeal);
                creep.moveTo(creepToHeal);
                return;
            }
        }
        if (creep.hits < creep.hitsMax && heal) {
            let result = creep.heal(creep);
            // if (result == 0)
            //     return;
        }

        var closestDismantleFlag = creep.pos.findClosestByPath(FIND_FLAGS, {filter: (f) => f.name.startsWith('Dismantle')});
        if (closestDismantleFlag != undefined) {
            var dismantleTarget = creep.room.find(FIND_HOSTILE_STRUCTURES, {filter: (s)=> s.pos.x == closestDismantleFlag.pos.x && s.pos.y == closestDismantleFlag.pos.y});
            if (dismantleTarget.length == 0) {
                dismantleTarget = creep.room.find(FIND_STRUCTURES, {filter: (s)=> s.pos.x == closestDismantleFlag.pos.x && s.pos.y == closestDismantleFlag.pos.y});
            }
            if (dismantleTarget.length == 0) {
                dismantleTarget = creep.room.find(FIND_MY_STRUCTURES, {filter: (s)=> s.pos.x == closestDismantleFlag.pos.x && s.pos.y == closestDismantleFlag.pos.y});
            }
        }
        if (dismantleTarget != undefined && dismantleTarget.length > 0) {
            //console.log('dismantling: ' + closestDismantleFlag.name);
            //console.log(JSON.stringify(dismantleTarget));
            var result;
            result = creep.dismantle(dismantleTarget[0]);
            //console.log('dismantle:' + result);
            if (result < 0) {
                result = creep.moveTo(dismantleTarget[0]);
                result = creep.dismantle(dismantleTarget[0]);
                result = creep.dismantle(dismantleTarget[1]);

                //console.log('Move result: ' + result)
            }
            //creep.dismantle(dismantleTarget[0])
            // if (creep.hits < creep.hitsMax) {
            //     creep.heal(creep);
            // }
            return;
        }
        else if (closestDismantleFlag != undefined && dismantleTarget == undefined || (dismantleTarget != undefined && dismantleTarget.length == 0 )) {
            console.log('removing flag')
            closestDismantleFlag.remove();
            // console.log('no dismantle target')
        }

        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile && creep.getActiveBodyparts(ATTACK) > 0) {
            if (creep.attack(closestHostile) < 0) {
                creep.moveTo(closestHostile);
                creep.attack(closestHostile)
            }
            // if (creep.hits < creep.hitsMax) {
            //     creep.heal(creep);
            // }
        }

        var closestHostileStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES,
            {filter: (s) => s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART && s.hitsMax > 1});
        if (closestHostileStructure) {
            if (creep.dismantle(closestHostileStructure) < 0) {
                creep.moveTo(closestHostileStructure);
            }
            if (!creep.memory.dismantle) {
                return;
            }
            // if (creep.hits < creep.hitsMax) {
            //     creep.heal(creep);
            //} return;
        }
        // var enemySites = creep.pos.findClosestByRange(FIND_HOSTILE_CONSTRUCTION_SITES, {
        //     filter: (s)=> s.room.name == creep.room.name
        //       && s.pos.x != creep.pos.x && s.pos.y != creep.pos.y
        // })
        // if (enemySites) {
        //     creep.say('SITE')
        //     creep.moveTo(enemySites)
        // }

    }
};

module.exports = roleTank;