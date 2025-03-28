import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [index, setIndex] = useState(Math.floor(Math.random()* quiz.length))

  return (
    <>
    <div id="q">
      <p dangerouslySetInnerHTML={{__html:quiz[index].q}}></p>
    </div>
    <div id="pic">
      <img src={quiz[index].pic} />
    </div>
    <div id="a">
    <p dangerouslySetInnerHTML={{__html:quiz[index].a}}></p>
    </div>
    </>
  )
}

