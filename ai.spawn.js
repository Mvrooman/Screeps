var aiSpawn = {
    run: function () {
        var targetExtractors = 3;
        var targetHarvesters = 3;
        var targetUpgraders = 6;
        var targetRepairers = 2;
        var targetBuilders = 4;

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


        // Game.creeps['Molly'].memory.sourcePosition = new RoomPosition(25,4,'E47N37');
        // Game.creeps['Lincoln'].memory.sourcePosition = new RoomPosition(3,5,'E47N37');
        // Game.creeps['Leah'].memory.sourcePosition = new RoomPosition(10,38,'E48N37');

        if (extractors.length < targetExtractors &&false) {
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], {
                role: 'extractor',
                sourcePosition: new RoomPosition(10, 38, 'E48N37'),
                destination: Game.flags['E48N37'].pos
            });
            return;
        }
        if (harvesters.length < targetHarvesters) {

            Game.spawns.HomeSpawn.createCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], {role: 'harvester'});
            //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'harvester');
            return;
        }
        if (upgraders.length < targetUpgraders) {
            //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'upgrader');
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'upgrader'});
            return;
        }
        if (builders.length < targetBuilders) {
            Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'builder',destination:Game.flags['E48N37'].pos});
            //Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'builder'});
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
