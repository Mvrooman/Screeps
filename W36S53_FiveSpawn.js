module.exports = function () {
    let spawnCount = Game.rooms['W36S53'].find(FIND_MY_CREEPS).length;
    if (spawnCount == 0) {
        var roomW36S53 = {roomName: 'W36S53', roles: [], defaultSpawn: Game.spawns['FiveSpawn']};
        roomW36S53.roles.push({
            role: 'harvester4',
            count: 1,

        });
        Empire.roomSpawns.push(roomW36S53);
        return;
    }
    if (spawnCount == 1) {
        var roomW36S53 = {roomName: 'W36S53', roles: [], defaultSpawn: Game.spawns['FiveSpawn']};
        roomW36S53.roles.push({
            role: 'harvester3',
            count: 1,

        });
        Empire.roomSpawns.push(roomW36S53);
        return;
    }




    var roomW36S53 = {roomName: 'W36S53', roles: [], defaultSpawn: Game.spawns['FiveSpawn']};
    roomW36S53.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW36S53.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(44, 17, 'W36S53'), new RoomPosition(18, 39, 'W36S53')]
    });
    roomW36S53.roles.push({
        role: 'harvester2',
        count: 3,

    });
    roomW36S53.roles.push({
        role: 'hauler3',
        dropRoomName: 'W36S53',
        pickupRoomName: 'W35S53_3',
        count: 1
    });

    roomW36S53.roles.push({
        role: 'builder',
        count: 4,
    });
    roomW36S53.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW36S53.roles.push({
        role: 'miner2',
        count: 1
    });

    var roomW36S52 = {roomName: 'W36S52', roles: [], defaultSpawn: Game.spawns['FiveSpawn']};
    roomW36S52.roles.push({
        role: 'attackCreep4',
        count: 1,
    });
    roomW36S52.roles.push({
        role: 'reserver',
        count: 1,
    });
    roomW36S52.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(5, 40, 'W36S52')]
    });
    roomW36S52.roles.push({
        role: 'hauler3',
        dropRoomName: 'W36S53',
        pickupRoomName: 'W36S52',
        count: 2
    });

    roomW36S52.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW36S52.roles.push({
        role: 'builder2',
        count: 1,
    });
    // if (spawnCount > 4) {
    //
    // }
    Empire.roomSpawns.push(roomW36S52);

    Empire.roomSpawns.push(roomW36S53);


};