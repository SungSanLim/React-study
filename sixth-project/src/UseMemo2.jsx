import './App.css'
import { useState } from 'react'
import Child2 from './Child2'
function UseMemo2() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)

  return (
    <>
      <h2>Parent</h2>
      <button onClick={
        () => setActive(a => !a)
      }>Toggle Active</button>
      <p>Count: {count}</p>
      <Child2
        active={active} 
        onClick={() => setCount(c => c + 1)} />
    </>
  )
}

export default UseMemo2