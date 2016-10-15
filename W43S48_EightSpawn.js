module.exports = function () {
    let spawnCount = Game.rooms['W43S48'].find(FIND_MY_CREEPS).length;
    if (spawnCount == 0) {
        var roomW43S48 = {roomName: 'W43S48', roles: [], defaultSpawn: Game.spawns['EightSpawn']};
        roomW43S48.roles.push({
            role: 'harvester3',
            count: 1,

        });
        Empire.roomSpawns.push(roomW43S48);
        return;
    }
    if (spawnCount == 1) {
        var roomW43S48 = {roomName: 'W43S48', roles: [], defaultSpawn: Game.spawns['EightSpawn']};
        roomW43S48.roles.push({
            role: 'harvester3',
            count: 2,

        });
        Empire.roomSpawns.push(roomW43S48);
        return;
    }


    var roomW43S48 = {roomName: 'W43S48', roles: [], defaultSpawn: Game.spawns['EightSpawn']};
    roomW43S48.roles.push({
        role: 'attackCreep3',
        count: 0,
    });
    roomW43S48.roles.push({
        role: 'extractor5',
        count: 2,
        locations: [new RoomPosition(7, 39, 'W43S48'), new RoomPosition(37, 13, 'W43S48')]
    });
    roomW43S48.roles.push({
        role: 'harvester',
        count: 2,

    });

    roomW43S48.roles.push({
        role: 'builder2',
        count: 4,
    });
    roomW43S48.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW43S48.roles.push({
        role: 'miner2',
        count: 0
    });

    var roomW44S48 = {roomName: 'W44S48', roles: [], defaultSpawn: Game.spawns['EightSpawn']};
    roomW44S48.roles.push({
        role: 'reserver',
        count: 1,
    });
    roomW44S48.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(32, 26, 'W44S48'), new RoomPosition(36, 7, 'W44S48')]
    });
    roomW44S48.roles.push({
        role: 'hauler3',
        dropRoomName: 'W43S48_2',
        pickupRoomName: 'W44S48',
        count: 4
    });

    roomW44S48.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW44S48.roles.push({
        role: 'builder2',
        count: 1,
    });
    roomW44S48.roles.push({
        role: 'repairer',
        count: 1,
    });
    if (spawnCount > 4) {

    }
    Empire.roomSpawns.push(roomW44S48);

    Empire.roomSpawns.push(roomW43S48);


};