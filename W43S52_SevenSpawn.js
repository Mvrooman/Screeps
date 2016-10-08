module.exports = function () {
    let spawnCount = Game.rooms['W43S52'].find(FIND_MY_CREEPS).length;
    if (spawnCount == 0) {
        var roomW43S52 = {roomName: 'W43S52', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};
        roomW43S52.roles.push({
            role: 'harvester4',
            count: 2,

        });
        Empire.roomSpawns.push(roomW43S52);
        return;
    }
    if (spawnCount <4) {
        var roomW43S52 = {roomName: 'W43S52', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};
        roomW43S52.roles.push({
            role: 'harvester4',
            count: 3,

        });
        Empire.roomSpawns.push(roomW43S52);
        return;
    }




    var roomW43S52 = {roomName: 'W43S52', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};

    roomW43S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(30, 31, 'W43S52'), new RoomPosition(29, 32, 'W43S52')]
    });
    roomW43S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW43S52.roles.push({
        role: 'harvester2',
        count: 2,

    });

    roomW43S52.roles.push({
        role: 'builder2',
        count: 4,
    });
    roomW43S52.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW43S52.roles.push({
        role: 'miner2',
        count: 1
    });

    var roomW43S53 = {roomName: 'W43S53', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};
    roomW43S53.roles.push({
        role: 'reserver',
        count: 1,
    });
    roomW43S53.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(32, 23, 'W43S53'), new RoomPosition(43, 29, 'W43S53')]
    });
    roomW43S53.roles.push({
        role: 'hauler3',
        dropRoomName: 'W43S52_2',
        pickupRoomName: 'W43S53',
        count: 4
    });

    roomW43S53.roles.push({
        role: 'attackCreep3',
        count: 1,
    });


    // if (spawnCount > 4) {
    //
    // }

    Empire.roomSpawns.push(roomW43S53);
    Empire.roomSpawns.push(roomW43S52);


};