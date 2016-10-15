module.exports = function () {
    let spawnCount = Game.rooms['W42S48'].find(FIND_MY_CREEPS).length;
    if (spawnCount === 0) {
        var roomW42S48 = {roomName: 'W42S48', roles: [], defaultSpawn: Game.spawns['NineSpawn']};
        roomW42S48.roles.push({
            role: 'harvester4',
            count: 1,

        });
        Empire.roomSpawns.push(roomW42S48);
        return;
    }
    if (spawnCount === 1) {
        var roomW42S48 = {roomName: 'W42S48', roles: [], defaultSpawn: Game.spawns['NineSpawn']};
        roomW42S48.roles.push({
            role: 'harvester3',
            count: 2,

        });
        roomW42S48.roomSpawns.push(roomW42S48);
        return;
    }


    var roomW42S48 = {roomName: 'W42S48', roles: [], defaultSpawn: Game.spawns['NineSpawn']};
    roomW42S48.roles.push({
        role: 'attackCreep5',
        count: 1,
    });
    roomW42S48.roles.push({
        role: 'tank5',
        destination:'W42S48',
        count: 0,
    });
    roomW42S48.roles.push({
        role: 'extractor5',
        count: 2,
        locations: [new RoomPosition(33, 25, 'W42S48'), new RoomPosition(39, 17, 'W42S48')]
    });
    roomW42S48.roles.push({
        role: 'harvester',
        count: 2,

    });

    roomW42S48.roles.push({
        role: 'builder2',
        count: 4,
    });
    roomW42S48.roles.push({
        role: 'repairer',
        count: 1,
    });
    roomW42S48.roles.push({
        role: 'miner2',
        count: 0
    });

    var roomW42S49 = {roomName: 'W42S49', roles: [], defaultSpawn: Game.spawns['NineSpawn']};
    roomW42S49.roles.push({
        role: 'reserver',
        count: 1,
    });
    roomW42S49.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(28, 17, 'W42S49'),new RoomPosition(35, 16, 'W42S49')]
    });
    roomW42S49.roles.push({
        role: 'hauler3',
        dropRoomName: 'W42S48_2',
        pickupRoomName: 'W42S49',
        count: 3
    });

    roomW42S49.roles.push({
        role: 'attackCreep3',
        count: 1,
    });
    roomW42S49.roles.push({
        role: 'builder2',
        count: 1,
    });
    roomW42S49.roles.push({
        role: 'repairer',
        count: 1,
    });

    Empire.roomSpawns.push(roomW42S49);

    Empire.roomSpawns.push(roomW42S48);


};