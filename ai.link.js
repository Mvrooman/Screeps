var aiLink = {
    run: function (sourceLink, destinationLink) {
        for (let i in Game.rooms) {
            if (Game.rooms[i].controller != undefined) {
                let controllerLink = Game.rooms[i].controller.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_LINK && s.room.name == Game.rooms[i].name
                });
                if (controllerLink != undefined) {
                    dropOffLinks = Game.rooms[i].find(FIND_MY_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_LINK && s != controllerLink
                    });
                    drop:
                    for (let j in dropOffLinks) {
                        if (dropOffLinks[j].cooldown == 0 && dropOffLinks[j].energy >= LINK_CAPACITY*.7 && controllerLink.energy == 0) {
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
