import { useState } from 'react'
import Background from './components/Background'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Background>
      <header className="content fluid count-7">
        <section className="content">
          <h1>
            <span aria-hidden="true">&gt;.&nbsp;</span>
          </h1>
          <ul aria-hidden="true">
            <li>design.</li>
            <li>prototype.</li>
            <li>solve.</li>
            <li>build.</li>
            <li>develop.</li>
            <li>cook.</li>
            <li>ship.</li>
          </ul>
        </section>
      </header>
    </Background>
  )
}

export default App
