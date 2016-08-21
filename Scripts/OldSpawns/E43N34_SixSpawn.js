module.exports = function () {

    var roomE43N34 = {roomName: 'E43N34', defaultSpawn: Game.spawns['SixSpawn'], roles: []};


    // roomE43N34.roles.push({
    //     role: 'claimer',
    //     count: 1
    // });
    roomE43N34.roles.push({
        role: 'extractor3',
        count: 2,
        locations: [new RoomPosition(37, 13, 'E43N34'), new RoomPosition(42, 10, 'E43N34')]
    });
    roomE43N34.roles.push({
        role: 'harvester2',
        count: 2
    });
    roomE43N34.roles.push({
        role: 'builder2',
        count: 0
    });
    // roomE43N34.roles.push({
    //     role: 'repairer',
    //     count: 2
    // });

    // roomE43N34.roles.push({
    //     role: 'attackCreep',
    //     destination: 'E47N35',
    //     count: 1
    // });
    roomE43N34.roles.push({
        role: 'hauler2',
        // dropRoomName: 'E48N36_LD',
        dropRoomName: 'E43N34',
        pickupRoomName: 'E43N35',
        count: 0
    });


    //Empire.roomSpawns.push(roomE43N34);

}