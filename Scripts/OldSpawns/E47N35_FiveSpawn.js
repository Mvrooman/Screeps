module.exports = function () {

    var roomE47N35 = {roomName: 'E47N35', defaultSpawn: Game.spawns['FiveSpawn'], roles: []};


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
        count: 4
    });
    roomE47N35.roles.push({
        role: 'repairer',
        count: 1
    });

    // roomE47N35.roles.push({
    //     role: 'attackCreep',
    //     destination: 'E47N35',
    //     count: 1
    // });

    var roomE47N36 = {roomName: 'E47N36', defaultSpawn: Game.spawns['FiveSpawn'], roles: []};

    roomE47N36.roles.push({
        role: 'attackCreep',
        destination: 'E47N36',
        count: 1
    });
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
        // dropRoomName: 'E48N36_LD',
        dropRoomName: 'E47N35',
        pickupRoomName: 'E47N36',
        count: 5
    });


    roomE47N36.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomE43N34 = {roomName: 'E44N35', defaultSpawn: Game.spawns['FiveSpawn'], roles: []};
    // roomE43N34.roles.push({
    //     role: 'attackCreep2',
    //     destination: 'E43N34',
    //     count: 1
    //
    // });
    // roomE43N34.roles.push({
    //     role: 'attackCreep2',
    //     destination: 'E44N35',
    //     count: 1
    // });
    roomE43N34.roles.push({
        role: 'builder',
        count: 0
    });
    // roomE43N34.roles.push({
    //     role: 'tank',
    //     destination:'E43N35',
    //     count: 1
    // });
    Empire.roomSpawns.push(roomE47N36);

    //Empire.roomSpawns.push(roomE43N34);
    Empire.roomSpawns.push(roomE47N35);

}