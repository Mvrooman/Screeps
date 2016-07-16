Empire = {
    defaultSpawn: Game.spawns['HomeSpawn'],
    roomSpawns: []
}


var roomSpawn = {roomName: 'E48N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};
// roomRole6.roles.push({
//     role: 'defense',
//     destination: 'E48N36',
//     count: 1
// });
// roomRole6.roles.push({
//     role: 'claimer',
//     count: 1
// });

roomSpawn.roles.push({
    role: 'builder',
    count: 0
});
roomSpawn.roles.push({
    role: 'extractor',
    count: 2,
    locations: [new RoomPosition(35, 29, 'E48N36'), new RoomPosition(14, 42, 'E48N36')]
});
roomSpawn.roles.push({
    role: 'harvester',
    count: 1
});


roomSpawn.roles.push({
    role: 'repairer',
    count: 1
});
roomSpawn.roles.push({
    role: 'upgrader',
    count: 10
});
roomSpawn.roles.push({
    role: 'builder',
    count: 0
});


var roomRole5 = {roomName: 'E47N36', defaultSpawn: Game.spawns['TwoSpawn'], roles: []};


roomRole5.roles.push({
    role: 'extractor',
    count: 2,
    locations: [new RoomPosition(24, 20, 'E47N36'), new RoomPosition(12, 20, 'E47N36')]
});

roomRole5.roles.push({
    role: 'builder',
    count: 0
});
roomRole5.roles.push({
    role: 'hauler',
    dropRoomName: 'E48N36',
    pickupRoomName: 'E47N36',
    count: 5
});
roomRole5.roles.push({
    role: 'defense',
    destination: 'E47N36',
    count: 1
});


roomRole5.roles.push({
    role: 'repairer',
    count: 1
});


//E47N37


Empire.roomSpawns.push(roomSpawn);
Empire.roomSpawns.push(roomRole5);


module.exports = Empire;