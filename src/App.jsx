import { useState } from 'react'

import './App.css'
import Card from './components/cards/card'


function App() {
  

  return (
    <>
    <section id='cards'>
        <div className='cards-container'>
            <Card class="img-bg work" image="../src/assets/images/icon-work.svg" titre="Work" temps="32" lastweek="37"   classimage="icon" />
            <Card class="img-bg play" image="../src/assets/images/icon-play.svg" titre="Play" temps="32" lastweek="37" classimage="icon icon-play"   />
            <Card class="img-bg study" image="../src/assets/images/icon-study.svg" titre="Study" temps="32" lastweek="37" classimage="icon icon-study"   />
            <Card class="img-bg exercise" image="../src/assets/images/icon-exercise.svg" titre="Exercise" temps="32" lastweek="37"  classimage="icon icon-exercise"  />
            <Card class="img-bg social" image="../src/assets/images/icon-social.svg" titre="Social" temps="32" lastweek="37"  classimage="icon icon-social"  />
            <Card class="img-bg selfcare" image="../src/assets/images/icon-self-care.svg" titre="Selfcare" temps="32" lastweek="37"  classimage="icon icon-selfcare"  />
        </div>    
    </section>
    </>
  )
}

export default App
