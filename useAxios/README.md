# @r-hooks/use-axios
[![npm version][npm-version-image]][npm-url]

react hook for using axios.

* [Installation](#installation)
* [Usage](#usage)
 

## Installation
#### npm
```bash
npm install @r-hooks/use-axios
```


## Usage
### `useAxios(options[, axiosinstance])`
```js
import useAxios from "@r-hooks/use-axios";

function App() {
    const options = {
        url:"/api/getlist"
    }
    const { loading, data, error, refetch } = useAxios(options);
    return (
        <div>
            <h1>UseAxios</h1>
            <h2>{data?.status}</h2>
            <h3>{loading && "Loading..."}</h3>
            <button onClick={refetch}>refetch</button>
        </div>
    );
}
```

[npm-url]: https://npmjs.org/package/@r-hooks/use-axios
[npm-version-image]: https://img.shields.io/npm/v/@r-hooks/use-axios.svg