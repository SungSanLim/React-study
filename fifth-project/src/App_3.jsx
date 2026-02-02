import './App.css'
import { useState } from 'react'
import Timer from './Timer'

const App_3 = () => {
  const [showTimer, setShowTimer]
   = useState(false)

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showTimer}
          onChange={
            (e) => setShowTimer(
              e.target.checked
            )}/>
        Show Timer
      </label>
      {showTimer && <Timer />}
    </>
  )
}

export default App_3