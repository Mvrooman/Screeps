var aiRenew = {
    run: function () {
        for (var spawn in Game.spawns) {
            var spawn = Game.spawns[spawn];
            for (var name in Game.creeps) {
                var creep = Game.creeps[name];
                if (creep.memory.renewing) {
                    spawn.renewCreep(creep);
                    if (spawn.energy < 10 && creep.ticksToLive > 750) {
                        creep.memory.renewing = false;
                    }
                }
            }
        }
    }
}
module.exports = aiRenew;
