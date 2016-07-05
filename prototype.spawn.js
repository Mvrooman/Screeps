module.exports = function () {
    StructureSpawn.prototype.createCreepWithRole = function (energy, roleName) {
        var numSegments = Math.floor(energy / 200);
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
        this.createCreep(body, undefined, {role: roleName});
    }
}
