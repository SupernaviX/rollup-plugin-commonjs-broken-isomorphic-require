# @rollup/commonjs isomorphic require bug

## Repro steps
```sh
npm install
npm run build
```

This tries bundling a file ([./src/index.js](./src/index.js)) which uses `TextDecoder`. It requires the node builtin (`require('util').TextDecoder`), but only if require is detected (`typeof require === 'function'`).

Expected: The plugin detects that the require code path will not be used on the web and optimizes it out
Actual: 
- Rollup gives a warning about an unresolved dependency util
- The bundled code ([./dist/app.js](./dist/app.js)) has a static `import util from 'util'` and does not work in the browser (even though the original code did)

Rollup warning:
```
src/index.js → dist/app.js...
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
util (imported by src\index.js,  util?commonjs-external)
created dist/app.js in 41ms
```