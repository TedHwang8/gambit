importScripts('./stockfish.asm.js');

const engine = STOCKFISH();

self.onmessage = (event) => {
  engine.postMessage(event.data);
};

engine.onmessage = (line) => {
  self.postMessage(line);
};
