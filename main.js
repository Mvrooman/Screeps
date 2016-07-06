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
    for (var name in Memory.flags) {
        if (!Game.flags[name]) {
            delete Memory.flags[name];
            console.log('Clearing non-existing flag memory:', name);
        }
    }

    // Game.creeps['Declan'].moveTo(27,36);
    // Game.creeps['Mason'].moveTo(41,19);

    aiRenew.run();
    aiSpawn.run();

    var tower = Game.spawns.HomeSpawn.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER});
    if (tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hitsMax > 1 && structure.hits < 3000 && structure.structureType == STRUCTURE_RAMPART //&& structure.structureType == STRUCTURE_WALL
        });
        if (closestDamagedStructure) {
            console.log('repair tower:' + closestDamagedStructure.pos  )
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else {
            if (creep.memory.role == 'upgrader') {
                // if(creep.body.length==6){creep.memory.recycle=true;}
                roleUpgrader.run(creep);
            }
            else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            else if (creep.memory.role == 'repairer') {
                if (creep.body.length == 6) {
                    creep.memory.recycle = true;
                }

                roleRepairer.run(creep);
            }
            else if (creep.memory.role == 'extractor') {
                roleExtractor.run(creep);
            }
        }
    }
}