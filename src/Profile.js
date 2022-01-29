const Profile = ({theme}) => {
    
    return ( 
        <div className="profile">
            <div className="my-face">
                <img src="/images/profile.jpg" alt="profile" />
            </div>
            <div className="summary" style={{"color": theme.textColor}}>
                This is a summary about me
            </div>
        </div>
    );
}
    
export default Profile;