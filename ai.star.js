var aiStar = {

    run: function () {
        var start = Game.cpu.getUsed();

        function placeTower(xOffset, yOffset, basePos) {
            let tower = new RoomPosition(basePos.x + xOffset, basePos.y + yOffset, basePos.roomName);
            let flagName = '*TWR_' + tower.x + ' ' + tower.y + tower.roomName;
            tower.createFlag(flagName)
        }

        function placeTowers(pos) {
            let x = pos.x - 5;
            let y = pos.y - 5;
            let basePos = new RoomPosition(x, y, pos.roomName);
            placeTower(0, 0, basePos);
            placeTower(10, 0, basePos);
            placeTower(0, 10, basePos);
            placeTower(10, 10, basePos);
            placeTower(-1, 0, pos);
            placeTower(1, 0, pos);
        }

        function checkFlags(pos) {
            placeTowers(pos);

        }


        // var flags = _.filter(Game.flags, f=> f.name.startsWith("*"));
        // _.forEach(flags, (f) => {
        //     f.remove();
        // });

        let starFlags = _.filter(Game.flags, (f) => f.name.startsWith('Star'));
        _.forEach(starFlags, (f) => {

            checkFlags(f.pos);

        });
        var end = Game.cpu.getUsed();
        console.log('Star: ' + (end - start));
    }

};
module.exports = aiStar;