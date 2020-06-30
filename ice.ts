const Directions = ['U', 'D', 'L', 'R'];

const oppositeDirs = {
  U: 'D',
  D: 'U',
  L: 'R',
  R: 'L',
};

const dirTrans = {
  N: 'D',
  S: 'U',
  W: 'R',
  E: 'L',
};

enum legend {
  ice = ' ',
  obstacle = 'O',
  snow = 'S',
  goal = 'G',
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  public copy() {
    return new Point(this.x, this.y);
  }
  public isSame(point): boolean {
    return this.x === point.x && this.y === point.y;
  }
  public toKey(): string {
    return `${this.x},${this.y}`;
  }
  public x: number;
  public y: number;
}

class Path {
  constructor(mPath: string[] = []) {
    this.mPath = mPath;
  }

  public copy(): Path {
    return new Path(this.mPath.slice());
  }

  public appendPath(dir: string) {
    this.mPath.push(dir);
  }

  public mPath: string[];
}

let Area;
let entryDirection;
let areaWidth;
let areaHeight;

const cache = {};
const paths = [];

function iceCave(area: string[][], direction: string): string {
  Area = area;
  entryDirection = direction;
  areaHeight = area.length;
  areaWidth = area[0].length;

  const entries = findEntries();
  console.log(entries, dirTrans[direction]);
  entries.forEach(point => {
    console.log('entry:', point);
    const path = new Path();
    const newPoint = move(point, dirTrans[direction], path);
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
  let minPath = paths[0];
  for (const p of paths) {
    if (p.mPath.length < minPath.mPath.length) {
      minPath = p;
    }
  }
  return minPath.mPath.join('');
}

function go(point: Point, path: Path, lastDirections?: string) {
  console.log('go', point, path, lastDirections, cache);
  if (cache[point.toKey()]) {
    return;
  }
  cache[point.toKey()] = true;
  ['U', 'D', 'L', 'R'].forEach(d => {
    if (lastDirections && d === oppositeDirs[lastDirections]) {
      return;
    }
    const newPoint = move(point, d, path.copy());
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

function checkGoal(point): boolean {
  return Area[point.y][point.x] === legend.goal;
}

function findEntries() {
  switch (entryDirection) {
    case 'N':
      return Area[0].map((x, i) => new Point(i, -1));
    case 'S':
      return Area[areaHeight - 1].map((x, i) => new Point(i, areaHeight));
    case 'W':
      return Area.map((row, i) => new Point(-1, i));
    case 'E':
      return Area.map((row, i) => new Point(areaWidth, i));
  }
}

function move(point: Point, direction: string, path: Path) {
  console.log('move', point, direction, path);

  if (Area[point.y][point.x] !== legend.ice) {
    path.appendPath(direction);
  }
  switch (direction) {
    case Directions[0]:
      if (point.y === 0 || Area[point.y - 1][point.x] === legend.obstacle) {
      } else {
        point.y -= 1;
      }
      break;
    case Directions[1]:
      if (
        point.y === areaHeight - 1 ||
        Area[point.y + 1][point.x] === legend.obstacle
      ) {
      } else {
        point.y += 1;
      }
      break;
    case Directions[2]:
      if (point.x === 0 || Area[point.y][point.x - 1] === legend.obstacle) {
      } else {
        point.x -= 1;
      }
      break;
    case Directions[3]:
      if (
        point.x === areaWidth - 1 ||
        Area[point.y][point.x + 1] === legend.obstacle
      ) {
      } else {
        point.y += 1;
      }
      break;
    default:
      break;
  }
  if (Area[point.y][point.x] === legend.ice) {
    return move(point, direction, path);
  } else {
    path.appendPath(direction);
    go(point, path, direction);
    return point;
  }
}

// console.log(iceCave([[' ', ' ', ' '], [' ', 'G', ' ']], 'N'));

// console.log(iceCave([[' ', 'O'], ['O', 'G']], 'N'));
console.log(
  iceCave(
    [
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
    ],
    'E'
  )
);
