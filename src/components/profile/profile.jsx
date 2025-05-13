import './profile.css'

export default function Profile (props) {
    <>
        <div className="profile-body">
            <div className="profile-info">
                <img src={props.pfp} alt="" />
                <p>Report for</p>
                <h1 className='profile-name'>{props.name} </h1>
            </div>
            <div className="tracker">
                <h3 className='daily'>Daily</h3>
                <h3 className='weekly'>Weekly</h3>
                <h3 className='monthly'>Monthly</h3>
            </div>
        </div>
    </>
}