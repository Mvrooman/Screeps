Empire = {
    defaultSpawn: Game.spawns['HomeSpawn'],
    roomSpawns: [],
    calculateRoomPaths: function () {
        let roomNames = _.uniq(_.map(this.roomSpawns, (r) => r.roomName));
        console.log('Rooms: ' + JSON.stringify(roomNames));
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
        if (!spawn) {
            console.log('Bad Spawn');
            return;
        }
        let roomName = spawn.room.name;
        let availableSpawn = _.find(Memory.kernal.closestSpawns[roomName], (r) => r.distance == 0 && Game.spawns[r.spawnName].spawning == null)
        if (availableSpawn) {
            return Game.spawns[availableSpawn.spawnName];
        }
    },

    trackFatigue: function (pos) {
        // Game.flags[pos.]
    },
    idleSpawns: function () {
        let ticks = Game.time - Memory.kernal.spawnStart;
        for (let s in Game.spawns) {
            let spawn = Game.spawns[s];
            console.log(spawn.name + " : " + Memory.kernal.spawns[spawn.name] / ticks * 100 + '%');
        }
    }
}

require('W34S51_HomeSpawn')();
require('W32S52_TwoSpawn')();
require('W31S53_ThreeSpawn')();


module.exports = Empire;