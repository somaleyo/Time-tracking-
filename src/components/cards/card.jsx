import './card.css'
export default function Card (props){

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
                            <h1>{props.temps}hrs</h1>
                            <h3 className='lastweek'>
                                {window.location.pathname.includes('daily') ? 'Yesterday' : 
                          window.location.pathname.includes('monthly') ? 'Last Month' : 'Last Week'} 
                        - {props.lastweek}hrs
                            </h3>
                        </div>
                    </div>
          
        </>
    )
}