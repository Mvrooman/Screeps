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
var roleMiner = require('role.miner');
var roleCollector = require('role.collector');



var aiSpawnEmpire = require('ai.spawnEmpire');
var aiTower = require('ai.tower');
var aiStar = require('ai.star');

var aiRoad = require('ai.road');


var aiRenew = require('ai.renew');
var aiLink = require('ai.link');

require('prototype.spawn')();
require('prototype.creep')();
require('prototype.string')();
require('prototype.roomPosition')();


require('Empire');


primaryFunction = function()
{
    {
        var bucket = Game.cpu.bucket;
        if (Game.time % 2 == 0 && bucket < 1000) {
            return;
        }

        if (Game.time % 5 == 0 && bucket < 2000) {
            return;
        }

        if (Game.time % 9 == 0 && bucket < 3000) {
            return;
        }
//return;
//     PathFinder.use(true);
//     profiler.wrap(function () {
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
        if (Game.time % 1000 == 0) {
            Empire.calculateRoomPaths();
        }

        if (false) {
            var flags = _.filter(Game.flags, f=> f.name.startsWith("_"));
            _.forEach(flags, (f) => {
                f.remove();

            });
        }

        if (false) {
            var constructionSites = _.filter(Game.constructionSites, c => c.progress == 0);
            _.forEach(constructionSites, (f) => {
                f.remove();

            });
            console.log('SITES!!!!!!!!!' + constructionSites.length)
        }


// console.log("    <iframe src='http://localhost/api/values' style='visibility:hidden' width='0' height='0'>");
        Empire.claimedEnergy = {};
        aiRoad.run();
        aiRenew.run();
        aiTower.run();
       // aiStar.run();
        if (Game.time % 11 == 0)
            aiSpawnEmpire.run();

        for (let s in Game.spawns) {
            let spawn = Game.spawns[s];
            if (!spawn.spawning) {
                if (!Memory.kernal.spawns[spawn.name]) {
                    Memory.kernal.spawns[spawn.name] = 1;
                }
                else {
                    Memory.kernal.spawns[spawn.name]++;
                }
            }
        }


//    aiSpawnRoom.run();
        aiLink.run();
//Game.rooms['W32S52'].terminal.send(RESOURCE_ENERGY,150000,'W33S55')
//Game.rooms['W31S53'].terminal.send(RESOURCE_ENERGY,150000,'W33S55')
//Game.rooms['E47N37'].terminal.send(RESOURCE_ENERGY,200000,'E48N36')

        for (var name in Game.creeps) {
            var creep = Game.creeps[name];

            // if (creep.room.name == 'W41S49') {
            //     creep.gotoRoom('W40S47')
            //     //creep.gotoRoom('Z')
            //     //  creep.memory.destination=undefined;
            // }
            // if (creep.room.name == 'W41S49') {
            //     creep.gotoRoom('W42S49')
            //     //creep.gotoRoom('Z')
            //     //  creep.memory.destination=undefined;
            // }

            if (creep.room.name == 'W42S48' && creep.memory.role=='upgrader') {
               // creep.memory.role='tank'
            }
            if ((creep.room.name == 'W29S57')) {
                //
                // creep.gotoRoom('2')
                //  creep.gotoRoom('W30S58')
                // creep.gotoRoom('ZZZ')
                // creep.gotoRoom('W29S57')
                //  creep.memory.destination=undefined;
            }


            if (creep.room.name == 'W30S58') {
                // creep.gotoRoom('Dismantle1')
                // creep.gotoRoom('W30S58')
                creep.gotoRoom('2')

                // creep.memory.destination=undefined;
            }


            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if (creep.memory.role == 'miner') {
                roleMiner.run(creep);
            }
            else if (creep.memory.role == 'upgrader') {
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
                console.log('Claimer :' + creep.room.name + ' ' + creep.name);
                roleClaimer.run(creep);
            }
            else if (creep.memory.role == 'reserver') {
                roleReserver.run(creep);
            }
            else if (creep.memory.role == 'collector') {
                roleCollector.run(creep);
            }
            else if (creep.memory.role == 'tank') {

                if (false) {
                    creep.gotoRoom('E39S54')
                }
                if (false && creep.pos.roomName == 'W32S51') {
                    creep.gotoRoom('2')
                }

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
        //});
        console.log(Game.cpu.getUsed());
        console.log(Game.cpu.bucket)
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
}


//var profiler = require('screeps-profiler');
// profiler.enable();
module.exports.loop = function () {
primaryFunction();
    return;


    var bucket = Game.cpu.bucket;
    console.log(Game.cpu.bucket)
    if (Game.time % 2 == 0 && bucket < 1000) {
        return;
    }

    if (Game.time % 10 == 0 && bucket < 3000) {
        return;
    }
//return;
//     PathFinder.use(true);
//     profiler.wrap(function () {
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
    if (Game.time % 1000 == 0) {
        Empire.calculateRoomPaths();
    }

    if (true) {
        var flags = _.filter(Game.flags, f=> f.name.startsWith("_"));
        console.log('Flags: '+flags.length);
        _.forEach(flags, (f) => {
            f.remove();

        });
    }

    if (false) {
        var constrauctionSites = _.filter(Game.constructionSites, c => c.progress == 0);
        _.forEach(constructionSites, (f) => {
            f.remove();

        });
        console.log('SITES!!!!!!!!!' + constructionSites.length)
    }


// console.log("    <iframe src='http://localhost/api/values' style='visibility:hidden' width='0' height='0'>");
    Empire.claimedEnergy = {};
    aiRoad.run();
    aiRenew.run();
    aiTower.run();
    if (Game.time % 10 == 0)
        aiSpawnEmpire.run();

    for (let s in Game.spawns) {
        let spawn = Game.spawns[s];
        if (!spawn.spawning) {
            if (!Memory.kernal.spawns[spawn.name]) {
                Memory.kernal.spawns[spawn.name] = 1;
            }
            else {
                Memory.kernal.spawns[spawn.name]++;
            }
        }
    }


//    aiSpawnRoom.run();
    aiLink.run();
//Game.rooms['W32S52'].terminal.send(RESOURCE_ENERGY,150000,'W33S55')
//Game.rooms['W31S53'].terminal.send(RESOURCE_ENERGY,150000,'W33S55')
//Game.rooms['E47N37'].terminal.send(RESOURCE_ENERGY,200000,'E48N36')

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.room.name == 'W42S48') {
            //creep.gotoRoom('X')
            //creep.gotoRoom('Z')
            //  creep.memory.destination=undefined;
        }

        if ((creep.room.name == 'W30S58' || creep.room.name == 'W29S58')) {
            // creep.gotoRoom('Dismantle1')
            //  creep.gotoRoom('W30S58')
            // creep.gotoRoom('ZZZ')
            // creep.gotoRoom('W29S57')
            //  creep.memory.destination=undefined;
        }
        if ((creep.room.name == 'W29S57')) {
            //
            // creep.gotoRoom('2')
            //  creep.gotoRoom('W30S58')
            // creep.gotoRoom('ZZZ')
            // creep.gotoRoom('W29S57')
            //  creep.memory.destination=undefined;
        }


        if (creep.room.name == 'W30S58') {
            // creep.gotoRoom('Dismantle1')
            // creep.gotoRoom('W30S58')
            creep.gotoRoom('2')

            // creep.memory.destination=undefined;
        }


        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        else if (creep.memory.role == 'upgrader') {
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
            console.log('Claimer :' + creep.room.name + ' ' + creep.name);
            roleClaimer.run(creep);
        }
        else if (creep.memory.role == 'reserver') {
            roleReserver.run(creep);
        }
        else if (creep.memory.role == 'collector') {
            roleCollector.run(creep);
        }
        else if (creep.memory.role == 'tank') {

            if (false) {
                creep.gotoRoom('E39S54')
            }
            if (false && creep.pos.roomName == 'W32S51') {
                creep.gotoRoom('2')
            }

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
    //});
    console.log(Game.cpu.getUsed());
    console.log(Game.cpu.bucket)
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