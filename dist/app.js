import util from 'util';

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

// Add isomorphic support for TextDecoder
let TextDecoder = undefined;
if (typeof window === "object") {
  TextDecoder = window.TextDecoder;
} else if (typeof self === "object") {
  TextDecoder = self.TextDecoder;
} else if (typeof commonjsRequire === "function") {
  TextDecoder = util.TextDecoder;
}

class SomeCode {
  decode(bytes) {
    return new TextDecoder().decode(bytes);
  }
}

export { SomeCode };
