module.exports = function () {

    var roomE48N39 = {roomName: 'E48N39', defaultSpawn: Game.spawns['FourSpawn'], roles: []};

    roomE48N39.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(36, 23, 'E48N39'), new RoomPosition(42, 33, 'E48N39')]
    });
    roomE48N39.roles.push({
        role: 'harvester',
        count: 2
    });
    roomE48N39.roles.push({
        role: 'builder',
        count: 1
    });
    roomE48N39.roles.push({
        role: 'repairer',
        count: 1
    });
    // roomE48N39.roles.push({
    //     role: 'builder3',
    //     count: 8
    // });

    // var roomE48N392 = {roomName: 'E48N39', defaultSpawn: Game.spawns['FourSpawn'], roles: []};
    //
    // roomE48N392.roles.push({
    //     role: 'extractor',
    //     count: 2,
    //     locations: [new RoomPosition(36, 23, 'E48N39'), new RoomPosition(42, 33, 'E48N39')]
    // });


    var roomE48N38 = {roomName: 'E48N38', defaultSpawn: Game.spawns['FourSpawn'], roles: []};

    roomE48N38.roles.push({
        role: 'extractor',
        count: 2,
        locations: [
            new RoomPosition(21, 27, 'E48N38'),
            new RoomPosition(33, 45, 'E48N38')]
    });
    roomE48N38.roles.push({
        role: 'hauler',
        dropRoomName: 'E48N39_L',
        pickupRoomName: 'E48N38',
        count: 4
    });
    roomE48N38.roles.push({
        role: 'repairer',
        count: 1
    });


    roomE48N38.roles.push({
        role: 'reserver',
        count: 1
    });

    var roomE49N39 = {roomName: 'E49N39', defaultSpawn: Game.spawns['FourSpawn'], roles: []};
    roomE49N39.roles.push({
        role: 'attackCreep',
        destination: 'E49N39',
        count: 1
    });
    roomE49N39.roles.push({
        role: 'extractor',
        count: 1,
        locations: [
            new RoomPosition(31, 37, 'E49N39')]
    });
    roomE49N39.roles.push({
        role: 'hauler',
        dropRoomName: 'E48N39_R',
        pickupRoomName: 'E49N39',
        count: 2
    });
    roomE49N39.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE49N39.roles.push({
        role: 'builder',
        count: 0
    });


    roomE49N39.roles.push({
        role: 'reserver',
        count: 1
    });

    var roomE49N38 = {roomName: 'E49N38', defaultSpawn: Game.spawns['FourSpawn'], roles: []};

    roomE49N38.roles.push({
        role: 'extractor',
        count: 1,
        locations: [
            new RoomPosition(17, 45, 'E49N38')]
    });
    roomE49N38.roles.push({
        role: 'hauler2',
        dropRoomName: 'E48N39',
        pickupRoomName: 'E49N38',
        count: 2
    });
    roomE49N38.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE49N38.roles.push({
        role: 'builder',
        count: 0
    });


    roomE49N38.roles.push({
        role: 'reserver',
        count: 1
    });



    // var roomE48N382 = {roomName: 'E48N38', defaultSpawn: Game.spawns['FourSpawn'], roles: []};
    //
    // roomE48N382.roles.push({
    //     role: 'extractor',
    //     count: 2,
    //     locations: [
    //         new RoomPosition(21, 27, 'E48N38'),
    //         new RoomPosition(33, 45, 'E48N38')]
    // });
    Empire.roomSpawns.push(roomE49N38);

    Empire.roomSpawns.push(roomE48N38);
    Empire.roomSpawns.push(roomE49N39);
    Empire.roomSpawns.push(roomE48N39);
    //  Empire.roomSpawns.push(roomE48N392);
    //  Empire.roomSpawns.push(roomE48N382);


}