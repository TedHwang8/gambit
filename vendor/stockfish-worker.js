importScripts('./stockfish.js');

const engine = STOCKFISH('./stockfish.wasm');

self.onmessage = (event) => {
  engine.postMessage(event.data);
};

engine.onmessage = (line) => {
  self.postMessage(line);
};
