import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Twitter from "./Twitter";

const Home = ({theme}) => {
    return ( 
        <div className="home">
            <Profile theme={theme}/>
            <br />
            <SocialMedia theme={theme}/>
            <br />
            <Twitter theme={theme}/>
        </div>
    );
} 
export default Home;
