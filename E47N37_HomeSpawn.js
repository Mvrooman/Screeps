module.exports = function () {
    var roomE47N37 = {roomName: 'E47N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomE47N37.roles.push({
        role: 'harvester',
        count: 3
    });

    roomE47N37.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(3, 5, 'E47N37'), new RoomPosition(24, 4, 'E47N37')]
    });

    roomE47N37.roles.push({
        role: 'builder',
        count: 1
    });

    roomE47N37.roles.push({
        role: 'upgrader',
        count: 1
    });

    roomE47N37.roles.push({
        role: 'repairer',
        count: 1
    });


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
        count: 4
    });

    roomE48N37.roles.push({
        role: 'builder',
        count: 1
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


    var roomE46N37 = {roomName: 'E46N37', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
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
        role: 'hauler',
        dropRoomName: 'E46N38',
        pickupRoomName: 'E46N37',
        count: 4
    });
    roomE46N37.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE46N37.roles.push({
        role: 'builder',
        count: 1
    });
    // roomE46N37.roles.push({
    //     role: 'harvester',
    //     count: 0
    // });
    roomE46N37.roles.push({
        role: 'attackCreep',
        destination: 'E46N37_D',
        count: 1
    });
    // roomE46N37.roles.push({
    //     role: 'builder',
    //     count: 4
    // });

    var roomE48N36 = {roomName: 'E48N36', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    // roomE48N36.roles.push({
    //     role: 'defense',
    //     destination: 'E48N36',
    //     count: 1
    // });
    roomE48N36.roles.push({
        role: 'harvester',
        count: 2
    });
    // roomE48N36.roles.push({
    //     role: 'repairer',
    //     count: 1
    // });
    roomE48N36.roles.push({
        role: 'builder',
        count: 0
    });
    roomE48N36.roles.push({
        role: 'upgrader',
        count: 0
    });
    roomE48N36.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(35, 29, 'E48N36'), new RoomPosition(14, 42, 'E48N36')]
    });

    var roomE46N38 = {roomName: 'E46N38', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};

    roomE46N38.roles.push({
        role: 'harvester',
        count: 2
    });
    roomE46N38.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 27, 'E46N38'), new RoomPosition(30, 45, 'E46N38')]
    });

    roomE46N38.roles.push({
        role: 'builder',
        count: 1
    });
    roomE46N38.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE46N38.roles.push({
        role: 'upgrader',
        count: 2
    });

    Empire.roomSpawns.push(roomE47N37);
    Empire.roomSpawns.push(roomE48N37);

    //alt
    Empire.roomSpawns.push(roomE46N37);
    Empire.roomSpawns.push(roomE48N36);
    Empire.roomSpawns.push(roomE46N38);

};