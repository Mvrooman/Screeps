var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleExtractor = require('role.extractor');

var aiSpawn = require('ai.spawn');
var aiRenew = require('ai.renew');
require('prototype.spawn')();
require('prototype.creep')();


module.exports.loop = function () {

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // Game.creeps['Declan'].moveTo(27,36);
    // Game.creeps['Mason'].moveTo(41,19);
    


    aiRenew.run();
    aiSpawn.run();

// var tower = Game.getObjectById('TOWER_ID');
// if (tower) {
//     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
//         filter: (structure) => structure.hits < structure.hitsMax
//     });
//     if (closestDamagedStructure) {
//         tower.repair(closestDamagedStructure);
//     }

//     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
//     if (closestHostile) {
//         tower.attack(closestHostile);
//     }
// }


    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if (creep.memory.role == 'extractor') {
            roleExtractor.run(creep);
        }
    }
}