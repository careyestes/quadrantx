// src/lib/actions/preventScrollChain.js
export function preventScrollChain(node) {
  const stop = e => {
    // only stop if the inner actually can scroll
    if (node.scrollHeight > node.clientHeight) {
      e.stopPropagation();
    }
  };
  node.addEventListener('touchstart', stop, { passive: false });
  node.addEventListener('touchmove',  stop, { passive: false });
  return {
    destroy() {
      node.removeEventListener('touchstart', stop);
      node.removeEventListener('touchmove',  stop);
    }
  };
}
