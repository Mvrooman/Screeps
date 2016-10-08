var aiRenew = {
    run: function () {
        for (var spawn in Game.spawns) {
            var spawn = Game.spawns[spawn];
            for (var name in Game.creeps) {
                var creep = Game.creeps[name];
                if (creep.memory.recycle) {
                  spawn.recycleCreep(creep);
                }
                else if (creep.room.name == spawn.room.name && creep.memory.renewing) {
                    creep.transfer(spawn, RESOURCE_ENERGY)
                    var result =   spawn.renewCreep(creep);
                    console.log('Renew: '+result);

                    if (spawn.room.energyAvailable < 10 && creep.ticksToLive > 800) {
                        creep.memory.renewing = false;
                    }
                }
            }
        }
    }
}
module.exports = aiRenew;
