import { useState } from 'react';

export default function CountUp() {
  const [count, setCount] = useState(0);
  return (
    <div className='count-up'>
      <p>{count > 10 ? setCount(0) : count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}