var aiSpawnEmpire = {
    run: function () {

        function spawnCreep(roomName, role, creepsInRole, spawn) {
            spawn = Game.spawns[spawn.name];
            var currentSpawn = spawn.spawning;
            if (currentSpawn != undefined) {

                return;
            }
            //  console.log(JSON.stringify(spawn));
            console.log('Starting spawn attempt for ' + role.role)
            //return;
            switch (role.role) {
                case 'extractor':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    console.log('')
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], {
                        role: 'extractor',
                        sourcePosition: missingLocations[0],
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result +
                            '[' + missingLocations[0].roomName + ' ' + missingLocations[0].x + ',' + missingLocations[0].y + ']');
                    }
                    else
                        console.log(result);
                    break;
                case 'builder':
                    var result = spawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'builder',
                        destination: Game.flags[roomName].pos
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'repairer':
                    var result = spawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'repairer',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700 + ']');
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'claimer':
                    var result = spawn.createCreep([CLAIM, CLAIM, MOVE, MOVE], {
                        role: 'claimer',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 800);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'reserver':
                    var result = spawn.createCreep([CLAIM, MOVE], {
                        role: 'reserver',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 800);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'hauler':
                    var result = spawn.createCreep([CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, WORK], {
                        role: 'hauler',
                        pickupRoomName: roomName,
                        dropRoomName: role.dropRoomName,
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 1050);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result +
                            '[' + missingLocations[0].roomName + ' ' + missingLocations[0].x + ',' + missingLocations[0].y + ']');
                    }
                    else if(result < 0)
                        console.log("Spawn error "+result);


                    break;
                case 'upgrader':
                    var result = spawn.createCreep([WORK, WORK, WORK,WORK, WORK,CARRY, CARRY, CARRY, MOVE, MOVE,MOVE], {
                        role: 'upgrader',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 1100);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'harvester':
                    var result = spawn.createCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,  MOVE, CARRY, CARRY, MOVE, MOVE], {
                        role: 'harvester',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'tank':
                    var result = spawn.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE], {
                        role: 'tank',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 210);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'defense':
                    var result = spawn.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE], {
                        role: 'defense',
                        // destination: Game.flags[roomName].pos
                        destination: Game.flags[role.destination].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'attackCreep':
                    var result = spawn.createCreep([ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE], {
                        role: 'attackCreep',
                        destination: Game.flags[roomName].pos
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
            }
        }

        for (var i in Empire.roomSpawns) {
            let roomSpawns = Empire.roomSpawns[i];
            var roleStatus = 'Empire - [' + roomSpawns.roomName + '] - ';
            var spawnTriggered = false;
            for (var j in Empire.roomSpawns[i].roles) {
                var creepsInRole = _.filter(Game.creeps, (creep) =>
                ((creep.memory.destination == undefined && creep.pos.roomName == roomSpawns.roomName && creep.memory.pickupRoomName == undefined) ||
                (creep.memory.destination != undefined && creep.memory.destination.roomName == roomSpawns.roomName & creep.memory.pickupRoomName == undefined) ||
                creep.memory.pickupRoomName != undefined && creep.memory.pickupRoomName == roomSpawns.roomName) &&
                creep.memory.role == roomSpawns.roles[j].role);
                var currentCount = creepsInRole.length;
                var desiredCount = roomSpawns.roles[j].count;
                roleStatus += roomSpawns.roles[j].role.capitalizeFirstLetter() +
                    '[' + currentCount + '/' + desiredCount + ']  ';
                if (!spawnTriggered && currentCount < desiredCount) {
                    spawnCreep(roomSpawns.roomName, roomSpawns.roles[j], creepsInRole, roomSpawns.defaultSpawn);
                    spawnTriggered = true;
                }
            }
            console.log(roleStatus);
        }
    }
};
module.exports = aiSpawnEmpire;