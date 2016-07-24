module.exports = function() {
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
        count: 2
    });

    roomE46N38.roles.push({
        role: 'builder',
        count: 3
    });

    roomE46N38.roles.push({
        role: 'upgrader',
        count: 0
    });

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
        role: 'hauler',
        dropRoomName: 'E46N38',
        pickupRoomName: 'E46N37',
        count: 3
    });
    roomE46N37.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE46N37.roles.push({
        role: 'builder',
        count: 1
    });
    roomE46N37.roles.push({
        role: 'attackCreep',
        destination: 'E46N37_D',
        count: 1
    });



    var roomE47N37 = {roomName: 'E47N37', roles: [], defaultSpawn: Game.spawns['SpawnThree']};
    roomE47N37.roles.push({
        role: 'extractor',
        count: 0,
        locations: [new RoomPosition(3, 5, 'E47N37'), new RoomPosition(24, 4, 'E47N37')]
    });
    // roomE47N37.roles.push({
    //     role: 'attackCreep',
    //     destination:'E47N37_G',
    //     count: 3
    // });
    // roomE47N37.roles.push({
    //     role: 'tank',
    //     destination:'E47N37_G',
    //     count: 15
    // });


    Empire.roomSpawns.push(roomE46N37);
    Empire.roomSpawns.push(roomE46N38);
    Empire.roomSpawns.push(roomE47N37);

}