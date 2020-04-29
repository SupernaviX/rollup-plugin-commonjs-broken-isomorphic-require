// Add isomorphic support for TextDecoder
let TextDecoder = undefined;
if (typeof window === "object") {
  TextDecoder = window.TextDecoder;
} else if (typeof self === "object") {
  TextDecoder = self.TextDecoder;
} else if (typeof require === "function") {
  TextDecoder = require("util").TextDecoder;
}

export class SomeCode {
  decode(bytes) {
    return new TextDecoder().decode(bytes);
  }
}