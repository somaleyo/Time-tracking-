import { useState } from 'react'
import './App.css'
import Card from './components/cards/card'
import Profile from './components/profile/profile'
import data from './data/data.json'

function App() {
  const [timeframe , setTimeframe] = useState('weekly')
  
  const handleTimeframeChange = (newTimeframe) =>{
    setTimeframe(newTimeframe)
  }

  return (
    <>
    <section id='tracker'>
      <div className='profile'>
        <Profile
         pfp="../src/assets/images/image-jeremy.png" 
         name="Jeremy Robson"
         onTimeframChange={handleTimeframeChange}
         activeTimeframe={timeframe} />
      </div>
      <div className='cards-container'>
          {/* <Card class="img-bg work" image="../src/assets/images/icon-work.svg" titre="Work" temps="32" lastweek="37"   classimage="icon" />
          <Card class="img-bg play" image="../src/assets/images/icon-play.svg" titre="Play" temps="32" lastweek="37" classimage="icon icon-play"   />
          <Card class="img-bg study" image="../src/assets/images/icon-study.svg" titre="Study" temps="32" lastweek="37" classimage="icon icon-study"   />
          <Card class="img-bg exercise" image="../src/assets/images/icon-exercise.svg" titre="Exercise" temps="32" lastweek="37"  classimage="icon icon-exercise"  />
          <Card class="img-bg social" image="../src/assets/images/icon-social.svg" titre="Social" temps="32" lastweek="37"  classimage="icon icon-social"  />
          <Card class="img-bg selfcare" image="../src/assets/images/icon-self-care.svg" titre="Selfcare" temps="32" lastweek="37"  classimage="icon icon-selfcare"  /> */}

            {data.map((item, index) => {
          // Obtenir les données pour le timeframe actuel
          const currentData = item.timeframes[timeframe]
          // Ajuster le titre pour Self Care (dans le JSON c'est "Self Care" mais dans votre classe CSS c'est "selfcare")
          const cssClass = item.title.toLowerCase().replace(' ', '')
          
          return (
            <Card 
              key={index}
              class={`img-bg ${cssClass}`} 
              image={`../src/assets/images/icon-${cssClass}.svg`}
              titre={item.title} 
              temps={currentData.current} 
              lastweek={currentData.previous}
              classimage={`icon ${cssClass !== 'work' ? `icon-${cssClass}` : ''}`} 
            />
          )
        })}
      </div>    
    </section>
    </>
  )
}

export default App
