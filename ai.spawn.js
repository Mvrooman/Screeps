var aiSpawn = {
    run: function () {

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if (harvesters.length < 6) {
            var newName = Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'harvester');
            console.log('Spawning new harvester: ' + newName);
            return;
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if (builders.length < 3) {
            var newName = Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'builder');
            // if (newName != undefined)
            console.log('Spawning new builder: ' + newName);
            return;

        }

        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if (repairers.length < 2) {
            var newName = Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'repairer');
            // if (newName != undefined)
            console.log('Spawning new repairer: ' + newName);
            return;
        }
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if (upgraders.length < 3) {
            var newName = Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'upgrader');
            //  if (newName != undefined)
            console.log('Spawning new upgrader: ' + newName);
            return;

        }
    }
}
module.exports = aiSpawn;
