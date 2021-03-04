import React, { useState } from 'react'
import UseEffectComponent from "./UseEffectComponent"

export default function App() {
  const [count, setCount] = useState<number>(1);
  console.log('ming')
  return (
    <div>
      <h1>Hello Ming {count}</h1>
      <UseEffectComponent/>
    </div>
  );
}
