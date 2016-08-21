module.exports = function () {
    var roomE47N37 = {roomName: 'E47N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    // roomE47N37.roles.push({
    //     role: 'tank',
    //     destination:'E47N37',
    //     count: 2
    // });

    // roomE47N37.roles.push({
    //     role: 'attackCreep',
    //     destination:'E47N37',
    //     count: 3
    // });
    roomE47N37.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(3, 5, 'E47N37'), new RoomPosition(24, 4, 'E47N37')]
    });
    roomE47N37.roles.push({
        role: 'harvester',
        count: 3
    });


    roomE47N37.roles.push({
        role: 'builder2',
        count: 1
    });

    roomE47N37.roles.push({
        role: 'repairer',
        count: 2
    });
    // roomE47N37.roles.push({
    //     role: 'hauler2',
    //     dropRoomName: 'E46N38',
    //     pickupRoomName: 'E45N36',
    //     count: 3
    // });

    //E48N37
    var roomE48N37 = {roomName: 'E48N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomE48N37.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(10, 38, 'E48N37'), new RoomPosition(3, 8, 'E48N37')]
    });
    roomE48N37.roles.push({
        role: 'reserver',
        count: 1
    });
    roomE48N37.roles.push({
        role: 'hauler2',
        dropRoomName: 'E47N37_LD',
        pickupRoomName: 'E48N37',
        count: 2
    });

    roomE48N37.roles.push({
        role: 'builder2',
        count: 0
    });


    roomE48N37.roles.push({
        role: 'repairer',
        count: 1
    });

    roomE48N37.roles.push({
        role: 'attackCreep',
        destination: 'E48N37_D',
        count: 1
    });


    var roomE47N38 = {roomName: 'E47N38', roles: [], defaultSpawn: Game.spawns['HomeSpawn2']};

    roomE47N38.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(32, 16, 'E47N38'), new RoomPosition(6, 37, 'E47N38')]
    });

    roomE47N38.roles.push({
        role: 'hauler2',
        dropRoomName: 'E47N37_N',
        pickupRoomName: 'E47N38',
        count: 3
    });
    roomE47N38.roles.push({
        role: 'builder',
        destination: 'E47N38',
        count: 0
    });
    roomE47N38.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE47N38.roles.push({
        role: 'reserver',
        count: 1
    });


    var roomE49N37 = {roomName: 'E49N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn2']};

    roomE49N37.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(5, 28, 'E49N37')]
    });
    roomE49N37.roles.push({
        role: 'hauler2',
        dropRoomName: 'E48N37_D',
        pickupRoomName: 'E49N37',
        count: 1
    });

    roomE49N37.roles.push({
        role: 'reserver',
        count: 1
    });
    roomE49N37.roles.push({
        role: 'builder',
        count: 0
    });
    roomE49N37.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE49N37.roles.push({
        role: 'attackCreep',
        count: 1
    });


    var roomE47N40 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    roomE47N40.roles.push({
        role: 'tank',
        destination: 'E49N39',
        count: 20
    });

    var roomE47N402 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['HomeSpawn2']};

    roomE47N402.roles.push({
        role: 'attackCreep',
        destination: 'E49N39',
        count: 20
    });
    var roomE47N403 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['TwoSpawn2']};

    roomE47N403.roles.push({
        role: 'attackCreep',
        destination: 'E49N39',
        count: 20
    });

    var roomE47N404 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['SpawnThree']};

    roomE47N404.roles.push({
        role: 'tank',
        destination: 'E49N39',
        count: 20
    });


    var roomE46N39 = {roomName: 'E46N39', defaultSpawn: Game.spawns['TwoSpawn2'], roles: []};

    roomE46N39.roles.push({
        role: 'reserver',
        count: 1,
        waypoint: 'E49N39'
    });

    var roomE48N38 = {roomName: 'E48N38', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    roomE48N38.roles.push({
        role: 'reserver',
        destination: 'E48N38',
        count: 1
    });

    roomE48N38.roles.push({
        role: 'builder',
        destination: 'E48N38',
        count: 0
    });

    roomE48N38.roles.push({
        role: 'repairer',
        destination: 'E48N38',
        count: 1
    });


    var roomE45N36 = {roomName: 'E45N36', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    roomE45N36.roles.push({
        role: 'hauler2',
        dropRoomName: 'E47N37',
        pickupRoomName: 'E46N37',
        count: 2
    });

    var roomE46N36 = {roomName: 'E46N36', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomE46N36.roles.push({
        role: 'attackCreep2',
        destination: 'E46N36',
        count: 2
    });
    roomE46N36.roles.push({
        role: 'extractor2',
        count: 3,
        locations: [new RoomPosition(2, 6, 'E46N36'), new RoomPosition(31, 35, 'E46N36'), new RoomPosition(13, 43, 'E46N36')]
    });
    roomE46N36.roles.push({
        role: 'builder',
        count: 1
    });
    roomE46N36.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE46N36.roles.push({
        role: 'tank2',
        destination: 'E46N36',
        count: 1,

    });
    roomE46N36.roles.push({
        role: 'hauler2',
        pickupRoomName: 'E46N36',
        dropRoomName: 'E47N37',
        count: 7
    });


    var roomE46N37 = {roomName: 'E46N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomE46N37.roles.push({
        role: 'hauler2',
        dropRoomName: 'E47N37',
        pickupRoomName: 'E46N37',
        count: 0
    });
    roomE46N37.roles.push({
        role: 'builder',
        count: 0
    });
    roomE46N37.roles.push({
        role: 'repairer',
        count: 2
    });



    Empire.roomSpawns.push(roomE47N38);
    Empire.roomSpawns.push(roomE46N37);
    Empire.roomSpawns.push(roomE49N37);
    Empire.roomSpawns.push(roomE48N37);
    Empire.roomSpawns.push(roomE47N37);
   // Empire.roomSpawns.push(roomE46N36);
  //  Empire.roomSpawns.push(roomE45N36);




};