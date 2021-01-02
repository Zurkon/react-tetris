export const TETROMINOS = {
  0: {
    shape: [[0]],
    color: '0, 0, 0'
  },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: '1, 240, 241'
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]
    ],
    color: '1, 1, 240'
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: '234, 161, 6'
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '240, 241, 0'
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: '0, 241, 0'
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: '240, 1, 0'
  },
  T: {
    shape: [
      [0, 0, 0],
      [0, 'T', 0],
      ['T', 'T', 'T'],
    ],
    color: '160, 0, 243'
  },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSZT';
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
}