import './card.css'
export default function Card (props){

    return(
        <>
            <section id='cards'>
                <div className='cards-container'>
                    <div className='card'>
                        <div className={props.class} >
                            <img src={props.image} className='icon' alt="" />
                        </div>
                        <div className="card-body">
                            <div className="titre">
                                <h2>{props.titre}</h2>
                                <span className='point'>...</span>
                            </div>
                            <h1>{props.temps}hrs</h1>
                            <h3 className='lastweek'>Last Week-{props.lastweek}hrs</h3>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}