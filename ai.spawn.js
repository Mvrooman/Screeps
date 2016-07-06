var aiSpawn = {
    run: function () {
        var targetExtractors = 2;
        var targetHarvesters = 3;
        var targetUpgraders = 3;
        var targetRepairers = 2;
        var targetBuilders = 5;

        var extractors = _.filter(Game.creeps, (creep) => creep.memory.role == 'extractor');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        console.log(
            'Harvesters [' + harvesters.length + '/' + targetHarvesters + ']   ' +
            'Upgraders[' + upgraders.length + '/' + targetUpgraders + ']   ' +
            'Builders[' + builders.length + '/' + targetBuilders + ']   ' +
            'Repairers[' + repairers.length + '/' + targetRepairers + ']  ' +
            'Extractors[' + extractors.length + '/' + targetExtractors + ']');

        if (extractors.length < targetExtractors && false) {
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], {role: 'extractor'});
            return;
        }
        if (harvesters.length < targetHarvesters) {
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'harvester'});
            //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'harvester');
            return;
        }
        if (upgraders.length < targetUpgraders) {
            //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'upgrader');
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'upgrader'});
            return;
        }
        if (builders.length < targetBuilders) {
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'builder'});
            //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'builder');
            return;
        }
        if (repairers.length < targetRepairers) {
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'repairer'});
            //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'repairer');
            return;
        }

    }
}
module.exports = aiSpawn;
