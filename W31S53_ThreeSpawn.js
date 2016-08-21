module.exports = function () {


    var roomW31S53_2 = {roomName: 'W31S53', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};

    roomW31S53_2.roles.push({
        role: 'extractor5',
        count: 2,
        locations: [new RoomPosition(14, 40, 'W31S53'), new RoomPosition(38, 20, 'W31S53')]
    });
    roomW31S53_2.roles.push({
        role: 'harvester',
        count: 3
    });
    roomW31S53_2.roles.push({
        role: 'builder2',
        count: 4
    });
    roomW31S53_2.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomW31S54 = {roomName: 'W31S54', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW31S54.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW31S54.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(11, 8, 'W31S54'), new RoomPosition(38, 28, 'W31S54')]
    });
    roomW31S54.roles.push({
        role: 'hauler3',
        dropRoomName: 'W31S53_2',
        pickupRoomName: 'W31S54',
        count: 4
    });
    roomW31S54.roles.push({
        role: 'harvester',
        count: 1
    });
    roomW31S54.roles.push({
        role: 'builder2',
        count: 1
    });
    roomW31S54.roles.push({
        role: 'reserver',
        count: 1
    });

    roomW31S54.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomW32S53 = {roomName: 'W32S53', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW32S53.roles.push({
        role: 'attackCreep3',
        count: 1,
    });

    roomW32S53.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(27, 27, 'W32S53')]
    });
    roomW32S53.roles.push({
        role: 'hauler3',
        dropRoomName: 'W31S53_3',
        pickupRoomName: 'W32S53',
        count: 2
    });
    roomW32S53.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW32S53.roles.push({
        role: 'repairer',
        count: 1
    });

    var roomW32S54 = {roomName: 'W32S54', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW32S54.roles.push({
        role: 'attackCreep3',
        count: 1,
    });

    roomW32S54.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(44, 19, 'W32S54')]
    });

    roomW32S54.roles.push({
        role: 'reserver',
        count: 1
    });

    roomW32S54.roles.push({
        role: 'hauler3',
        dropRoomName: 'W31S53_3',
        pickupRoomName: 'W32S54',
        count: 2
    });

    roomW32S54.roles.push({
        role: 'builder2',
        count: 1
    });
    var roomW31S51 = {roomName: 'W31S51', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW31S51.roles.push({
        role: 'mover',
        destination:'111',
        count: 0
    });

    //Empire.roomSpawns.push(roomW31S53);
    Empire.roomSpawns.push(roomW32S54);
    Empire.roomSpawns.push(roomW32S53);
    Empire.roomSpawns.push(roomW31S54);
    Empire.roomSpawns.push(roomW31S53_2);

    Empire.roomSpawns.push(roomW31S51);
};