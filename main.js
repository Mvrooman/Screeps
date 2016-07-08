var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleExtractor = require('role.extractor');
var roleClaimer = require('role.claimer');
var roleHauler = require('role.hauler');
var roleStructureAttack = require('role.structureAttack');
var roleCreepAttack = require('role.creepAttack');


//var aiSpawn = require('ai.spawn');
var aiSpawnRoom = require('ai.spawnRoom');

var aiRenew = require('ai.renew');
require('prototype.spawn')();
require('prototype.creep')();
require('prototype.string')();

//var profiler = require('screeps-profiler');
//profiler.enable();
module.exports.loop = function () {
  //  profiler.wrap(function () {
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


        aiRenew.run();
        //aiSpawn.run();
        aiSpawnRoom.run();


        var tower = Game.spawns.HomeSpawn.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER});
        if (tower) {
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hitsMax > 1 && structure.hits < 3000 &&
                    (structure.structureType == STRUCTURE_RAMPART
                    || structure.structureType == STRUCTURE_WALL)

                })
                ;
            if (closestDamagedStructure) {
                console.log('repair tower:' + closestDamagedStructure.pos)
                tower.repair(closestDamagedStructure);
            }


        }

        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            else {
                if (creep.memory.role == 'upgrader') {
                    roleUpgrader.run(creep);
                }
                else if (creep.memory.role == 'builder') {
                    roleBuilder.run(creep);
                }
                else if (creep.memory.role == 'repairer') {

                    roleRepairer.run(creep);
                }
                else if (creep.memory.role == 'extractor') {
                    roleExtractor.run(creep);
                }
                else if (creep.memory.role == 'claimer') {
                    roleClaimer.run(creep);
                }
                else if (creep.memory.role == 'hauler') {
                    roleHauler.run(creep);
                }
                else if (creep.memory.role == 'tank') {
                    roleStructureAttack.run(creep);
                }
                else if (creep.memory.role == 'defense') {
                    roleStructureAttack.run(creep);
                }
                else if (creep.memory.role == 'attackCreep') {
                    roleCreepAttack.run(creep);
                }
            }
        }
   // });
    console.log(Game.cpu.getUsed())
}