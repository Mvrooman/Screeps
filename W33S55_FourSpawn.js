module.exports = function () {
    // let spawnCount = Game.rooms['W33S55'].find(FIND_MY_CREEPS).length;
    // if (spawnCount == 1) {
    //     var roomW33S55_2 = {roomName: 'W33S55', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};
    //     roomW33S55_2.roles.push({
    //         role: 'harvester4',
    //         count: 1,
    //
    //     });
    //     Empire.roomSpawns.push(roomW33S55_2);
    //     return;
    // }
    // if (spawnCount == 2) {
    //     var roomW33S55_2 = {roomName: 'W33S55', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};
    //     roomW33S55_2.roles.push({
    //         role: 'harvester3',
    //         count: 1,
    //
    //     });
    //     Empire.roomSpawns.push(roomW33S55_2);
    //     return;
    // }


    var roomW33S55_2 = {roomName: 'W33S55', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};

    roomW33S55_2.roles.push({
        role: 'attackCreep2',
        count: 1,

    });
    roomW33S55_2.roles.push({
        role: 'harvester',
        count: 2,
    });

    roomW33S55_2.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(24, 20, 'W33S55')],
    });
    roomW33S55_2.roles.push({
        role: 'repairer3',
        count: 1,
    });
    roomW33S55_2.roles.push({
        role: 'builder',
        count: 1,
    });

    roomW33S55_2.roles.push({
        role: 'miner',
        count: 1
    });


    var roomW34S55 = {roomName: 'W34S55', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};
    roomW34S55.roles.push({
        role: 'attackCreep2',
        count: 1,

    });
    roomW34S55.roles.push({
        role: 'builder',
        count: 1,

    });
    roomW34S55.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW34S55.roles.push({
        role: 'tank2',
        destination: 'W34S55',
        count: 1
    });
    roomW34S55.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(16, 16, 'W34S55'), new RoomPosition(2, 35, 'W34S55'), new RoomPosition(42, 42, 'W34S55')]
    });

    roomW34S55.roles.push({
        role: 'hauler2',
        dropRoomName: 'W33S55_D',
        pickupRoomName: 'W34S55',
        count: 4,
    });

    var roomW34S55_3 = {roomName: 'W34S55', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW34S55_3.roles.push({
        role: 'attackCreep2',
        count: 2,

    });
    roomW34S55_3.roles.push({
        role: 'builder',
        count: 1,

    });
    roomW34S55_3.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW34S55_3.roles.push({
        role: 'tank2',
        destination: 'W34S55',
        count: 1
    });
    roomW34S55_3.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(16, 16, 'W34S55'), new RoomPosition(2, 35, 'W34S55'), new RoomPosition(42, 42, 'W34S55')]
    });
    roomW34S55_3.roles.push({
        role: 'hauler2',
        dropRoomName: 'W33S55_D',
        pickupRoomName: 'W34S55',
        count: 4,
    });


    var roomW34S54 = {roomName: 'W34S54', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW34S54.roles.push({
        role: 'attackCreep2',
        count: 2,

    });
    roomW34S54.roles.push({
        role: 'builder',
        count: 1,

    });
    roomW34S54.roles.push({
        role: 'tank2',
        destination: 'W34S54',
        count: 1
    });
    roomW34S54.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(35, 14, 'W34S54'), new RoomPosition(34, 40, 'W34S54'), new RoomPosition(8, 42, 'W34S54')]
    });
    roomW34S54.roles.push({
        role: 'hauler2',
        dropRoomName: 'W35S53',
        pickupRoomName: 'W34S54',
        count: 4,
    });

    var roomW34S54_2 = {roomName: 'W34S54', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};
    roomW34S54_2.roles.push({
        role: 'attackCreep2',
        count: 2,

    });
    roomW34S54_2.roles.push({
        role: 'builder',
        count: 1,

    });
    roomW34S54_2.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW34S54_2.roles.push({
        role: 'tank2',
        destination: 'W34S54',
        count: 1
    });
    roomW34S54_2.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(35, 14, 'W34S54'), new RoomPosition(34, 40, 'W34S54'), new RoomPosition(8, 42, 'W34S54')]
    });
    roomW34S54_2.roles.push({
        role: 'hauler2',
        dropRoomName: 'W35S53',
        pickupRoomName: 'W34S54',
        count: 5,
    });

    // var roomW34S54_3 = {roomName: 'W34S54', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    // roomW34S54_3.roles.push({
    //     role: 'attackCreep2',
    //     count: 2,
    // });
    // roomW34S54_3.roles.push({
    //     role: 'builder',
    //     count: 1,
    // });
    // roomW34S54_3.roles.push({
    //     role: 'repairer',
    //     count: 1,
    // });
    // roomW34S54_3.roles.push({
    //     role: 'tank2',
    //     destination: 'W34S54',
    //     count: 1
    // });
    // roomW34S54_3.roles.push({
    //     role: 'extractor2',
    //     count: 3,
    //     locations: [new RoomPosition(35, 14, 'W34S54'), new RoomPosition(34, 40, 'W34S54'), new RoomPosition(8, 42, 'W34S54')]
    // });
    // roomW34S54_3.roles.push({
    //     role: 'hauler2',
    //     dropRoomName: 'W33S55_D',
    //     pickupRoomName: 'W34S54',
    //     count: 5,
    // });

    var roomW32S56 = {roomName: 'W32S56', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};

    roomW32S56.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW32S56.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW32S56.roles.push({
        role: 'builder',
        count: 0
    });
    roomW32S56.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(35, 13, 'W32S56')]
    });

    roomW32S56.roles.push({
        role: 'hauler3',
        dropRoomName: 'W33S55_2',
        pickupRoomName: 'W32S56',
        count: 2
    });

    var roomW33S56 = {roomName: 'W33S56', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};

    roomW33S56.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW33S56.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW33S56.roles.push({
        role: 'builder',
        count: 0
    });
    roomW33S56.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(21, 11, 'W33S56')]
    });

    roomW33S56.roles.push({
        role: 'hauler3',
        dropRoomName: 'W33S55_2',
        pickupRoomName: 'W33S56',
        count: 2
    });


    var roomW35S55 = {roomName: 'W35S55', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};

    roomW35S55.roles.push({
        role: 'attackCreep2',
        count: 1,

    });

    roomW35S55.roles.push({
        role: 'builder',
        count: 1,

    });
    roomW35S55.roles.push({
        role: 'repairer',
        count: 1,
    });

    roomW35S55.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(40, 4, 'W35S55'), new RoomPosition(10, 37, 'W35S55'), new RoomPosition(33, 42, 'W35S55')]
    });
    roomW35S55.roles.push({
        role: 'hauler2',
        dropRoomName: 'W33S55_D',
        pickupRoomName: 'W35S55',
        count: 10,
    });


    var roomW33S58 = {roomName: 'W33S58', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};
    roomW33S58.roles.push({
        role: 'attackCreep2', destination: 'W33S58',
        count: 1,

    });


    var roomW30S58 = {roomName: 'W29S58', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};

    roomW30S58.roles.push({
        role: 'tank4',
        destination: 'W29S58',
        count: 0,
    });
    roomW30S58.roles.push({
        role: 'attackCreep2',
        destination: 'W29S58',
        count: 3,
    });

    //  Empire.roomSpawns.push(roomW30S58);


    var roomW31S56 = {roomName: 'W31S56', roles: [], defaultSpawn: Game.spawns['FourSpawn2']};

    roomW31S56.roles.push({
        role: 'attackCreep2',
        destination: 'W31S56',
        count: 1,
    });


    //Empire.roomSpawns.push(roomW34S54_2);
    // Empire.roomSpawns.push(roomW34S54);
    Empire.roomSpawns.push(roomW35S55);
    Empire.roomSpawns.push(roomW34S55);
    //  Empire.roomSpawns.push(roomW31S56);


    Empire.roomSpawns.push(roomW33S56);
    Empire.roomSpawns.push(roomW32S56);

    //  Empire.roomSpawns.push(roomW33S58);

    Empire.roomSpawns.push(roomW33S55_2);


};