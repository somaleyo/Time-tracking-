import './profile.css'

export default function Profile(props) {
    return(
    <>
        <div className="profile-body">
            <div className="profile-info">
                <img src={props.pfp} className='pfp' alt="" />
                <div className="text-profile">
                <p className='report'>Report for</p>
                <h1 className='profile-name'>{props.name} </h1>
                </div>
            </div>
            <div className="tracker">
                <h3 
                    className={`daily track ${props.activeTimeframe === 'daily' ? 'active' : ''}`}
                    onClick={() => props.onTimeframeChange('daily')}>
                        Daily
                </h3>
                <h3 
                     className={`weekly track ${props.activeTimeframe === 'weekly' ? 'active' : ''}`}
                    onClick={() => props.onTimeframeChange('weekly')}>
                        Weekly
                </h3>
                <h3 
                      className={`monthly track ${props.activeTimeframe === 'monthly' ? 'active' : ''}`}
                    onClick={() => props.onTimeframeChange('monthly')}>
                        Monthly
                </h3>
            </div>
        </div>
    </>
    )
}