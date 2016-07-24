//let rc = this.moveTo(depot, {costCallback: this.pathCallback});
​
Creep.prototype.pathCallback = function(roomName,costs) {
    let room = Game.rooms[roomName];
    if(!room) {
        return costs;
    }
    room.find(FIND_STRUCTURES).forEach(function(structure) {
        if (structure.structureType === STRUCTURE_ROAD) {
            // Favor roads over plain tiles
            costs.set(structure.pos.x, structure.pos.y, 1);
        } else if (structure.structureType !== STRUCTURE_CONTAINER &&
            (structure.structureType !== STRUCTURE_RAMPART ||
            !structure.my)) {
            // Can't walk through non-walkable buildings
            costs.set(structure.pos.x, structure.pos.y, 0xff);
        }
    });
    room.find(FIND_CONSTRUCTION_SITES).forEach(function(site) {
        if (site.structureType !== STRUCTURE_CONTAINER  &&
            site.structureType !== STRUCTURE_ROAD &&
            (site.structureType !== STRUCTURE_RAMPART || !site.my)) {
            // Can't walk through non-walkable buildings
            costs.set(site.pos.x, site.pos.y, 0xff);
        }
    });
    room.find(FIND_CREEPS).forEach(function(creep) {
        costs.set(creep.pos.x, creep.pos.y, 0xff);
    });

    let sourceFlags = _(Game.flags).filter(f=>f.name[0]==='H'&&f.pos.roomName===room.name).value();
    let positions = _.flatten(_.map(sourceFlags,f=>f.memory.pathFromDropPoint));
    _.forEach(positions,p=>costs.set(p.x,p.y,0xff));
    Memory.TEMP = costs;
    return costs;
};