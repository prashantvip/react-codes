import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const [text,setText] = useState('');
  const [isError,setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  console.log(null || undefined);

  return (
    <div>
      <h2>{undefined || 'john doe'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h2>Hello world</h2>}
    </div>
  );
};

export default ShortCircuit;
