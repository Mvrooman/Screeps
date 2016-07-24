var aiSpawnEmpire = {
    run: function () {

        function spawnCreep(roomName, role, creepsInRole, spawn) {
            if (role.waypoint != undefined) {
                var waypoint = Game.flags[role.waypoint].pos;
            }
            spawn = Game.spawns[spawn.name];
            var currentSpawn = spawn.spawning;
            if (currentSpawn != undefined) {

                return;
            }
            //  console.log(JSON.stringify(spawn));
            console.log('Starting spawn attempt for ' + role.role)
            //return;
            switch (role.role) {
                case 'tank':
                    var result = spawn.createCreep(
                        [
                            //WORK,WORK,MOVE,MOVE
                            TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE,
                            MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                            HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,
                            WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, WORK, MOVE
                        ], {
                            role: 'tank',
                            destination: Game.flags[role.destination].pos
                        });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 2280);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'attackCreep':
                    var result = spawn.createCreep([
                        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        //  ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                        MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK], {
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
                case 'extractor':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], {
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
                    break;
                case 'builder':
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE], {
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
                case 'upgrader':
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
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
                    var result = spawn.createCreep([CLAIM, MOVE, MOVE], {
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
                    var result = spawn.createCreep([CLAIM, MOVE, CLAIM, MOVE], {
                        role: 'reserver',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 800);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'reserver2':
                    var result = spawn.createCreep([CLAIM, CLAIM, CLAIM, CLAIM, MOVE, CLAIM, MOVE, MOVE], {
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
                    var result = spawn.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], {
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
                    else if (result < 0)
                        console.log("Spawn error " + result);


                    break;

                case 'harvester':
                    var result = spawn.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
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

            }
        }

        function isSameRole(role, role2) {
            if (role == 'builder' || role == 'upgrader')
                role = 'worker';
            if (role2 == 'builder' || role2 == 'upgrader')
                role2 = 'worker';
            return role == role2;
        }

        for (var i in Empire.roomSpawns) {
            let roomSpawns = Empire.roomSpawns[i];
            var roleStatus = 'Empire - [' + roomSpawns.roomName + '] - ';
            var spawnTriggered = false;
            for (var j in Empire.roomSpawns[i].roles) {
                var creepsInRole = _.filter(Game.creeps, (creep) =>
                ((creep.memory.destination == undefined && creep.pos.roomName == roomSpawns.roomName && creep.memory.pickupRoomName == undefined) ||
                (creep.memory.destination != undefined && creep.memory.destination.roomName == roomSpawns.roomName & creep.memory.pickupRoomName == undefined) ||
                creep.memory.pickupRoomName != undefined && creep.memory.pickupRoomName == roomSpawns.roomName) && isSameRole(creep.memory.role, roomSpawns.roles[j].role));
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