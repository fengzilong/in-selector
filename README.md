# in-selector

[![npm](https://img.shields.io/npm/v/in-selector.svg)](https://www.npmjs.com/package/in-selector) [![Node.js CI status](https://github.com/fengzilong/in-selector/workflows/Node.js%20CI/badge.svg)](https://github.com/fengzilong/in-selector/actions)

is a given id/classname/tag in a css selector string

# Installation

```bash
npm i in-selector
```

or

```bash
yarn add in-selector
```

# Usage

```js
const { inSelector } = require( 'in-selector' )

inSelector( '.a', '.a, .b' ) // -> true, check class
inSelector( '#b', '#a, #b:hover' ) // -> true, check id
inSelector( 'div', '.klass > div' ) // -> true, check tag
inSelector( '*', 'html *, body' ) // -> true, check universal
```

# License

MIT
