var Directions = ['U', 'D', 'L', 'R'];
var oppositeDirs = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L'
};
var dirTrans = {
    N: 'D',
    S: 'U',
    W: 'R',
    E: 'L'
};
var legend;
(function (legend) {
    legend["ice"] = " ";
    legend["obstacle"] = "O";
    legend["snow"] = "S";
    legend["goal"] = "G";
})(legend || (legend = {}));
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.copy = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.isSame = function (point) {
        return this.x === point.x && this.y === point.y;
    };
    Point.prototype.toKey = function () {
        return this.x + "," + this.y;
    };
    return Point;
}());
var Path = /** @class */ (function () {
    function Path(mPath) {
        if (mPath === void 0) { mPath = []; }
        this.mPath = mPath;
    }
    Path.prototype.copy = function () {
        return new Path(this.mPath.slice());
    };
    Path.prototype.appendPath = function (dir) {
        this.mPath.push(dir);
    };
    return Path;
}());
var Area;
var entryDirection;
var areaWidth;
var areaHeight;
var cache = {};
var paths = [];
function iceCave(area, direction) {
    Area = area;
    entryDirection = direction;
    areaHeight = area.length;
    areaWidth = area[0].length;
    var entries = findEntries();
    console.log(entries, dirTrans[direction]);
    entries.forEach(function (point) {
        console.log('entry:', point);
        var path = new Path();
        var newPoint = move(point, dirTrans[direction], path);
        if (checkGoal(newPoint)) {
            paths.push(path);
            if (!newPoint.isSame(point)) {
                go(newPoint, path, dirTrans[direction]);
            }
        }
    });
    if (!paths.length) {
        return 'impossible';
    }
    var minPath = paths[0];
    for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
        var p = paths_1[_i];
        if (p.mPath.length < minPath.mPath.length) {
            minPath = p;
        }
    }
    return minPath.mPath.join('');
}
function go(point, path, lastDirections) {
    console.log('go', point, path, lastDirections, cache);
    if (cache[point.toKey()]) {
        return;
    }
    cache[point.toKey()] = true;
    ['U', 'D', 'L', 'R'].forEach(function (d) {
        if (lastDirections && d === oppositeDirs[lastDirections]) {
            return;
        }
        var newPoint = move(point, d, path.copy());
        console.log('get newpoint ', newPoint);
        if (checkGoal(newPoint)) {
            paths.push(path);
            return;
        }
        if (!newPoint.isSame(point)) {
            go(newPoint, path, d);
        }
    });
}
function checkGoal(point) {
    return Area[point.y][point.x] === legend.goal;
}
function findEntries() {
    switch (entryDirection) {
        case 'N':
            return Area[0].map(function (x, i) { return new Point(i, -1); });
        case 'S':
            return Area[areaHeight - 1].map(function (x, i) { return new Point(i, areaHeight); });
        case 'W':
            return Area.map(function (row, i) { return new Point(-1, i); });
        case 'E':
            return Area.map(function (row, i) { return new Point(areaWidth, i); });
    }
}
function move(point, direction, path) {
    console.log('move', point, direction, path);
    if (Area[point.y][point.x] !== legend.ice) {
        path.appendPath(direction);
    }
    switch (direction) {
        case Directions[0]:
            if (point.y === 0 || Area[point.y - 1][point.x] === legend.obstacle) {
            }
            else {
                point.y -= 1;
            }
            break;
        case Directions[1]:
            if (point.y === areaHeight - 1 ||
                Area[point.y + 1][point.x] === legend.obstacle) {
            }
            else {
                point.y += 1;
            }
            break;
        case Directions[2]:
            if (point.x === 0 || Area[point.y][point.x - 1] === legend.obstacle) {
            }
            else {
                point.x -= 1;
            }
            break;
        case Directions[3]:
            if (point.x === areaWidth - 1 ||
                Area[point.y][point.x + 1] === legend.obstacle) {
            }
            else {
                point.y += 1;
            }
            break;
        default:
            break;
    }
    if (Area[point.y][point.x] === legend.ice) {
        return move(point, direction, path);
    }
    else {
        path.appendPath(direction);
        go(point, path, direction);
        return point;
    }
}
// console.log(iceCave([[' ', ' ', ' '], [' ', 'G', ' ']], 'N'));
// console.log(iceCave([[' ', 'O'], ['O', 'G']], 'N'));
console.log(iceCave([
    [' ', ' ', 'O', 'S', ' ', 'G', 'O', ' ', ' ', ' '],
    [' ', ' ', ' ', 'O', ' ', 'O', 'S', ' ', ' ', ' '],
    [' ', 'G', 'O', ' ', ' ', ' ', 'O', ' ', ' ', ' '],
    ['O', ' ', 'S', ' ', 'O', 'O', 'S', 'O', ' ', 'O'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' '],
    [' ', ' ', 'O', ' ', 'O', ' ', ' ', ' ', ' ', ' '],
    ['O', 'G', ' ', ' ', 'O', ' ', ' ', ' ', ' ', 'O'],
    [' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', 'O'],
    [' ', 'S', 'O', ' ', ' ', 'S', ' ', 'O', ' ', ' '],
    ['S', ' ', 'S', ' ', ' ', ' ', ' ', ' ', 'S', 'O'],
], 'E'));
