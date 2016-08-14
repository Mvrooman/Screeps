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
        count: 0
    });

    roomE48N36.roles.push({
        role: 'builder2',
        count: 1
    });




    var roomE49N36 = {roomName: 'E49N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};

    roomE49N36.roles.push({
        role: 'attackCreep',
        destination: 'E49N36',
        count: 0
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
        role: 'hauler2',
        dropRoomName: 'E48N36_LD2',
        pickupRoomName: 'E49N36',
        count: 1
    });

    roomE49N36.roles.push({
        role: 'repairer',
        count: 1
    });





    var roomE49N35 = {roomName: 'E49N35', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};



    roomE49N35.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(40, 38, 'E49N35'),new RoomPosition(8, 45, 'E49N35')]
    });
    roomE49N35.roles.push({
        role: 'reserver',
        count: 1
    });
    // roomE49N35.roles.push({
    //     role: 'builder',
    //     count: 2
    // });
    roomE49N35.roles.push({
        role: 'hauler2',
        dropRoomName: 'E48N36_LD2',
        pickupRoomName: 'E49N35',
        count: 2
    });
    roomE49N35.roles.push({
        role: 'harvester',
        count: 1
    });

    roomE49N35.roles.push({
        role: 'repairer',
        count: 2
    });
    roomE49N35.roles.push({
        role: 'attackCreep',
        destination: 'E49N35',
        count: 1
    });

    var roomE47N35 = {roomName: 'E47N35', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};


    // roomE47N35.roles.push({
    //     role: 'claimer',
    //     count: 1
    // });
    roomE47N35.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(42, 11, 'E47N35'), new RoomPosition(10, 20, 'E47N35')]
    });
    roomE47N35.roles.push({
        role: 'harvester',
        count: 2
    });
    roomE47N35.roles.push({
        role: 'builder',
        count: 6
    });

   // Empire.roomSpawns.push(roomE47N35);
    Empire.roomSpawns.push(roomE49N36);
    Empire.roomSpawns.push(roomE49N35);
    Empire.roomSpawns.push(roomE48N36);


}