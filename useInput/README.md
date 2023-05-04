# @r-hooks/use-input
[![npm version][npm-version-image]][npm-url]

react hook for input.

* [Installation](#installation)
* [Usage](#usage)
 
## Installation
#### npm
```bash
npm install @r-hooks/use-input
```

## Usage
### `useInput(initialValue[, validator])`
```js
import useInput from "@r-hooks/use-input";

function App() {
    const input = useInput("hello world");
    return (
        <div>
            <h1>UseInput</h1>
            <input type="text" {...input} />
        </div>
    );
}
```

[npm-url]: https://npmjs.org/package/@r-hooks/use-input
[npm-version-image]: https://img.shields.io/npm/v/@r-hooks/use-input.svg