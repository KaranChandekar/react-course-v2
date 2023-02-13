# React - Advanced Concepts

## Run App

- if you get an error, run the commands separately

```sh
npm install && npm run dev
```

- http://localhost:5173/

#### The Need For State

- in App.jsx setup import and container div

  Setup Challenge :

- create count variable
- display value in the JSX
- add button and increase the value
- the reason for bug - we don't trigger re-render (reference next lecture)

```js
const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    // preserve value between renders
    // trigger re-render
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
```

#### useState Basics

[Javascript Nuggets - Destructuring (Array)](https://www.youtube.com/watch?v=qhECs40xMec&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=7&t=9s)

- useState hook
- returns an array with two elements: the current state value, and a function that we can use to update the state
- accepts default value as an argument
- state update triggers re-render

```js
import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
```
