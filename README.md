Convert template literal to formatter function.

[![npm](https://img.shields.io/npm/v/to-fmt.svg?style=flat-square)](https://npmjs.com/package/to-fmt)
[![Travis](https://img.shields.io/travis/rumkin/to-format.svg?style=flat-square)](https://travis-ci.org/rumkin/to-format)
![](https://img.shields.io/badge/coverage-100%25-green.svg?style=flat-square)
![](https://img.shields.io/badge/size-0.7%20KiB-blue.svg?style=flat-square)
![](https://img.shields.io/badge/deps-0-blue.svg?style=flat-square)
[![npm](https://img.shields.io/npm/dm/to-fmt.svg?style=flat-square)](https://npmjs.com/packages/to-fmt)

## Install

With npm:

```bash
npm i to-fmt
```

## Usage

Hello world example:

```javascript
import f from 'to-fmt';

const format = f`Hello, ${String}!`;

format('World'); // -> 'Hello, World!'
```

Number formatter:

```javascript
import f from 'to-fmt';

const toFixed = n => number => number.toFixed(n);

const format = f`Value is ${toFixed(2)}!`;

format(1); // -> 'Value is 1.00!'
format(3.14159); // -> 'Value is 3.14!'
```

Multiple values example:
```javascript
import f from 'to-fmt';
import bytes from 'pretty-bytes';

const format = f`"${String}" size is ${bytes}!`;

format('index.js', 605); // -> '"index.js" size is 605 B'
```

## License

MIT.

## Copyright

&copy; 2018, Rumkin.
