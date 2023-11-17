import { useState } from 'react';
import './style/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The Daniel Zone</h1>
      </div>
      <div className="card">
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <span className='leEpicSecret'>
            Hi, this secret is totally amazeballs, huh? Blowing your freakin mind rn brah
          </span>
        </div>
        <button className="button">
          Get Groovy &trade;
        </button>
      </div>
    </>
  )
}

export default App
