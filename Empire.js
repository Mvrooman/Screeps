Empire = {
    claimedEnergy: {},
    defaultSpawn: Game.spawns['HomeSpawn'],
    roomSpawns: [],
    clearRoads: function () {


        var sites = _.filter(Game.constructionSites, c => c.progress == 0);
        // _.each(sites,s => s.remove())
        console.log(sites.length)
    },
    calculateRoomPaths: function () {
        let roomNames = _.uniq(_.map(this.roomSpawns, (r) => r.roomName));
        console.log('Rooms: ' + JSON.stringify(roomNames));
        Memory.kernal.closestSpawns = {};

        for (let i in roomNames) {
            let roomName = roomNames[i];
            let spawnlist = Memory.kernal.closestSpawns[roomName] = [];
            for (let spawn in Game.spawns) {

                if (Game.spawns[spawn].pos.roomName[0] == roomName[0]) {
                    let distance = Game.map.findRoute(roomName, Game.spawns[spawn].pos.roomName).length;
                    spawnlist.push({spawnName: spawn, distance: distance});
                }
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
    },
    stayInRoom: function (roomName, costMatrix) {
        for (let i = 0; i < 49; ++i) {
            costMatrix.set(i, 0, 0xff);
            costMatrix.set(0, i, 0xff);
            costMatrix.set(i, 49, 0xff);
            costMatrix.set(49, i, 0xff);
        }
        return costMatrix;
    },
    claimEnergy: function (energy, creep) {
        if (!energy) {
            return energy
        }
        var creepAvailableEnergy = creep.carryCapacity - _.sum(creep.carry);

        if (!this.claimedEnergy[energy.id]) {
            this.claimedEnergy[energy.id] = {claimed: creepAvailableEnergy};
            return energy;
        }
        else {
            if (this.claimedEnergy[energy.id].claimed >= energy.amount) {
                return null;
            }
            this.claimedEnergy[energy.id].claimed = this.claimedEnergy[energy.id].claimed + creepAvailableEnergy;
            return energy;
        }
    }
}

require('W34S51_HomeSpawn')();
require('W32S52_TwoSpawn')();
require('W31S53_ThreeSpawn')();
require('W33S55_FourSpawn')();
require('W36S53_FiveSpawn')();
require('W35S53_SixSpawn')();
require('W43S52_SevenSpawn')();




module.exports = Empire;