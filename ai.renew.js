var aiRenew = {
    run: function () {
        for (var spawn in Game.spawns) {
            var spawn = Game.spawns[spawn];
            for (var name in Game.creeps) {
                var creep = Game.creeps[name];
                if (creep.memory.renewing) {
                    creep.transfer(spawn, RESOURCE_ENERGY)
                    spawn.renewCreep(creep);
                    if (spawn.room.energyAvailable < 10 && creep.ticksToLive > 750) {
                        creep.memory.renewing = false;
                    }
                }
            }
        }
    }
}
module.exports = aiRenew;
