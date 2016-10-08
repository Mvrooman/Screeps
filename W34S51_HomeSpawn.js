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
        role: 'harvester2',
        count: 3
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
        count: 1,
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
        count: 3
    });
    roomW34S52.roles.push({
        role: 'repairer',
        count: 1
    });
    roomW34S52.roles.push({
        role: 'harvester',
        count: 1
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

    var waypoints = ['W34S53', 'W35S54', 'W35S55', 'E36S55'];
    var waypoints2 = ['W34S53', 'W35S54', 'W35S55', 'E36S55', 'E36S55_2', 'E38S55'];


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


    var roomW35S52 = {roomName: 'W35S52', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW35S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW35S52.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW35S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(32, 22, 'W35S52'), new RoomPosition(43, 32, 'W35S52')]
    });

    roomW35S52.roles.push({
        role: 'hauler2',
        dropRoomName: 'W34S51_5',
        pickupRoomName: 'W35S52',
        count: 3
    });
    roomW35S52.roles.push({
        role: 'builder2',
        count: 1
    });
    roomW35S52.roles.push({
        role: 'repairer',
        count: 1
    });
    var roomW30S55 = {roomName: 'W30S55', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW30S55.roles.push({
        role: 'attackCreep2',
        destination: 'W30S55',
        count: 14
    });
    roomW30S55.roles.push({
        role: 'tank',
        destination: 'W30S55',
        count: 3
    });


    var roomW30S54 = {roomName: 'W30S55', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};
    roomW30S54.roles.push({
        role: 'attackCreep2',
        destination:'W30S55',
        count: 8,
    });
    roomW30S54.roles.push({
        role: 'tank',
        destination:'W30S55',
        count: 8,
    });

    var roomW29S58 = {roomName: 'W29S58', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};

    roomW29S58.roles.push({
        role: 'attackCreep2',
        destination: 'W29S58',
        count: 2,
    });
    roomW29S58.roles.push({
        role: 'tank4',
        destination: 'W29S58',
        count: 6,
    });



    Empire.roomSpawns.push(roomW29S58);

    if (spawnCount > 4) {


        Empire.roomSpawns.push(roomW33S52);
        Empire.roomSpawns.push(roomW35S51);
        Empire.roomSpawns.push(roomW33S51);
        Empire.roomSpawns.push(roomW34S52);
      //  Empire.roomSpawns.push(roomW33S57);

    }

    //  Empire.roomSpawns.push(roomW30S55);
   // Empire.roomSpawns.push(roomW30S54);

    Empire.roomSpawns.push(roomW34S51);

};