module.exports = function () {
    var roomE47N37 = {roomName: 'E47N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    // roomE47N37.roles.push({
    //     role: 'tank',
    //     destination:'E47N37_G',
    //     count: 20
    // });
    //
    // roomE47N37.roles.push({
    //     role: 'attackCreep',
    //     destination:'E47N37_G',
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
        role: 'builder',
        count: 5
    });

    roomE47N37.roles.push({
        role: 'upgrader',
        count: 0
    });

    roomE47N37.roles.push({
        role: 'repairer',
        count: 1
    });
    // roomE47N37.roles.push({
    //     role: 'hauler',
    //     dropRoomName: 'E47N37',
    //     pickupRoomName: 'E46N37',
    //     count: 1
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
        role: 'hauler',
        dropRoomName: 'E47N37_LD',
        pickupRoomName: 'E48N37',
        count: 3
    });

    roomE48N37.roles.push({
        role: 'builder',
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
        locations: [new RoomPosition(32, 16, 'E47N38'),new RoomPosition(6, 37, 'E47N38')]
    });

    roomE47N38.roles.push({
        role: 'hauler',
        dropRoomName: 'E47N37_N',
        pickupRoomName: 'E47N38',
        count: 4
    });
    roomE47N38.roles.push({
        role: 'builder',
        destination:'E47N38',
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
        role: 'hauler',
        dropRoomName: 'E48N37_D',
        pickupRoomName: 'E49N37',
        count: 2
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

    var roomE48N39 = {roomName: 'E48N39', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    roomE48N39.roles.push({
        role: 'tank',
        destination:'E48N39',
        count: 1
    });

    roomE48N39.roles.push({
        role: 'builder',
        destination:'E48N39',
        count: 0
    });

    var roomE47N40 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    roomE47N40.roles.push({
        role: 'tank',
        destination:'E49N39',
        count: 20
    });

    var roomE47N402 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['HomeSpawn2']};

    roomE47N402.roles.push({
        role: 'tank',
        destination:'E49N39',
        count: 20
    });
    var roomE47N403 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};

    roomE47N403.roles.push({
        role: 'tank',
        destination:'E49N39',
        count: 20
    });

    var roomE47N404 = {roomName: 'E49N39', roles: [], defaultSpawn: Game.spawns['SpawnThree']};

    roomE47N404.roles.push({
        role: 'tank',
        destination:'E49N39',
        count: 20
    });




    //alt
    // Empire.roomSpawns.push(roomE46N38);
    // Empire.roomSpawns.push(roomE48N36);
    // Empire.roomSpawns.push(roomE46N37);


    //Empire.roomSpawns.push(roomE46N36);


    Empire.roomSpawns.push(roomE49N37);

    Empire.roomSpawns.push(roomE48N37);
    Empire.roomSpawns.push(roomE47N37);
   // Empire.roomSpawns.push(roomE48N39);
    Empire.roomSpawns.push(roomE47N38);
    //
    // Empire.roomSpawns.push(roomE47N40);
    // Empire.roomSpawns.push(roomE47N402);
    // Empire.roomSpawns.push(roomE47N403);
    // Empire.roomSpawns.push(roomE47N404);


};