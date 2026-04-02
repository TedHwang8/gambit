importScripts('./stockfish.asm.js');

let engine = null;

try {
  engine = STOCKFISH();
  engine.onmessage = (line) => {
    self.postMessage(line);
  };
  self.postMessage('worker:engine-created');
} catch (err) {
  self.postMessage(`worker:error ${err && err.message ? err.message : err}`);
}

self.onmessage = (event) => {
  if (!engine) {
    self.postMessage('worker:error engine-missing');
    return;
  }
  try {
    engine.postMessage(event.data);
  } catch (err) {
    self.postMessage(`worker:error ${err && err.message ? err.message : err}`);
  }
};
