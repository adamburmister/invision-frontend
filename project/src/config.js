System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "stage": 0,
    "optional": [
      "runtime"
    ],
    "blacklist": []
  },
  "paths": {
    "*": "*.js",
    "github:*": "lib/github/*.js",
    "npm:*": "lib/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.5.6",
    "babel-runtime": "npm:babel-runtime@5.5.6",
    "core-js": "npm:core-js@0.9.15",
    "isotope": "npm:isotope@0.3.2",
    "isotope-fit-columns": "npm:isotope-fit-columns@1.1.2",
    "isotope-layout": "npm:isotope-layout@2.2.2",
    "nmn/react-timeago": "github:nmn/react-timeago@master",
    "pixi.js": "npm:pixi.js@3.0.6",
    "react": "npm:react@0.14.0-beta3",
    "react-dom": "npm:react-dom@0.14.0-beta3",
    "react-modal": "npm:react-modal@0.3.0",
    "react-redux": "npm:react-redux@0.9.0",
    "react-router": "npm:react-router@1.0.0-beta3",
    "react-timeago": "npm:react-timeago@2.2.1",
    "redux": "npm:redux@1.0.1",
    "redux-logger": "npm:redux-logger@1.0.5",
    "redux-react-router": "npm:redux-react-router@0.4.0",
    "redux-thunk": "npm:redux-thunk@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:argparse@0.1.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.7.0",
      "underscore.string": "npm:underscore.string@2.4.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.1.22": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:babel-runtime@5.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:brfs@1.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "quote-stream": "npm:quote-stream@0.0.0",
      "resolve": "npm:resolve@1.1.6",
      "static-module": "npm:static-module@1.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "through2": "npm:through2@0.4.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:camelcase-keys@1.0.0": {
      "camelcase": "npm:camelcase@1.2.1",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:classnames@2.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:coffee-script@1.3.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:colors@0.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:concat-stream@1.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.15": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:doc-ready@1.0.3": {
      "eventie": "npm:eventie@1.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:earcut@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:escodegen@0.0.28": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.34",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:escodegen@1.3.3": {
      "esprima": "npm:esprima@1.1.1",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.34",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:exit@0.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:falafel@1.1.0": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:fbjs@0.1.0-alpha.4": {
      "core-js": "npm:core-js@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@7.0.4",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:figures@1.3.5": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:findup-sync@0.1.3": {
      "glob": "npm:glob@3.2.11",
      "lodash": "npm:lodash@2.4.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fizzy-ui-utils@1.0.1": {
      "desandro-matches-selector": "npm:desandro-matches-selector@1.0.3",
      "doc-ready": "npm:doc-ready@1.0.3"
    },
    "npm:get-size@1.2.2": {
      "desandro-get-style-property": "npm:desandro-get-style-property@1.0.4"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@3.1.21": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@1.2.3",
      "inherits": "npm:inherits@1.0.0",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@3.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:graceful-fs@1.2.3": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:grunt-contrib-uglify@0.9.1": {
      "chalk": "npm:chalk@1.1.1",
      "grunt": "npm:grunt@0.4.5",
      "lodash": "npm:lodash@3.10.1",
      "maxmin": "npm:maxmin@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "uglify-js": "npm:uglify-js@2.4.24",
      "uri-path": "npm:uri-path@0.0.2"
    },
    "npm:grunt-legacy-log-utils@0.1.1": {
      "colors": "npm:colors@0.6.2",
      "lodash": "npm:lodash@2.4.2",
      "underscore.string": "npm:underscore.string@2.3.3"
    },
    "npm:grunt-legacy-log@0.1.2": {
      "colors": "npm:colors@0.6.2",
      "grunt-legacy-log-utils": "npm:grunt-legacy-log-utils@0.1.1",
      "hooker": "npm:hooker@0.2.3",
      "lodash": "npm:lodash@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore.string": "npm:underscore.string@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:grunt-legacy-util@0.2.0": {
      "async": "npm:async@0.1.22",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "exit": "npm:exit@0.1.2",
      "getobject": "npm:getobject@0.1.0",
      "hooker": "npm:hooker@0.2.3",
      "lodash": "npm:lodash@0.9.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore.string": "npm:underscore.string@2.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which": "npm:which@1.0.9"
    },
    "npm:grunt@0.4.5": {
      "async": "npm:async@0.1.22",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "coffee-script": "npm:coffee-script@1.3.3",
      "colors": "npm:colors@0.6.2",
      "dateformat": "npm:dateformat@1.0.2-1.2.3",
      "eventemitter2": "npm:eventemitter2@0.4.14",
      "exit": "npm:exit@0.1.2",
      "findup-sync": "npm:findup-sync@0.1.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "getobject": "npm:getobject@0.1.0",
      "glob": "npm:glob@3.1.21",
      "grunt-legacy-log": "npm:grunt-legacy-log@0.1.2",
      "grunt-legacy-util": "npm:grunt-legacy-util@0.2.0",
      "hooker": "npm:hooker@0.2.3",
      "iconv-lite": "npm:iconv-lite@0.2.11",
      "js-yaml": "npm:js-yaml@2.0.5",
      "lodash": "npm:lodash@0.9.2",
      "minimatch": "npm:minimatch@0.2.14",
      "nopt": "npm:nopt@1.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rimraf": "npm:rimraf@2.2.8",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "underscore.string": "npm:underscore.string@2.2.1",
      "which": "npm:which@1.0.9"
    },
    "npm:gzip-size@1.0.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "concat-stream": "npm:concat-stream@1.4.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hooker@0.2.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:iconv-lite@0.2.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:indent-string@1.2.2": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.1.0": {
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:isotope-fit-columns@1.1.2": {
      "isotope-layout": "npm:isotope-layout@2.2.2"
    },
    "npm:isotope-layout@2.2.2": {
      "desandro-matches-selector": "npm:desandro-matches-selector@1.0.3",
      "fizzy-ui-utils": "npm:fizzy-ui-utils@1.0.1",
      "get-size": "npm:get-size@1.2.2",
      "grunt-contrib-uglify": "npm:grunt-contrib-uglify@0.9.1",
      "masonry-layout": "npm:masonry-layout@3.3.2",
      "outlayer": "npm:outlayer@1.4.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:isotope@0.3.2": {
      "colors": "npm:colors@0.6.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:js-yaml@2.0.5": {
      "argparse": "npm:argparse@0.1.16",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima": "npm:esprima@1.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@2.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:masonry-layout@3.3.2": {
      "fizzy-ui-utils": "npm:fizzy-ui-utils@1.0.1",
      "get-size": "npm:get-size@1.2.2",
      "outlayer": "npm:outlayer@1.4.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:maxmin@1.1.0": {
      "chalk": "npm:chalk@1.1.1",
      "figures": "npm:figures@1.3.5",
      "gzip-size": "npm:gzip-size@1.0.0",
      "pretty-bytes": "npm:pretty-bytes@1.0.4"
    },
    "npm:meow@3.3.0": {
      "camelcase-keys": "npm:camelcase-keys@1.0.0",
      "indent-string": "npm:indent-string@1.2.2",
      "minimist": "npm:minimist@1.1.3",
      "object-assign": "npm:object-assign@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.6.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@0.3.0": {
      "lru-cache": "npm:lru-cache@2.6.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:nopt@1.0.10": {
      "abbrev": "npm:abbrev@1.0.7",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:outlayer@1.4.2": {
      "desandro-get-style-property": "npm:desandro-get-style-property@1.0.4",
      "desandro-matches-selector": "npm:desandro-matches-selector@1.0.3",
      "doc-ready": "npm:doc-ready@1.0.3",
      "eventie": "npm:eventie@1.0.6",
      "fizzy-ui-utils": "npm:fizzy-ui-utils@1.0.1",
      "get-size": "npm:get-size@1.2.2",
      "wolfy87-eventemitter": "npm:wolfy87-eventemitter@4.2.11"
    },
    "npm:pako@0.2.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pixi.js@3.0.6": {
      "async": "npm:async@0.9.2",
      "brfs": "npm:brfs@1.4.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "earcut": "npm:earcut@2.0.1",
      "eventemitter3": "npm:eventemitter3@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "resource-loader": "npm:resource-loader@1.6.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:pretty-bytes@1.0.4": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "meow": "npm:meow@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:quote-stream@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through2": "npm:through2@0.4.2"
    },
    "npm:react-dom@0.14.0-beta3": {
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "react": "npm:react@0.14.0-beta3"
    },
    "npm:react-modal@0.3.0": {
      "classnames": "npm:classnames@2.1.3",
      "element-class": "npm:element-class@0.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.14.0-beta3"
    },
    "npm:react-redux@0.9.0": {
      "invariant": "npm:invariant@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "redux": "npm:redux@1.0.0-rc"
    },
    "npm:react-router@1.0.0-beta3": {
      "invariant": "npm:invariant@2.1.0",
      "keymirror": "npm:keymirror@0.1.1",
      "qs": "npm:qs@2.4.1",
      "warning": "npm:warning@1.0.2"
    },
    "npm:react-timeago@2.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "react": "npm:react@0.14.0-beta3"
    },
    "npm:react@0.14.0-beta3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:redux@1.0.0-rc": {
      "invariant": "npm:invariant@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:redux@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resource-loader@1.6.0": {
      "async": "npm:async@0.9.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "eventemitter3": "npm:eventemitter3@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:rimraf@2.2.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.34": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:static-eval@0.2.4": {
      "escodegen": "npm:escodegen@0.0.28"
    },
    "npm:static-module@1.1.2": {
      "concat-stream": "npm:concat-stream@1.4.10",
      "duplexer2": "npm:duplexer2@0.0.2",
      "escodegen": "npm:escodegen@1.3.3",
      "falafel": "npm:falafel@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has": "npm:has@1.0.0",
      "object-inspect": "npm:object-inspect@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "quote-stream": "npm:quote-stream@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "static-eval": "npm:static-eval@0.2.4",
      "through2": "npm:through2@0.4.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uglify-js@2.4.24": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.34",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "yargs": "npm:yargs@3.5.4"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:which@1.0.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:wolfy87-eventemitter@4.2.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    },
    "npm:yargs@3.5.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "decamelize": "npm:decamelize@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "window-size": "npm:window-size@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    }
  }
});

