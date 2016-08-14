module.exports = function () {
    var roomE46N38 = {roomName: 'E46N38', defaultSpawn: Game.spawns['SpawnThree'], roles: []};

    roomE46N38.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 27, 'E46N38'), new RoomPosition(30, 45, 'E46N38')]
    });
    roomE46N38.roles.push({
        role: 'harvester',
        count: 3
    });


    roomE46N38.roles.push({
        role: 'repairer',
        count: 1
    });

    roomE46N38.roles.push({
        role: 'builder',
        count: 1
    });
    // roomE46N38.roles.push({
    //     role: 'hauler2',
    //     pickupRoomName: 'E45N36',
    //     dropRoomName: 'E46N38',
    //     count: 7
    // });

    // roomE46N38.roles.push({
    //     role: 'tank',
    //     destination:'E44N37',
    //     count: 1
    // });
    var roomE46N37 = {roomName: 'E46N37', roles: [], defaultSpawn: Game.spawns['SpawnThree']};

    roomE46N37.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(11, 27, 'E46N37'), new RoomPosition(24, 28, 'E46N37')]
    });
    roomE46N37.roles.push({
        role: 'reserver',
        count: 1
    });

    roomE46N37.roles.push({
        role: 'hauler2',
        dropRoomName: 'E46N38',
        pickupRoomName: 'E46N37',
        count: 2
    });
    roomE46N37.roles.push({
        role: 'repairer',
        count: 0
    });
    roomE46N37.roles.push({
        role: 'builder',
        count: 0
    });
    roomE46N37.roles.push({
        role: 'attackCreep',
        destination: 'E46N37_D',
        count: 1
    });

    // var roomE46N36 = {roomName: 'E46N36', roles: [], defaultSpawn: Game.spawns['SpawnThree']};
    // roomE46N36.roles.push({
    //     role: 'attackCreep2',
    //     destination: 'E46N36',
    //     count: 2
    // });
    // roomE46N36.roles.push({
    //     role: 'extractor2',
    //     count: 3,
    //     locations: [new RoomPosition(2, 6, 'E46N36'), new RoomPosition(31, 35, 'E46N36'), new RoomPosition(13, 43, 'E46N36')]
    // });
    // roomE46N36.roles.push({
    //     role: 'builder',
    //     count: 0
    // });
    // roomE46N36.roles.push({
    //     role: 'repairer',
    //     count: 1
    // });
    // roomE46N36.roles.push({
    //     role: 'tank2',
    //     destination: 'E46N36',
    //     count: 1,
    //
    // });
    // roomE46N36.roles.push({
    //     role: 'hauler2',
    //     pickupRoomName: 'E46N36',
    //     dropRoomName: 'E46N38',
    //     count: 5
    // });

    var roomE45N36 = {roomName: 'E45N36', roles: [], defaultSpawn: Game.spawns['SpawnThree']};
    roomE45N36.roles.push({
        role: 'attackCreep2',
        destination: 'E45N36',
        count: 2
    });
    roomE45N36.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(12, 11, 'E45N36'), new RoomPosition(8, 35, 'E45N36'), new RoomPosition(44, 34, 'E45N36')]
    });
    roomE45N36.roles.push({
        role: 'builder',
        count: 2
    });
    roomE45N36.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE45N36.roles.push({
        role: 'tank2',
        destination: 'E45N36',
        count: 1
    });
    roomE45N36.roles.push({
        role: 'hauler2',
        dropRoomName: 'E46N38',
        pickupRoomName: 'E45N36',
        count: 6
    });


    var roomE46N36 = {roomName: 'E46N36', roles: [], defaultSpawn: Game.spawns['SpawnThree']};

    roomE46N36.roles.push({
        role: 'hauler2',
        pickupRoomName: 'E46N36',
        dropRoomName: 'E46N37',
        count: 5
    });


    var roomE45N38 = {roomName: 'E45N38', roles: [], defaultSpawn: Game.spawns['SpawnThree']};

    roomE45N38.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(10, 20, 'E45N38'), new RoomPosition(3, 43, 'E45N38')]
    });

    roomE45N38.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE45N38.roles.push({
        role: 'reserver',
        count: 1
    });
    roomE45N38.roles.push({
        role: 'attackCreep',
        destination: 'E45N38_D',
        count: 1
    });
    // roomE45N38.roles.push({
    //     role: 'hauler2',
    //     pickupRoomName: 'E46N38',
    //     dropRoomName: 'E45N38',
    //     count: 1
    // });
    roomE45N38.roles.push({
        role: 'hauler2',
        pickupRoomName: 'E45N38',
        dropRoomName: 'E46N38_L',
        count: 2
    });


    Empire.roomSpawns.push(roomE46N37);
    Empire.roomSpawns.push(roomE46N38);
  //  Empire.roomSpawns.push(roomE46N36);
   // Empire.roomSpawns.push(roomE45N36);
    Empire.roomSpawns.push(roomE45N38);
}