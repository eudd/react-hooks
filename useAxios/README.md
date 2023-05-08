# @r-hooks/use-axios
[![npm version][npm-version-image]][npm-url]

react hook for using axios.

* [Installation](#installation)
* [Usage](#usage)
* [My Other hooks](#Hooklist)
 

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
        url:"/api/get/1"
    }
    const { loading, data, error, refetch } = useAxios(options);
    const hanlerWithAnotherOption = ()=>{
        const option = {
            url:"/api/get/2"
        }
        refetch(option);
    }
    return (
        <div>
            <h1>UseAxios</h1>
            <h2>{data?.status}</h2>
            <h3>{loading && "Loading..."}</h3>
            <button onClick={refetch}>refetch with same option</button>
            <button onClick={hanlerWithAnotherOption}>refetch with another option</button>
        </div>
    );
}
```

## Hooklist
* [use-axios](https://www.npmjs.com/package/@r-hooks/use-axios "use-axios")
* [use-input](https://www.npmjs.com/package/@r-hooks/use-input "use-input")

[npm-url]: https://npmjs.org/package/@r-hooks/use-axios
[npm-version-image]: https://img.shields.io/npm/v/@r-hooks/use-axios.svg