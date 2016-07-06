module.exports = function () {
    StructureSpawn.prototype.createCreepWithRole = function (energy, roleName) {
        var segmentCost = 200;
        var numSegments = Math.floor(energy / segmentCost);
        var body = [];
        for (let i = 0; i < numSegments; i++) {
            body.push(WORK);
        }
        for (let i = 0; i < numSegments; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numSegments; i++) {
            body.push(MOVE);
        }
        var result = this.createCreep(body, undefined, {role: roleName});
        if (result == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Waiting to spawn ' + roleName + ': [' + this.room.energyAvailable + '/' + segmentCost * numSegments + ']');
        }
        else if (!result < 0) {
            console.log('Spawning new ' + roleName + ': ' + result);
        }
    }
}
