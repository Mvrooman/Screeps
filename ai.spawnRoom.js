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
                count: 3
            });
            roomRole1.roles.push({
                role: 'upgrader',
                count: 4
            });

            roomRole1.roles.push({
                role: 'builder',
                count: 0
            });

            roomRole1.roles.push({
                role: 'repairer',
                count: 2
            });

            var roomRole2 = {roomName: 'E48N37', roles: []};
            roomRole2.roles.push({
                role: 'extractor',
                count: 2,
                locations: [new RoomPosition(10, 38, 'E48N37'), new RoomPosition(3, 8, 'E48N37')]
            });
            roomRole2.roles.push({
                role: 'claimer',
                count:2
            });
            roomRole2.roles.push({
                role: 'builder',
                count: 2
            });


            roomRole2.roles.push({
                role: 'hauler',
                dropRoomName: 'E47N37',
                pickupRoomName: 'E48N37',
                count: 4
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
                count: 1
            });

            var roomRole3 = {roomName: 'E47N38', roles: []};
            roomRole3.roles.push({
                role:'tank',
                count:0
            });

            var roomRole4 = {roomName: 'E46N37', roles: []};
            roomRole4.roles.push({
                role:'defense',
                count:0
            });
            roomRole4.roles.push({
                role:'attackCreep',
                count:0
            });
            var roomRoles = [roomRole1, roomRole2,roomRole4,roomRole3];
            return roomRoles;
        }
        function spawnCreep(roomName, role, creepsInRole) {
            switch (role.role) {
                case 'extractor':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], {
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
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'claimer':
                    var result = Game.spawns.HomeSpawn.createCreep([CLAIM, MOVE, MOVE], {
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
                    var result = Game.spawns.HomeSpawn.createCreep([CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE,MOVE, WORK], {
                        role: 'hauler',
                        pickupRoomName: roomName,
                        dropRoomName: role.dropRoomName,
                        destination: Game.flags[roomName].pos
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + Game.spawns.HomeSpawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result +
                            '[' + missingLocations[0].roomName + ' ' + missingLocations[0].x + ',' + missingLocations[0].y + ']');
                    }
                    break;
                case 'upgrader':
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
                        role: 'upgrader',
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
                case 'harvester':
                    var result = Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
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
                    var result = Game.spawns.HomeSpawn.createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE], {
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
                    var result = Game.spawns.HomeSpawn.createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,MOVE,MOVE,MOVE],{
                        role:'defense',
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
                case 'attackCreep':
                    var result = Game.spawns.HomeSpawn.createCreep([ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE],{
                        role:'attackCreep',
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
                (creep.memory.destination != undefined && creep.memory.destination.roomName == roomRoles[i].roomName)||
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
            // var harvesters = _.filter(Game.creeps, (creep) =>
            // creep.pos.roomName == roomRoles[i].roomName &&
            // creep.memory.role == 'harvester');
            // console.log('Harvesters: ' + harvesters.length);
        }


        // var targetExtractors = 3;
        // var targetHarvesters = 3;
        // var targetUpgraders = 6;
        // var targetRepairers = 2;
        // var targetBuilders = 4;
        //
        // var extractors = _.filter(Game.creeps, (creep) => creep.memory.role == 'extractor');
        // var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        // var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        // var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        // var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        //
        // console.log(
        //     'Harvesters [' + harvesters.length + '/' + targetHarvesters + ']   ' +
        //     'Upgraders[' + upgraders.length + '/' + targetUpgraders + ']   ' +
        //     'Builders[' + builders.length + '/' + targetBuilders + ']   ' +
        //     'Repairers[' + repairers.length + '/' + targetRepairers + ']  ' +
        //     'Extractors[' + extractors.length + '/' + targetExtractors + ']');
        //
        //
        // // Game.creeps['Molly'].memory.sourcePosition = new RoomPosition(25,4,'E47N37');
        // // Game.creeps['Lincoln'].memory.sourcePosition = new RoomPosition(3,5,'E47N37');
        // // Game.creeps['Leah'].memory.sourcePosition = new RoomPosition(10,38,'E48N37');
        //
        // if (extractors.length < targetExtractors && false) {
        //     Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], {
        //         role: 'extractor',
        //         sourcePosition: new RoomPosition(10, 38, 'E48N37'),
        //         destination: Game.flags['E48N37'].pos
        //     });
        //     return;
        // }
        // if (harvesters.length < targetHarvesters) {
        //
        //     Game.spawns.HomeSpawn.createCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], {role: 'harvester'});
        //     //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'harvester');
        //     return;
        // }
        // if (upgraders.length < targetUpgraders) {
        //     //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'upgrader');
        //     Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'upgrader'});
        //     return;
        // }
        // if (builders.length < targetBuilders) {
        //     Game.spawns.HomeSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
        //         role: 'builder',
        //         destination: Game.flags['E48N37'].pos
        //     });
        //     //Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'builder'});
        //     //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'builder');
        //     return;
        // }
        // if (repairers.length < targetRepairers) {
        //     Game.spawns.HomeSpawn.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {role: 'repairer'});
        //     //Game.spawns.HomeSpawn.createCreepWithRole(Game.spawns.HomeSpawn.room.energyCapacityAvailable, 'repairer');
        //     return;
        // }

    }
}
module.exports = aiSpawnRoom;
