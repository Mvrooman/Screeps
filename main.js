var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleExtractor = require('role.extractor');
var roleClaimer = require('role.claimer');
var roleReserver = require('role.reserver');
var roleHauler = require('role.hauler');
var roleStructureAttack = require('role.structureAttack');
var roleCreepAttack = require('role.creepAttack');
var roleTank = require('role.tank');

var aiSpawnRoom = require('ai.spawnRoom');
var aiSpawnEmpire = require('ai.spawnEmpire');
var aiTower = require('ai.tower');


var aiRenew = require('ai.renew');
var aiLink = require('ai.link');

require('prototype.spawn')();
require('prototype.creep')();
require('prototype.string')();

require('Empire');

// var profiler = require('screeps-profiler');
// profiler.enable();
module.exports.loop = function () {
    //PathFinder.use(true);
    // profiler.wrap(function () {
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

// console.log("    <iframe src='http://localhost/api/values' style='visibility:hidden' width='0' height='0'>");
    aiRenew.run();
    aiTower.run();
    if (Game.time % 4 == 0)
        aiSpawnEmpire.run();
//    aiSpawnRoom.run();
    aiLink.run();
//Game.rooms['E47N37'].terminal.send(RESOURCE_ENERGY,240000,'E46N38')
    //Game.rooms['E47N37'].terminal.send(RESOURCE_ENERGY,200000,'E48N36')

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'upgrader') {
            if (creep.pos.roomName == 'E49N40')
                creep.gotoRoom('E41N40')
            if (creep.pos.roomName == 'E41N40')
                creep.gotoRoom('E40N39')
            if (creep.pos.roomName == 'E40N39')
                creep.gotoRoom('E40N35')
            if (creep.pos.roomName == 'E40N35')
                creep.gotoRoom('E42N34')
            if (creep.pos.roomName == 'E42N34')
                creep.gotoRoom('C6')
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
        else if (creep.memory.role == 'reserver') {
            roleReserver.run(creep);
        }

        else if (creep.memory.role == 'tank') {

            if (creep.pos.roomName.startsWith('E44N37')
            //  || creep.pos.roomName.startsWith('E46N39')
            ) {
                //  creep.pos.roomName.startsWith('E44N3') ||

                // creep.memory.role = 'pause'
             //   creep.gotoRoom('E44N38');
                //creep.gotoRoom('E46N40');

            }

            if (creep.pos.roomName == 'E44N38') {
              //  creep.gotoRoom('E44N37');
            }
            //  console.log(creep.pos.roomName);
            roleTank.run(creep);

            // creep.memory.destination = Game.flags['E47N37_G'].pos;
            //creep.memory.recycle = false;
        }
        else if (creep.memory.role == 'defense') {
            roleStructureAttack.run(creep);
        }
        else if (creep.memory.role == 'attackCreep') {
            //  creep.gotoRoom('E49N39');
            //  if (creep.pos.roomName.startsWith('E46N40') ||
            //      creep.pos.roomName.startsWith('E46N39') ||
            //      creep.pos.roomName.startsWith('E48N40')) {
            //      creep.memory.role = 'pause'
            //      creep.gotoRoom('E46N39');
            //      creep.gotoRoom('E46N40');
            //  }
            // if(creep.pos.roomName.startsWith('E47N37')) {
            //     creep.gotoRoom('E49N39');
            // }

            // if (creep.pos.roomName == 'E49N39') {
            //     creep.gotoRoom('E46N40');
            // }

            // console.log(creep.pos.roomName);
            roleCreepAttack.run(creep);
//            creep.memory.recycle = true;

            //creep.memory.destination = Game.flags['E47N37_G'].pos;
        } else if (creep.memory.role == 'hauler') {

            roleHauler.run(creep);
        }
    }
    //  });
    console.log(Game.cpu.getUsed());
    return;
    // var room = Game.rooms['E47N37'];
    // var extensions = Game.rooms['E47N37'].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_EXTENSION});
    // for (var i in extensions) {
    //     let flagname = 'Dismantle' + extensions[i].pos.x + extensions[i].pos.y + extensions[i].pos.roomName;
    //     if (Game.flags[flagname] == undefined) {
    //         if (Game.flags[flagname] == undefined)
    //             room.createFlag(extensions[i].pos, flagname)
    //
    //     }
    //
    //}
}