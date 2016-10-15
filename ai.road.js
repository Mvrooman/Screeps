var aiRoad = {

    run: function () {
        if (Game.cpu.bucket < 9000) {
            return;
        }
        let rooms = _.map(Game.creeps, c => c.pos.roomName);
        rooms = _.uniq(rooms);

        for (let roomIndex in rooms) {
            let exFlags = _.filter(Game.flags, (f) => f.name.startsWith('EX'));
            _.forEach(exFlags, (f) => {
                let structures = f.pos.lookFor(LOOK_STRUCTURES);
                structures = _.filter(structures, s => s.structureType == STRUCTURE_EXTENSION);
                if (structures.length != 0) {

                    f.remove();
                }
                else {
                    f.room.createConstructionSite(f.pos, STRUCTURE_EXTENSION);

                }
            });
        }

        for (let roomIndex in rooms) {
            let stFlags = _.filter(Game.flags, (f) => f.name.startsWith('ST'));
            _.forEach(stFlags, (f) => {
                let structures = f.pos.lookFor(LOOK_STRUCTURES);
                structures = _.filter(structures, s => s.structureType == STRUCTURE_STORAGE);
                if (structures.length != 0) {

                    f.remove();
                }
                else {
                    f.room.createConstructionSite(f.pos, STRUCTURE_STORAGE);

                }
            });
        }


        rooms:
            for (let roomIndex in rooms) {
                let roomRoadFlags = _.filter(Game.flags, (f) => f.pos.roomName == rooms[roomIndex] && f.memory.fatigueCount);
                roomRoadFlags = _.sortBy(roomRoadFlags, f => f.memory.fatigueCount);
                var maxFlag = _.last(roomRoadFlags);
                if (!maxFlag) {
                    continue rooms;
                }

                _.forEach(roomRoadFlags, (f) => {
                   //   f.remove();
                    if (!f.memory.lastFatigue) {
                        f.memory.lastFatigue = Game.time;
                    }
                    if (!f.memory.firstFatigue) {
                        f.memory.firstFatigue = Game.time;
                    }

                    let elapsedTime = (Game.time - f.memory.lastFatigue);
                    if (f.memory.fatigueCount < 20 && elapsedTime > 0 && f.memory.fatigueCount / (elapsedTime / 300.0) < 3.0) {
                        f.remove();
                        return;
                    }


                    let structures = f.pos.lookFor(LOOK_STRUCTURES);
                    structures = _.filter(structures, s => s.structureType == STRUCTURE_ROAD);
                    if (structures.length == 0) {

                        if (f.memory.fatigueCount >= maxFlag.memory.fatigueCount * .6) {
                            if (f.color != COLOR_GREEN)
                                f.setColor(COLOR_GREEN);
                            if (f.memory.fatigueCount > 20 && f.room) {
                                f.room.createConstructionSite(f.pos, STRUCTURE_ROAD);
                            }
                        }
                        else if (f.memory.fatigueCount >= maxFlag.memory.fatigueCount * .4) {
                            if (f.color != COLOR_YELLOW)
                                f.setColor(COLOR_YELLOW);
                        }
                        else if (f.memory.fatigueCount >= maxFlag.memory.fatigueCount * .2) {
                            if (f.color != COLOR_ORANGE)
                                f.setColor(COLOR_ORANGE);
                        }
                        else if (f.color != COLOR_RED)
                            f.setColor(COLOR_RED);

                    }
                    else {
                        f.remove()
                    }
                    // console.log(f.memory.fatigueCount)
                });
            }
    }

};
module.exports = aiRoad;
