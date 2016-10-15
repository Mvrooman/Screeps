var aiTower = {

    run: function () {

        let towers = _.filter(Game.structures, (s) => {
            return s.structureType == STRUCTURE_TOWER
        });
        for (let i in towers) {
            let tower = towers[i]
            //
            // var creep = tower.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (c) => c.hits < c.hitsMax});
            // {
            //     tower.heal(creep)
            // }

            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (h) => h.getActiveBodyparts(HEAL) > 0});
            if (closestHostile) {
                tower.attack(closestHostile);
            }

            else {
                closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (closestHostile) {
                    tower.attack(closestHostile);
                }
            }

            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_SPAWNS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }


            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hitsMax > 1 && structure.hits < 5000 && structure.structureType == STRUCTURE_RAMPART && structure.hits < structure.hitsMax
            });

            if (closestDamagedStructure) {
                console.log('repair tower:' + closestDamagedStructure.pos)
                tower.repair(closestDamagedStructure);
                return;
            }


            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hitsMax > 1 && structure.hits < 5000 && structure.structureType != STRUCTURE_ROAD && structure.hits < structure.hitsMax
            });

            if (closestDamagedStructure) {
                console.log('repair tower:' + closestDamagedStructure.pos)
                tower.repair(closestDamagedStructure);
            }


        }
    }
};
module.exports = aiTower;