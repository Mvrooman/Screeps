module.exports = function () {
    RoomPosition.prototype.posName = function () {
        return this.roomName + 'X' + this.x + 'Y' + this.y;
    }
};