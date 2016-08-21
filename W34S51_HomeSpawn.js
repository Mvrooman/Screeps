module.exports = function () {
    let spawnCount = Game.rooms['W34S51'].find(FIND_MY_CREEPS).length;
    if (spawnCount ==0) {
        var roomW34S51 = {roomName: 'W34S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
        roomW34S51.roles.push({
            role: 'harvester4',
            count: 1,

        });
        Empire.roomSpawns.push(roomW34S51);
        return;
    }
    if (spawnCount ==1) {
        var roomW34S51 = {roomName: 'W34S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
        roomW34S51.roles.push({
            role: 'harvester2',
            count: 2,

        });
        Empire.roomSpawns.push(roomW34S51);
        return;
    }
    var roomW34S51 = {roomName: 'W34S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW34S51.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(17, 44, 'W34S51'), new RoomPosition(19, 34, 'W34S51')]
    });
    roomW34S51.roles.push({
        role: 'harvester2',
        count: 3
    });
    roomW34S51.roles.push({
        role: 'builder2',
        count: 4
    });
    roomW34S51.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomW34S52 = {roomName: 'W34S52', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW34S52.roles.push({
        role: 'attackCreep3',
        count: 2,
    });
    roomW34S52.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW34S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 15, 'W34S52'), new RoomPosition(11, 35, 'W34S52')]
    });

    roomW34S52.roles.push({
        role: 'hauler3',
        dropRoomName: 'W34S51_2',
        pickupRoomName: 'W34S52',
        count: 4
    });
    roomW34S52.roles.push({
        role: 'repairer',
        count: 1
    });
    roomW34S52.roles.push({
        role: 'harvester',
        count: 1
    });
    roomW34S52.roles.push({
        role: 'builder2',
        count: 1
    });


    var roomW33S51 = {roomName: 'W33S51', roles: [], defaultSpawn: Game.spawns['HomeSpawn']};
    roomW33S51.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW33S51.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(29, 19, 'W33S51')]
    });
    roomW33S51.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW33S51.roles.push({
        role: 'hauler3',
        dropRoomName: 'W34S51_3',
        pickupRoomName: 'W33S51',
        count: 2
    });

    roomW33S51.roles.push({
        role: 'builder2',
        count: 0
    });


    if(spawnCount>4) {
        Empire.roomSpawns.push(roomW33S51);
        Empire.roomSpawns.push(roomW34S52);
    }
    Empire.roomSpawns.push(roomW34S51);

};