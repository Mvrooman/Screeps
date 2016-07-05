var aiSpawn = {
    run: function () {
        var targetHarvesters = 5;
        var targetUpgraders = 3;
        var targetRepairers = 2;
        var targetBuilders = 6;

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        console.log(
            'Harvesters [' + harvesters.length + '/' + targetHarvesters + ']   ' +
            'Upgraders[' + upgraders.length + '/' + targetUpgraders + ']   ' +
            'Builders[' + builders.length + '/' + targetBuilders + ']   ' +
            'Repairers[' + repairers.length + '/' + targetRepairers + ']');

        if (harvesters.length < targetHarvesters) {
            Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'harvester');
            return;
        }
        if (upgraders.length < targetUpgraders) {
            Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'upgrader');
            return;
        }
        if (builders.length < targetBuilders) {
            Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'builder');
            return;
        }
        if (repairers.length < targetRepairers) {
            Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'repairer');
            return;
        }

    }
}
module.exports = aiSpawn;
