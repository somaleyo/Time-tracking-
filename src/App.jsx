import { useState } from 'react'
import './App.css'
import Card from './components/cards/card'
import Profile from './components/profile/profile'
import data from './data/data.json'
import jeremy from '/src/assets/images/image-jeremy.png'
import work from '/src/assets/images/icon-work.svg'
import play from '/src/assets/images/icon-play.svg'
import social from '/src/assets/images/icon-social.svg'
import exercise from '/src/assets/images/icon-exercise.svg'
import selfcare from '/src/assets/images/icon-self-care.svg'
import study from '/src/assets/images/icon-study.svg'




function App() {
  // gere le chagement au tracker
  const [timeframe , setTimeframe] = useState('weekly')
  // permet de changer d'etat, passe de weeekly a daily ou monthly au choix ,
  //  va etre utilise au click
  const handleTimeframeChange = (newTimeframe) =>{
    setTimeframe(newTimeframe)
  }
const ikon= {
    "Work":  (`${work}`),
    "Play":  (`${play}`),
    "Study":  (`${study}`),
    "Exercise":  (`${exercise}`),
    "Social":  (`${social}`),
    "Self-Care":  (`${selfcare}`),

 }
  return (
    <>
    <section id='tracker'>
      <div className='profile'>
        <Profile
         pfp={jeremy}
         name="Jeremy Robson"
        //  onclick 
         onTimeframeChange={handleTimeframeChange}
        //  active, ce qui est actuellement 
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
              image={ikon[item.title]}
              titre={item.title} 
              temps={currentData.current} 
              lastweek={currentData.previous}
              timeframe={timeframe}
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
