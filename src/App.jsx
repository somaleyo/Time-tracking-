import { useState } from 'react'
import './App.css'
import Card from './components/cards/card'
import Profile from './components/profile/profile'
import data from './data/data.json'

function App() {
  // gere le chagement au tracker
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
         onTimeframeChange={handleTimeframeChange}
         activeTimeframe={timeframe} />
      </div>
      <div className='cards-container'>
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
