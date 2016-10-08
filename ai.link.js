var aiLink = {
    run: function (sourceLink, destinationLink) {
        for (let i in Game.rooms) {

                if (Game.rooms[i].controller != undefined) {
                    let controllerLink = Game.rooms[i].controller.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_LINK && s.room.name == Game.rooms[i].name &&  s.pos.inRangeTo(s.room.controller.pos, 10) && s.energy == 0
                    });
                    if (controllerLink != undefined) {
                        dropOffLinks = Game.rooms[i].find(FIND_MY_STRUCTURES, {
                            filter: (s) => s.structureType == STRUCTURE_LINK && s != controllerLink && !s.pos.inRangeTo(s.room.controller.pos, 10)
                        });
                        drop:
                            for (let j in dropOffLinks) {
                                if (dropOffLinks[j].cooldown == 0 && dropOffLinks[j].energy >= LINK_CAPACITY * .7 && controllerLink.energy == 0) {
                                    console.log('Transferring Energy')
                                    dropOffLinks[j].transferEnergy(controllerLink);
                                    break drop;
                                }
                            }
                    }

            }
        }
    }
};

module.exports = aiLink;
