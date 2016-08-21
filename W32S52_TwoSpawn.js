
module.exports = function () {
    var roomW32S52 = {roomName: 'W32S52', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};

    roomW32S52.roles.push({
        role: 'extractor5',
        count: 2,
        locations: [new RoomPosition(13, 23, 'W32S52'), new RoomPosition(10, 43, 'W32S52')]
    });
    roomW32S52.roles.push({
        role: 'harvester2',
        count: 2
    });
    roomW32S52.roles.push({
        role: 'builder2',
        count: 4
    });
    roomW32S52.roles.push({
        role: 'repairer',
        count: 1
    });
    roomW32S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });

    var roomW32S51 = {roomName: 'W32S51', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};

    roomW32S51.roles.push({
        role: 'attackCreep3',
        count: 2,
    });
    roomW32S51.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW32S51.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(5, 31, 'W32S51'), new RoomPosition(30, 41, 'W32S51')]
    });

    roomW32S51.roles.push({
        role: 'hauler3',
        dropRoomName: 'W32S52_2',
        pickupRoomName: 'W32S51',
        count: 4
    });


    roomW32S51.roles.push({
        role: 'repairer',
        count: 1
    });
    roomW32S51.roles.push({
        role: 'builder2',
        count: 0
    });
    roomW32S51.roles.push({
        role: 'harvester',
        count: 1
    });




    var roomW31S51 = {roomName: 'W31S51', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};
    roomW31S51.roles.push({
        role: 'mover',
        destination:'W31S51',
        count: 0
    });

    Empire.roomSpawns.push(roomW32S51);
    Empire.roomSpawns.push(roomW32S52);
    Empire.roomSpawns.push(roomW31S51);

};