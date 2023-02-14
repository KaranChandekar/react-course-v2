import { useState } from 'react';

const UseStateObject = () => {
  let [name, setName] = useState('peter');
  let [age, setAge] = useState(24);
  let [hobby, setHobby] = useState('read books');

  const displayPerson = () => {
    setName('John');
    setAge(28);
    setHobby('scream at the computer');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>enjoys to: {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
