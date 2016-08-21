var roleTank = {

    /** @param {Creep} creep **/
    run: function (creep) {
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

        else {
            var creepToHeal = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (c) => c.hits < c.hitsMax });
            if (creepToHeal != undefined && creep.getActiveBodyparts(HEAL) > 0) {
                console.log('found creep to heal');
                creep.rangedHeal(creepToHeal);
                creep.heal(creepToHeal);
                creep.moveTo(creepToHeal);
                //return;
            }
        }
        if (creep.hits < creep.hitsMax) {
            let result = creep.heal(creep);
            // if (result == 0)
            //     return;
        }

        var closestDismantleFlag = creep.pos.findClosestByRange(FIND_FLAGS, {filter: (f) => f.name.startsWith('Dismantle')});
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

        var closestHostileStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES,
            {filter: (s) => s.structureType != STRUCTURE_WALL && s.hitsMax > 1});
        if (closestHostileStructure) {
            if (creep.attack(closestHostileStructure) < 0) {
                creep.moveTo(closestHostileStructure);
            }
            return;
            // if (creep.hits < creep.hitsMax) {
            //     creep.heal(creep);
            //} return;
        }
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile && creep.getActiveBodyparts(ATTACK) > 0) {
            if (creep.attack(closestHostile) < 0) {
                creep.moveTo(closestHostile);
            }
            // if (creep.hits < creep.hitsMax) {
            //     creep.heal(creep);
            // }
        }
    }
};

module.exports = roleTank;