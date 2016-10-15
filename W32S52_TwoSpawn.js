
module.exports = function () {
    let spawnCount = Game.rooms['W32S52'].find(FIND_MY_CREEPS).length;
    if (spawnCount ==0) {
        console.log('Just 0');

        var roomW32S52 = {roomName: 'W32S52', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};
        roomW32S52.roles.push({
            role: 'harvester4',
            count: 1,

        });
        Empire.roomSpawns.push(roomW32S52);
        return;
    }
    if (spawnCount ==1) {
        console.log('Just 1');
        var roomW32S52 = {roomName: 'W32S52', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};
        roomW32S52.roles.push({
            role: 'harvester4',
            count: 2,

        });
        Empire.roomSpawns.push(roomW32S52);
        return;
    }
    var roomW32S52 = {roomName: 'W32S52', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};


    roomW32S52.roles.push({
        role: 'harvester',
        count: 2
    });
    roomW32S52.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(13, 23, 'W32S52'), new RoomPosition(10, 43, 'W32S52')]
    });
    roomW32S52.roles.push({
        role: 'builder',
        count: 1
    });
    roomW32S52.roles.push({
        role: 'repairer3',
        count: 1
    });
    roomW32S52.roles.push({
        role: 'miner',
        count: 1
    });
    roomW32S52.roles.push({
        role: 'attackCreep2',
        count: 1,
    });

    var roomW32S51 = {roomName: 'W32S51', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};

    roomW32S51.roles.push({
        role: 'attackCreep4',
        count: 1,
    });
    roomW32S51.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW32S51.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(5, 31, 'W32S51'), new RoomPosition(30, 41, 'W32S51')]
    });

    roomW32S51.roles.push({
        role: 'hauler2',
        dropRoomName: 'W32S52_2',
        pickupRoomName: 'W32S51',
        count: 2
    });


    roomW32S51.roles.push({
        role: 'repairer',
        count: 2
    });
    roomW32S51.roles.push({
        role: 'builder2',
        count: 1
    });
    roomW32S51.roles.push({
        role: 'harvester',
        count: 1
    });




    var roomW31S51 = {roomName: 'W31S51', roles: [], defaultSpawn: Game.spawns['TwoSpawn']};
    roomW31S51.roles.push({
        role: 'reserver',
        count: 1
    });
    roomW31S51.roles.push({
        role: 'attackCreep4',
        count: 1,
    });
    roomW31S51.roles.push({
        role: 'extractor',
        count: 2,
        locations: [new RoomPosition(36, 27, 'W31S51'),new RoomPosition(7, 31, 'W31S51')]
    });
    roomW31S51.roles.push({
        role: 'hauler2',
        dropRoomName: 'W32S52',
        pickupRoomName: 'W31S51',
        count: 3
    });
    roomW31S51.roles.push({
        role: 'builder2',
        count: 0
    });
    roomW31S51.roles.push({
        role: 'repairer',
        count: 1
    });


  //  Empire.roomSpawns.push(roomW30S58);

  //  Empire.roomSpawns.push(roomW29S58);

     Empire.roomSpawns.push(roomW32S51);
     Empire.roomSpawns.push(roomW31S51);

  //  Empire.roomSpawns.push(roomW30S55);
   // Empire.roomSpawns.push(roomW33S57);
  //  Empire.roomSpawns.push(roomW30S54);

    Empire.roomSpawns.push(roomW32S52);

};