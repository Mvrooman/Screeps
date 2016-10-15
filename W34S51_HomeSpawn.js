module.exports = function () {
    let spawnCount = Game.rooms['W34S51'].find(FIND_MY_CREEPS).length;
    if (spawnCount == 0) {
        var roomW34S51 = {roomName: 'W34S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
        roomW34S51.roles.push({
            role: 'harvester4',
            count: 1,

        });
        Empire.roomSpawns.push(roomW34S51);
        return;
    }
    if (spawnCount == 1) {
        var roomW34S51 = {roomName: 'W34S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
        roomW34S51.roles.push({
            role: 'harvester4',
            count: 2,
        });
        Empire.roomSpawns.push(roomW34S51);
        return;
    }
    var roomW34S51 = {roomName: 'W34S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW34S51.roles.push({
        role: 'extractor3',
        count: 2,
        locations: [new RoomPosition(17, 44, 'W34S51'), new RoomPosition(19, 34, 'W34S51')]
    });
    roomW34S51.roles.push({
        role: 'harvester',
        count: 2
    });
    roomW34S51.roles.push({
        role: 'builder',
        count: 1
    });
    roomW34S51.roles.push({
        role: 'repairer3',
        count: 1
    });
    roomW34S51.roles.push({
        role: 'miner',
        count: 1
    });
    roomW34S51.roles.push({
        role: 'attackCreep2',
        count: 0,
    });

    var roomW34S52 = {roomName: 'W34S52', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW34S52.roles.push({
        role: 'attackCreep3',
        count: 2,
    });
    roomW34S52.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW34S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 15, 'W34S52'), new RoomPosition(11, 35, 'W34S52')]
    });

    roomW34S52.roles.push({
        role: 'hauler2',
        dropRoomName: 'W34S51_2',
        pickupRoomName: 'W34S52',
        count: 2
    });
    roomW34S52.roles.push({
        role: 'repairer',
        count: 1
    });
    roomW34S52.roles.push({
        role: 'harvester',
        count: 0
    });


    var roomW33S51 = {roomName: 'W33S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW33S51.roles.push({
        role: 'attackCreep3',
        count: 2,
    });
    roomW33S51.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(29, 19, 'W33S51')]
    });
    roomW33S51.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW33S51.roles.push({
        role: 'hauler2',
        dropRoomName: 'W34S51_3',
        pickupRoomName: 'W33S51',
        count: 1
    });

    roomW33S51.roles.push({
        role: 'builder',
        count: 1
    });

    roomW33S51.roles.push({
        role: 'repairer',
        count: 1
    });




    var roomW33S52 = {roomName: 'W33S52', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW33S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW33S52.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW33S52.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(5, 11, 'W33S52')]
    });

    roomW33S52.roles.push({
        role: 'hauler2',
        dropRoomName: 'W34S51_3',
        pickupRoomName: 'W33S52',
        count: 1
    });
    roomW33S52.roles.push({
        role: 'repairer',
        count: 1
    });

    var roomW35S51 = {roomName: 'W35S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};


    roomW35S51.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(16, 13, 'W35S51')],
    });
    roomW35S51.roles.push({
        role: 'hauler2',
        dropRoomName: 'W34S51_4',
        pickupRoomName: 'W35S51',
        count: 1
    });
    roomW35S51.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW35S51.roles.push({
        role: 'builder',
        count: 1
    });
    roomW35S51.roles.push({
        role: 'repairer',
        count: 1
    });


    // var roomW35S52 = {roomName: 'W35S52', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    // roomW35S52.roles.push({
    //     role: 'attackCreep3',
    //     count: 1,
    // });
    // roomW35S52.roles.push({
    //     role: 'reserver',
    //     count: 1
    // });
    // roomW35S52.roles.push({
    //     role: 'extractor',
    //     count: 2,
    //     locations: [new RoomPosition(32, 22, 'W35S52'), new RoomPosition(43, 32, 'W35S52')]
    // });
    //
    // roomW35S52.roles.push({
    //     role: 'hauler2',
    //     dropRoomName: 'W34S51_5',
    //     pickupRoomName: 'W35S52',
    //     count: 3
    // });
    // roomW35S52.roles.push({
    //     role: 'builder2',
    //     count: 1
    // });
    // roomW35S52.roles.push({
    //     role: 'repairer',
    //     count: 1
    // });


    var waypoints8 = ['W36S50', 'W39S50', 'W40S47','W42S46'];
    var roomW43S48 = {roomName: 'W43S48', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW43S48.roles.push({
        role: 'builder',
        waypoint:waypoints8,
        count: 3
    });

    var roomW42S48 = {roomName: 'W42S48', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW42S48.roles.push({
        role: 'builder',
        waypoint:waypoints8,
        count: 3
    });
    if (spawnCount > 4) {
      //  Empire.roomSpawns.push(roomW30S55);


        Empire.roomSpawns.push(roomW33S52);
        Empire.roomSpawns.push(roomW35S51);
        Empire.roomSpawns.push(roomW33S51);
        Empire.roomSpawns.push(roomW34S52);

        //  Empire.roomSpawns.push(roomW33S57);


     //   Empire.roomSpawns.push(roomW43S48);
      //  Empire.roomSpawns.push(roomW42S48);


    }

    //  Empire.roomSpawns.push(roomW30S55);
   // Empire.roomSpawns.push(roomW30S54);

    Empire.roomSpawns.push(roomW34S51);

};