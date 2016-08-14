Empire = {
    defaultSpawn: Game.spawns['HomeSpawn'],
    roomSpawns: [],
    calculateRoomPaths: function () {
        let roomNames = _.uniq(_.map(this.roomSpawns, (r) => r.roomName));
        console.log(JSON.stringify(roomNames));
        Memory.kernal.closestSpawns = {};

        for (let i in roomNames) {
            let roomName = roomNames[i];
            let spawnlist = Memory.kernal.closestSpawns[roomName] = [];
            for (let spawn in Game.spawns) {
                let distance = Game.map.findRoute(roomName, Game.spawns[spawn].pos.roomName).length;
                spawnlist.push({spawnName: spawn, distance: distance});
            }
        }
    },
    spawnForRoom: function (spawn) {
        if(!spawn)
        {
            console.log('Bad Spawn');
            return;
        }
        let roomName = spawn.room.name;
        let availableSpawn = _.find(Memory.kernal.closestSpawns[roomName], (r) => r.distance == 0 && Game.spawns[r.spawnName].spawning == null)
        if (availableSpawn) {
            return Game.spawns[availableSpawn.spawnName];
        }
    }
}

require('E47N37_HomeSpawn')();
require('E48N36_TwoSpawn')();
require('E46N38_SpawnThree')();
require('E48N39_FourSpawn')();
require('E47N35_FiveSpawn')();
require('E43N34_SixSpawn')();



module.exports = Empire;