var aiSpawnEmpire = {
    run: function () {

        function spawnCreep(roomName, role, creepsInRole, spawn, renew) {
            if(!Game.flags[roomName])
            {
                console.log('BAD ROOM NAME!!!!!!!!!!!!!!!!! '+roomName);
                Memory.badroom = roomName;
                return;
            }
            var needspawn = true;

            if (role.waypoint != undefined) {
                var waypoint = _.map(role.waypoint, (w) => Game.flags[w].pos);
            }
            spawn = Game.spawns[spawn.name];
            var currentSpawn = spawn.spawning;
            if (currentSpawn != undefined) {

                return;
            }
            //  console.log(JSON.stringify(spawn));
            console.log('Starting spawn attempt for ' + role.role)
            //return;
            let start = Game.cpu.getUsed();
            switch (role.role) {
                case 'builder':
                    var result = spawn.createCreep([
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE,
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], {
                        role: 'builder',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                    var result = spawn.createCreep(
                        [
                            //WORK,WORK,MOVE,MOVE
                            TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE,
                            MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                            HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,
                            // HEAL, HEAL, HEAL, HEAL, HEAL,
                            WORK, WORK, WORK, WORK, WORK, WORK,
                            ATTACK, MOVE, MOVE, MOVE, WORK, MOVE
                        ], {
                            role: 'tank',
                            destination: Game.flags[role.destination].pos,
                            waypoint: waypoint
                        });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 2280);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'tank2':
                    var result = spawn.createCreep(
                        [
                            //WORK,WORK,MOVE,MOVE

                            MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                            HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,

                        ], {
                            role: 'tank',
                            destination: Game.flags[role.destination].pos,
                            waypoint: waypoint
                        });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 2280);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'tank3':
                    var result = spawn.createCreep(
                        [
                            //WORK,WORK,MOVE,MOVE

                            TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE

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
                case 'tank4':
                    var body = [];
                    for (let i = 0; i < 25; i++) {
                        body.push(MOVE);
                    }
                    for (let i = 0; i < 25; i++) {
                        body.push(WORK);
                    }
                    var result = spawn.createCreep(body, {
                        role: 'tank',
                        destination: Game.flags[role.destination].pos,
                        waypoint: waypoint
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 2280);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'tank5':
                    var body = [];
                    for (let i = 0; i < 1; i++) {
                        body.push(MOVE);
                    }
                    for (let i = 0; i < 1; i++) {
                        body.push(HEAL);
                    }
                    var result = spawn.createCreep(body, {
                        role: 'tank',
                        destination: Game.flags[role.destination].pos,
                        waypoint: waypoint
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
                        TOUGH, TOUGH, TOUGH, TOUGH, MOVE,
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
                case 'attackCreep2':
                    var result = spawn.createCreep([
                        TOUGH, TOUGH, TOUGH,

                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                        ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                        RANGED_ATTACK, MOVE,
                        HEAL, HEAL, HEAL, HEAL, HEAL
                    ], {
                        role: 'attackCreep',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'attackCreep3':
                    var result = spawn.createCreep([
                        TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, RANGED_ATTACK

                    ], {
                        role: 'attackCreep',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'attackCreep4':
                    var result = spawn.createCreep([
                        TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK], {
                        role: 'attackCreep',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 290);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'attackCreep5':
                    var result = spawn.createCreep([
                        TOUGH, TOUGH, TOUGH,
                        MOVE, MOVE, ATTACK, ATTACK, ATTACK], {
                        role: 'attackCreep',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], {
                        role: 'extractor',
                        sourcePosition: missingLocations[0],
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                case 'extractor2':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], {
                        role: 'extractor',
                        sourcePosition: missingLocations[0],
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                case 'extractor3':
                    if (!Game.flags[roomName]) {
                        console.log('!!!!!Room!!!!' + roomName);
                    }
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], {
                        role: 'extractor',
                        sourcePosition: missingLocations[0],
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                case 'extractor4':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = spawn.createCreep([WORK, WORK, MOVE, MOVE], {
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
                case 'extractor5':
                    var currentLocations = _.pluck(creepsInRole, 'memory.sourcePosition');
                    var missingLocations = _.filter(role.locations, function (loc) {
                        return !_.findWhere(currentLocations, loc);
                    });
                    var result = spawn.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE,], {
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

                case 'builder2':
                    var result = spawn.createCreep([
                        CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK], {
                        role: 'builder',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint,
                        renew: renew
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'builder3':
                    var result = spawn.createCreep([
                        MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, MOVE, WORK, WORK,], {
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
                case 'builder4':
                    var result = spawn.createCreep([
                        MOVE, CARRY, MOVE, CARRY, WORK, WORK, WORK, MOVE], {
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
                case 'builder5':
                    var result = spawn.createCreep([
                        MOVE, CARRY, WORK, WORK], {
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
                case 'mover':
                    var result = spawn.createCreep([MOVE], {
                        role: 'tank',
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });
                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700);
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    console.log('Mover result: ' + result);
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
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });

                    if (result == ERR_NOT_ENOUGH_ENERGY) {
                        console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                            ' - [' + spawn.room.energyAvailable + '/' + 700 + ']');
                    }
                    else if (!result < 0) {
                        console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                    }
                    break;
                case 'repairer2':
                    var result = spawn.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE], {
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
                case 'repairer3':
                    var result = spawn.createCreep([
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE,
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], {
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
                    console.log('Spawn Claimer: ' + roomName)
                    var result = spawn.createCreep([MOVE,MOVE,MOVE,MOVE, CLAIM], {
                        role: 'claimer',
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
                case 'reserver':
                    if ((Game.rooms[roomName] && Game.rooms[roomName].controller.reservation &&
                        Game.rooms[roomName].controller.reservation.ticksToEnd > 2500)||spawn.room.energyCapacityAvailable<1400) {
                        var body = [CLAIM, MOVE, MOVE];
                    }
                    else {
                        var body = [CLAIM, MOVE, CLAIM, MOVE];
                    }
                    var result = spawn.createCreep(body, {
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
                case 'reserver3':

                    var body = [CLAIM, MOVE, MOVE];

                    var result = spawn.createCreep(body, {
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
                case 'hauler':
                    var result = spawn.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY,
                        CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, WORK], {
                        role: 'hauler',
                        pickupRoomName: role.pickupRoomName,
                        dropRoomName: role.dropRoomName,
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                case 'hauler2':
                    var result = spawn.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE,
                        CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY,
                        CARRY, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY,
                        CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY,
                        MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, WORK], {
                        role: 'hauler',
                        pickupRoomName: role.pickupRoomName,
                        dropRoomName: role.dropRoomName,
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
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
                case 'hauler3':
                    let hstart = Game.cpu.getUsed();
                    var result = spawn.createCreep([CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
                        MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, WORK, CARRY, CARRY, MOVE, MOVE], {
                        role: 'hauler',
                        pickupRoomName: role.pickupRoomName,
                        dropRoomName: role.dropRoomName,
                        destination: Game.flags[roomName].pos,
                        waypoint: waypoint
                    });
                    let hend = Game.cpu.getUsed();
                    console.log("#########Hauler3: "+(hend-hstart));


                    break;
                case 'hauler4':
                    var result = spawn.createCreep([CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, WORK], {
                        role: 'hauler',
                        pickupRoomName: role.pickupRoomName,
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
                case 'miner':
                    if (Game.flags[roomName].room.find(FIND_MINERALS)[0].mineralAmount > 0) {
                        var result = spawn.createCreep([MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
                            CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, WORK, WORK, WORK, MOVE, MOVE, WORK, WORK, WORK, MOVE, MOVE, WORK, WORK, WORK,], {
                            role: 'miner',
                            destination: Game.flags[roomName].pos
                        });

                        if (result == ERR_NOT_ENOUGH_ENERGY) {
                            console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                                ' - [' + spawn.room.energyAvailable + '/' + 700);
                        }
                        else if (!result < 0) {
                            console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                        }
                    }
                    else {
                        needspawn = false;
                    }
                    break;
                case 'miner2':
                    if (Game.flags[roomName].room.find(FIND_MINERALS)[0].mineralAmount > 0) {
                        var result = spawn.createCreep([MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY,
                            CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, WORK, WORK, WORK, MOVE, MOVE, WORK, WORK, WORK,], {
                            role: 'miner',
                            destination: Game.flags[roomName].pos
                        });

                        if (result == ERR_NOT_ENOUGH_ENERGY) {
                            console.log('Waiting to spawn ' + role.role.capitalizeFirstLetter() + ' in ' + roomName +
                                ' - [' + spawn.room.energyAvailable + '/' + 700);
                        }
                        else if (!result < 0) {
                            console.log('Spawning new ' + role.role + ': ' + result + '[' + roomName + ']');
                        }
                    }
                    break;
                case 'harvester':
                    var result = spawn.createCreep([MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
                        CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], {
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
                case 'harvester2':
                    var result = spawn.createCreep([CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, MOVE, WORK], {
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
                case 'harvester3':
                    var result = spawn.createCreep([CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], {
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
                case 'harvester4':

                    var result = spawn.createCreep([CARRY, MOVE, CARRY, MOVE, WORK], {
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
            let end = Game.cpu.getUsed();
            let total=end-start;
            console.log("Switch :"+roomName +" "+role.role+": " +total+" "+result);
            return needspawn;
        }

        function isSameRole(role, role2) {
            if (role.startsWith('builder') || role.startsWith('upgrader'))
                role = 'worker';
            if (role2.startsWith('builder') || role2.startsWith('upgrader'))
                role2 = 'worker';
            //return role == role2;
            return (role.startsWith(role2) || role2.startsWith(role));
        }

        for (var i in Empire.roomSpawns) {
            let roomSpawns = Empire.roomSpawns[i];
            var roleStatusPrefix = 'Empire - [' + roomSpawns.roomName + '] - ';

            var roleStatus = '';
            var spawnTriggered = false;
            for (var j in Empire.roomSpawns[i].roles) {
                var creepsInRole = _.filter(Game.creeps, (creep) =>
                ((creep.memory.destination == undefined && creep.pos.roomName == roomSpawns.roomName && creep.memory.pickupRoomName == undefined) ||
                (creep.memory.destination != undefined && creep.memory.destination.roomName == roomSpawns.roomName && creep.memory.pickupRoomName == undefined) ||
                creep.memory.pickupRoomName != undefined && creep.memory.pickupRoomName == roomSpawns.roomName) &&
                isSameRole(creep.memory.role, roomSpawns.roles[j].role) &&
                (creep.memory.travelTime == undefined || creep.ticksToLive - 48 >= creep.memory.travelTime));
                var currentCount = creepsInRole.length;
                var desiredCount = roomSpawns.roles[j].count;
                if (currentCount != desiredCount) {
                    roleStatus += roomSpawns.roles[j].role.capitalizeFirstLetter() +
                        '[' + currentCount + '/' + desiredCount + ']  ';
                }
                if (!spawnTriggered && currentCount < desiredCount) {
                    if (!roomSpawns.defaultSpawn) {
                        console.log('ERROR!!!!!!!!');
                        console.log(roomSpawns.roomName)
                    }
                    let spawn = Empire.spawnForRoom(roomSpawns.defaultSpawn);
                    if (!spawn) {
                        console.log('Spawn not avaiable for ' + roomSpawns.defaultSpawn);
                        spawnTriggered = true;
                    }
                    if (spawn && !spawn.room) {
                        console.log('Spawn not found for room!!!!!!!!!!!!!!!!!!!!!!!!!!!! ' + roomSpawns.defaultSpawn)
                    }
                    if (spawn) {
                        if(spawnCreep(roomSpawns.roomName, roomSpawns.roles[j], creepsInRole, spawn, roomSpawns.renew)) {
                            spawnTriggered = true;
                        }
                    }
                }
            }
            if (roleStatus.length > 0) {
                console.log(roleStatusPrefix + roleStatus);
            }
        }
    }
};
module.exports = aiSpawnEmpire;