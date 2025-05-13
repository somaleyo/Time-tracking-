import './profile.css'

export default function Profile(props) {
    return(
    <>
        <div className="profile-body">
            <div className="profile-info">
                <img src={props.pfp} className='pfp' alt="" />
                <p className='report'>Report for</p>
                <h1 className='profile-name'>{props.name} </h1>
            </div>
            <div className="tracker">
                <h3 className='daily track'>Daily</h3>
                <h3 className='weekly track'>Weekly</h3>
                <h3 className='monthly track'>Monthly</h3>
            </div>
        </div>
    </>
    )
}