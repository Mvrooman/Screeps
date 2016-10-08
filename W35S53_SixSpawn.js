module.exports = function () {
    //let spawnCount = Game.rooms['W33S55'].find(FIND_MY_CREEPS).length;
    // if (spawnCount == 0) {
    //     var roomW33S55 = {roomName: 'W33S55', roles: [], defaultSpawn: Game.spawns['FourSpawn']};
    //     roomW33S55.roles.push({
    //         role: 'harvester4',
    //         count: 1,
    //
    //     });
    //     Empire.roomSpawns.push(roomW33S55);
    //     return;
    // }
    // if (spawnCount == 1) {
    //     var roomW33S55 = {roomName: 'W33S55', roles: [], defaultSpawn: Game.spawns['FourSpawn']};
    //     roomW33S55.roles.push({
    //         role: 'harvester3',
    //         count: 1,
    //
    //     });
    //     Empire.roomSpawns.push(roomW33S55);
    //     return;
    // }

    var roomW35S52 = {roomName: 'W35S52', roles: [], defaultSpawn: Game.spawns['SixSpawn']};
    roomW35S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW35S52.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW35S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(32, 22, 'W35S52'), new RoomPosition(43, 32, 'W35S52')]
    });

    roomW35S52.roles.push({
        role: 'hauler3',
        dropRoomName: 'W35S53_2',
        pickupRoomName: 'W35S52',
        count: 3
    });
    roomW35S52.roles.push({
        role: 'builder2',
        count: 1
    });
    roomW35S52.roles.push({
        role: 'repairer',
        count: 1
    });


    var roomW35S53 = {roomName: 'W35S53', roles: [], defaultSpawn: Game.spawns['SixSpawn']};
    roomW35S53.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW35S53.roles.push({
        role: 'harvester2',
        count: 2,

    });
    roomW35S53.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(12, 11, 'W35S53'), new RoomPosition(18, 20, 'W35S53')]
    });
    roomW35S53.roles.push({
        role: 'builder2',
        count: 4,
    });
    roomW35S53.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW35S53.roles.push({
        role: 'miner2',
        count: 1
    });

    var roomW34S54 = {roomName: 'W34S54', roles: [], defaultSpawn: Game.spawns['SixSpawn']};
    roomW34S54.roles.push({
        role: 'hauler3',
        dropRoomName: 'W35S53',
        pickupRoomName: 'W34S54',
        count: 9,
    });

    // if (spawnCount > 4) {
    //
    // }
   // Empire.roomSpawns.push(roomW34S54);
     Empire.roomSpawns.push(roomW35S52);


    Empire.roomSpawns.push(roomW35S53);


};