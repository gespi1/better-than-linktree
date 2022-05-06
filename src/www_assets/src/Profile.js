import * as React from "react";

const Profile = ({theme}) => {
    
    return ( 
        <div className="profile">
            <div className="my-face">
                <img src="/images/profile.jpg" alt="profile" />
            </div>
            <div className="my-name">
                <b style={{
                    "color": "#f1356d",
                    "fontSize": "130%"
                }}>
                        Giancarlo Espinoza
                </b>
            </div>
            <div className="titles" style={{
                "color": theme.textColor,
                "fontSize": "85%"
            }}>
                👨‍💻 DevOps Engineer | 🏅 Crypto Cheerleader | 🎮 Video Game Addict 
            </div>
            <br/>
            <div className="summary">
                <p style={{"color": theme.textColor}}>
                    Welcome 🖖, I am a seasoned DevOps POOP Engineer passionate about automating the boring stuff and building on the latest technology. If I am not automating, I am usually looking through the latest Crypto trends ... or getting my butt kicked on Elden Ring.</p>
            </div>
            <br/>
        </div>
    );
}
    
export default Profile;
