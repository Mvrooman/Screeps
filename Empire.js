Empire = {
    defaultSpawn:Game.spawns['HomeSpawn'],
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
    role: 'repairer',
    count: 1
});
roomSpawn.roles.push({
    role: 'builder',
    count: 1
});
roomSpawn.roles.push({
    role: 'upgrader',
    count: 4
});
roomSpawn.roles.push({
    role: 'extractor',
    count: 2,
    locations: [new RoomPosition(35, 29, 'E48N36'), new RoomPosition(14, 42, 'E48N36')]
});
module.exports = Empire;