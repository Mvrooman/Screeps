module.exports = function () {

    let spawnCount = Game.rooms['W31S53'].find(FIND_MY_CREEPS).length;
    if (spawnCount == 0) {
        var roomW31S53_2 = {roomName: 'W31S53', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
        roomW31S53_2.roles.push({
            role: 'harvester4',
            count: 1,

        });
        Empire.roomSpawns.push(roomW31S53_2);
        return;
    }
    if (spawnCount == 1) {
        var roomW31S53_2 = {roomName: 'W31S53', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
        roomW31S53_2.roles.push({
            role: 'harvester4',
            count: 2,

        });
        Empire.roomSpawns.push(roomW31S53_2);
        return;
    }

    var roomW31S53_2 = {roomName: 'W31S53', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};


    roomW31S53_2.roles.push({
        role: 'harvester',
        count: 2
    });
    roomW31S53_2.roles.push({
        role: 'attackCreep2',
        count: 1
    });


    roomW31S53_2.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(14, 40, 'W31S53'), new RoomPosition(38, 20, 'W31S53')]
    });
    roomW31S53_2.roles.push({
        role: 'miner',
        count: 1
    });
    roomW31S53_2.roles.push({
        role: 'builder',
        count: 1
    });
    roomW31S53_2.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomW31S54 = {roomName: 'W31S54', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW31S54.roles.push({
        role: 'attackCreep4',
        count: 1,
    });
    roomW31S54.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(11, 8, 'W31S54'), new RoomPosition(38, 28, 'W31S54')]
    });
    roomW31S54.roles.push({
        role: 'hauler2',
        dropRoomName: 'W31S53_2',
        pickupRoomName: 'W31S54',
        count: 2
    });
    roomW31S54.roles.push({
        role: 'harvester',
        count: 1
    });
    roomW31S54.roles.push({
        role: 'builder2',
        count: 0
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
        role: 'hauler2',
        dropRoomName: 'W32S52_3',
        pickupRoomName: 'W32S53',
        count: 1
    });
    roomW32S53.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW32S53.roles.push({
        role: 'repairer',
        count: 1
    });
    roomW32S53.roles.push({
        role: 'builder2',
        count: 0
    });

    var roomW32S54 = {roomName: 'W32S54', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW32S54.roles.push({
        role: 'attackCreep4',
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
        role: 'hauler2',
        dropRoomName: 'W31S53_3',
        pickupRoomName: 'W32S54',
        count: 1
    });

    roomW32S54.roles.push({
        role: 'repairer',
        count: 0
    });


    var roomW31S52 = {roomName: 'W31S52', roles: [], defaultSpawn: Game.spawns['ThreeSpawn']};
    roomW31S52.roles.push({
        role: 'attackCreep4',
        count: 1,
    });

    roomW31S52.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(39, 29, 'W31S52')]
    });

    roomW31S52.roles.push({
        role: 'reserver',
        count: 1
    });

    roomW31S52.roles.push({
        role: 'hauler2',
        dropRoomName: 'W31S53_4',
        pickupRoomName: 'W31S52',
        count: 1
    });

    roomW31S52.roles.push({
        role: 'builder2',
        count: 0
    });

    var waypoints = ['W34S53', 'W35S54', 'W35S55', 'E36S55'];
    var waypoints2 = ['W34S53', 'W35S54', 'W35S55', 'E36S55', 'E36S55_2', 'E38S55', 'E41S53'];


    // Empire.roomSpawns.push(roomW30S58);


  //  Empire.roomSpawns.push(roomW29S58);
   // Empire.roomSpawns.push(roomW29S55);
 //   Empire.roomSpawns.push(roomW28S55);


    Empire.roomSpawns.push(roomW32S54);
    Empire.roomSpawns.push(roomW32S53);
    Empire.roomSpawns.push(roomW31S54);
    Empire.roomSpawns.push(roomW31S52);
   // Empire.roomSpawns.push(roomW30S55);

    Empire.roomSpawns.push(roomW31S53_2);

};