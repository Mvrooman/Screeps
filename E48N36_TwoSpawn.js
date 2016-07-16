module.exports = function () {
    var roomE48N36 = {roomName: 'E48N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};


    roomE48N36.roles.push({
        role: 'builder',
        count: 2
    });
    roomE48N36.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(35, 29, 'E48N36'), new RoomPosition(14, 42, 'E48N36')]
    });
    roomE48N36.roles.push({
        role: 'harvester',
        count: 1
    });


    roomE48N36.roles.push({
        role: 'repairer',
        count: 1
    });
    roomE48N36.roles.push({
        role: 'upgrader',
        count: 5
    });
    roomE48N36.roles.push({
        role: 'builder',
        count: 0
    });

    var roomE47N36 = {roomName: 'E47N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};


    roomE47N36.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(24, 20, 'E47N36'), new RoomPosition(12, 20, 'E47N36')]
    });

    roomE47N36.roles.push({
        role: 'builder',
        count: 0
    });
    roomE47N36.roles.push({
        role: 'hauler',
        dropRoomName: 'E48N36_LD',
        pickupRoomName: 'E47N36',
        count: 5
    });
    roomE47N36.roles.push({
        role: 'defense',
        destination: 'E47N36',
        count: 1
    });

    roomE47N36.roles.push({
        role: 'repairer',
        count: 1
    });

    Empire.roomSpawns.push(roomE48N36);
    Empire.roomSpawns.push(roomE47N36);
}