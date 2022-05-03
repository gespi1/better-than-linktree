import { Link } from "react-router-dom";

import Theme from "./Theme";
import * as React from "react";

const Navbar = ({theme, themeOnClick}) => {
    return ( 
        <div className="navbar" style={{ borderBottom: theme.navBottomBorder }}>
            <h1><Link to="/">gespi.xyz</Link></h1>
            <div className="link-bar">

                {/* <div className="links">
                    <ul>
                        <li>
                            <Link to="/blog" style={{ "color": theme.textColor }}>
                                blog
                            </Link>
                        </li>
                    </ul>
                </div> */}

                <div className="theme">
                    <Theme theme={theme} themeOnClick={themeOnClick}/>
                </div>  

            </div>    
        </div>
     );
}
 
export default Navbar;