var aiSpawnRoom = {

    run: function () {
        function setRoles() {
            var roomRole1 = {roomName: 'E47N37', roles: []};
            roomRole1.roles.push({
                role: 'extractor',
                count: 2,
                locations: [new RoomPosition(3, 5, 'E47N37'), new RoomPosition(24, 4, 'E47N37')]
            });
            roomRole1.roles.push({
                role: 'harvester',
                count: 1
            });
            roomRole1.roles.push({
                role: 'upgrader',
                count: 6
            });

            roomRole1.roles.push({
                role: 'builder',
                count: 0
            });

            roomRole1.roles.push({
                role: 'repairer',
                count: 2
            });
            // roomRole1.roles.push({
            //     role: 'hauler',
            //     dropRoomName: 'E47N37',
            //     pickupRoomName: 'E47N37',
            //     count: 1
            // });

            var roomRole2 = {roomName: 'E48N37', roles: []};
            roomRole2.roles.push({
                role: 'extractor',
                count: 2,
                locations: [new RoomPosition(10, 38, 'E48N37'), new RoomPosition(3, 8, 'E48N37')]
            });
            roomRole2.roles.push({
                role: 'claimer',
                count: 1
            });
            roomRole2.roles.push({
                role: 'builder',
                count: 0
            });


            roomRole2.roles.push({
                role: 'hauler',
                dropRoomName: 'E47N37',
                pickupRoomName: 'E48N37',
                count: 6
            });
            roomRole2.roles.push({
                role: 'repairer',
                count: 1
            });
            roomRole2.roles.push({
                role: 'harvester',
                count: 0
            });
            roomRole2.roles.push({
                role: 'defense',
                destination: 'E48N37_D',
                count: 1
            });
            // roomRole2.roles.push({
            //     role:'attackCreep',
            //     count:2
            // });

            var roomRole3 = {roomName: 'E47N38', roles: []};
            // roomRole3.roles.push({
            //     role:'tank',
            //     count:0
            // });

            var roomRole4 = {roomName: 'E46N37', roles: []};
            roomRole4.roles.push({
                role: 'extractor',
                count: 2,
                locations: [new RoomPosition(11, 27, 'E46N37'), new RoomPosition(24, 28, 'E46N37')]
            });
            roomRole4.roles.push({
                role: 'claimer',
                count: 1
            });
            roomRole4.roles.push({
                role: 'builder',
                count: 0
            });


            roomRole4.roles.push({
                role: 'hauler',
                dropRoomName: 'E47N37',
                pickupRoomName: 'E46N37',
                count: 6
            });
            roomRole4.roles.push({
                role: 'repairer',
                count: 1
            });
            roomRole4.roles.push({
                role: 'harvester',
                count: 0
            });
            roomRole4.roles.push({
                role: 'defense',
                destination: 'E46N37_D',
                count: 1
            });
            // roomRole4.roles.push({
            //     role:'attackCreep',
            //     count:0
            // });

            var roomRole5 = {roomName: 'E47N36', roles: []};
            roomRole5.roles.push({
                role: 'repairer',
                count: 1
            });

            var roomRoles = [roomRole1, roomRole2, roomRole4, roomRole5];
            return roomRoles;
        }

        function spawnCreep(roomName, role, creepsInRole) {
            console.log('Starting spawn attempt for '+role.role)
            //return;
            switch (role.role) {
                case 'extractor':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], {
                        role: 'extractor',
                        sourcePosition: missingLocations[0],
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 600);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result +
                            '[' + missingLocations[0].roomName + ' ' + missingLocations[0].x + ',' + missingLocations[0].y + ']');
                    }
                    break;
                case 'builder':
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'builder',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'repairer':
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'repairer',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 700+']');
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'claimer':
                    var result = Game.spawns.HomeSpawn.createCreep([CLAIM,CLAIM, MOVE, MOVE], {
                        role: 'claimer',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 800);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'hauler':
                    var result = Game.spawns.HomeSpawn.createCreep([CARRY, CARRY, MOVE, CARRY, CARRY, MOVE,CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, WORK], {
                        role: 'hauler',
                        pickupRoomName: roomName,
                        dropRoomName: role.dropRoomName,
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 1050);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result +
                            '[' + missingLocations[0].roomName + ' ' + missingLocations[0].x + ',' + missingLocations[0].y + ']');
                    }
                    else
                    {
                        console.log('Error: '+result);
                    }
                    break;
                case 'upgrader':
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK,WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'upgrader',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 900);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'harvester':
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE,CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'harvester',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'tank':
                    var result = Game.spawns.HomeSpawn.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE], {
                        role: 'tank',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 210);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'defense':
                    var result = Game.spawns.HomeSpawn.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE], {
                        role: 'defense',
                        // destination: Game.flags[roomName].pos
                        destination: Game.flags[role.destination].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'attackCreep':
                    var result = Game.spawns.HomeSpawn.createCreep([ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE], {
                        role: 'attackCreep',
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
            }
        }


        var roomRoles = setRoles();

        for (var i in roomRoles) {
            var roleStatus = '[' + roomRoles[i].roomName + '] - ';
            var spawnTriggered = false;
            for (var j in roomRoles[i].roles) {
                var creepsInRole = _.filter(Game.creeps, (creep) =>
                ((creep.memory.destination == undefined && creep.pos.roomName == roomRoles[i].roomName) ||
                (creep.memory.destination != undefined && creep.memory.destination.roomName == roomRoles[i].roomName) ||
                creep.memory.pickupRoomName != undefined && creep.memory.pickupRoomName == roomRoles[i].roomName) &&
                creep.memory.role == roomRoles[i].roles[j].role);
                var currentCount = creepsInRole.length;
                var desiredCount = roomRoles[i].roles[j].count;
                roleStatus += roomRoles[i].roles[j].role.capitalizeFirstLetter() +
                    '[' + currentCount + '/' + desiredCount + ']  ';
                if (!spawnTriggered && currentCount < desiredCount) {
                    spawnCreep(roomRoles[i].roomName, roomRoles[i].roles[j], creepsInRole);
                    spawnTriggered = true;
                }
            }
            console.log(roleStatus);
        }
    }
}
module.exports = aiSpawnRoom;
