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
        role: 'builder',
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



    var roomW44S52 = {roomName: 'W44S52', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};
    roomW44S52.roles.push({
        role: 'reserver',
        count: 1,
    });
    roomW44S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(34, 38, 'W44S52'), new RoomPosition(20, 9, 'W44S52')]
    });
    roomW44S52.roles.push({
        role: 'hauler3',
        dropRoomName: 'W43S52_3',
        pickupRoomName: 'W44S52',
        count: 4
    });

    roomW44S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW44S52.roles.push({
        role: 'builder',
        count: 1,
    });


    var waypoints8 = ['W40S50', 'W40S46'];
    var roomW43S48 = {roomName: 'W43S48', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};
    roomW43S48.roles.push({
        role: 'builder',
        waypoint:waypoints8,
        count: 3
    });

    var roomW42S48 = {roomName: 'W42S48', roles: [], defaultSpawn: Game.spawns['SevenSpawn']};
    roomW42S48.roles.push({
        role: 'builder',
        waypoint:waypoints8,
        count: 3
    });



    // if (spawnCount > 4) {
    //
    // }


    //Empire.roomSpawns.push(roomW43S48);
    Empire.roomSpawns.push(roomW44S52);
    Empire.roomSpawns.push(roomW43S53);
   Empire.roomSpawns.push(roomW43S52);


};