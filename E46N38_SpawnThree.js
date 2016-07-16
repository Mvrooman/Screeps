module.exports = function() {
    var roomE46N38 = {roomName: 'E46N38', defaultSpawn: Game.spawns['SpawnThree'], roles: []};

    roomE46N38.roles.push({
        role: 'harvester',
        count: 2
    });

    roomE46N38.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 27, 'E46N38'), new RoomPosition(30, 45, 'E46N38')]
    });

    roomE46N38.roles.push({
        role: 'repairer',
        count: 1
    });

    roomE46N38.roles.push({
        role: 'builder',
        count: 0
    });

    roomE46N38.roles.push({
        role: 'upgrader',
        count: 8
    });

    Empire.roomSpawns.push(roomE46N38);
}