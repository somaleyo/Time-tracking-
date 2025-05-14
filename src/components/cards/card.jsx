import './card.css'

import work from '/src/assets/images/icon-work.svg'
import play from '/src/assets/images/icon-play.svg'
import social from '/src/assets/images/icon-social.svg'
import exercise from '/src/assets/images/icon-exercise.svg'
import selfcare from '/src/assets/images/icon-self-care.svg'
import study from '/src/assets/images/icon-study.svg'
export default function Card (props){
  let timeframeText = 'Last Week';
    
    if (props.timeframe === 'daily') {
        timeframeText = 'Yesterday';
    } else if (props.timeframe === 'monthly') {
        timeframeText = 'Last Month';
    }
const img = {
    "Work":  {work},
    "Play":  {play},
    "Study":  {study},
    "Exercise":  {exercise},
    "Social":  {social},
    "Self-care":  {selfcare},
    
}
  
    return(
        <>
            
               
        <div className='card'>
                <div className={props.class} >
                    <img src={props.image}  className={props.classimage} alt="" />
                </div>
                    <div className="card-body">
                        <div className="titre">
                            <h2>{props.titre}</h2>
                            <span className='point'><img src="../src/assets/images/icon-ellipsis.svg" alt="" /></span>
                        </div>
                        <div className="hours">
                        <h1>{props.temps}hrs</h1>
                        <h3 className='lastweek'>
                           {timeframeText} - {props.lastweek}hrs
                        </h3>
                    </div>
                </div>
                </div>
          
        </>
    )
}