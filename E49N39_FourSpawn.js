module.exports = function () {

    var roomE49N39 = {roomName: 'E49N39', defaultSpawn: Game.spawns['FourSpawn'], roles: []};

    roomE49N39.roles.push({
        role: 'extractor',
        count: 1,
        locations: [new RoomPosition(31, 37, 'E49N39')]
    });
    roomE49N39.roles.push({
        role: 'harvester',
        count: 2
    });

    // roomE49N39.roles.push({
    //     role: 'repairer',
    //     count: 1
    // });
    // roomE49N39.roles.push({
    //     role: 'upgrader',
    //     count: 0
    // });
    roomE49N39.roles.push({
        role: 'builder',
        count: 1
    });



}