import { Link } from "react-router-dom";

import Theme from "./Theme";

const Navbar = ({theme, themeOnClick}) => {
    return ( 
        <div className="navbar" style={{ borderBottom: theme.navBottomBorder}}>
            <h1>gespi.xyz</h1>
            <div className="links">
                <Theme theme={theme} themeOnClick={themeOnClick}/>
            </div>
        </div>
     );
}
 
export default Navbar;