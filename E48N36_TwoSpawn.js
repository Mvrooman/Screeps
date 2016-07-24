module.exports = function () {
    var roomE48N36 = {roomName: 'E48N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};

    roomE48N36.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(35, 29, 'E48N36'), new RoomPosition(14, 42, 'E48N36')]
    });
    roomE48N36.roles.push({
        role: 'harvester',
        count: 3
    });


    roomE48N36.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE48N36.roles.push({
        role: 'upgrader',
        count: 0
    });
    roomE48N36.roles.push({
        role: 'builder',
        count: 5
    });


    var roomE47N36 = {roomName: 'E47N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};

    roomE47N36.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 20, 'E47N36'), new RoomPosition(12, 20, 'E47N36')]
    });
    roomE47N36.roles.push({
        role: 'reserver',
        count: 1
    });
    roomE47N36.roles.push({
        role: 'builder',
        count: 0
    });
    roomE47N36.roles.push({
        role: 'hauler',
        dropRoomName: 'E48N36_LD',
        pickupRoomName: 'E47N36',
        count: 3
    });
    roomE47N36.roles.push({
        role: 'attackCreep',
        destination: 'E47N36',
        count: 1
    });

    roomE47N36.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomE49N36 = {roomName: 'E49N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};

    roomE49N36.roles.push({
        role: 'attackCreep',
        destination: 'E49N36',
        count: 1
    });

    roomE49N36.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(32, 41, 'E49N36'),]
    });
    roomE49N36.roles.push({
        role: 'reserver',
        count: 1
    });
    roomE49N36.roles.push({
        role: 'builder',
        count: 0
    });
    roomE49N36.roles.push({
        role: 'hauler',
        dropRoomName: 'E48N36_LD2',
        pickupRoomName: 'E49N36',
        count: 2
    });
    roomE49N36.roles.push({
        role: 'attackCreep',
        destination: 'E49N36',
        count: 0
    });

    roomE49N36.roles.push({
        role: 'repairer',
        count: 1
    });



    var roomE49N39 = {roomName: 'E49N39', defaultSpawn: Game.spawns['TwoSpawn2'], roles: []};

    roomE49N39.roles.push({
        role: 'reserver',
        count: 1
    });

    var roomE49N38 = {roomName: 'E49N38', defaultSpawn: Game.spawns['TwoSpawn2'], roles: []};

    roomE49N38.roles.push({
        role: 'reserver',
        count: 1
    });

    var roomE46N39 = {roomName: 'E46N39', defaultSpawn: Game.spawns['TwoSpawn2'], roles: []};

    roomE46N39.roles.push({
        role: 'reserver',
        count: 1,
        waypoint: 'E49N39'
    });

    // roomE49N39.roles.push({
    //     role: 'extractor',
    //     count: 1,
    //     locations: [new RoomPosition(31, 37, 'E49N39')]
    // });
    // roomE49N39.roles.push({
    //     role: 'harvester',
    //     count: 2
    // });

    // roomE49N39.roles.push({
    //     role: 'repairer',
    //     count: 1
    // });

    // roomE49N39.roles.push({
    //     role: 'builder',
    //     count: 5
    // });

    Empire.roomSpawns.push(roomE49N36);
    Empire.roomSpawns.push(roomE47N36);
    Empire.roomSpawns.push(roomE48N36);
    Empire.roomSpawns.push(roomE49N39);
    Empire.roomSpawns.push(roomE49N38);
    Empire.roomSpawns.push(roomE46N39);


}