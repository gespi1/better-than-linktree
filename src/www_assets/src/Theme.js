import * as React from "react";

const Theme = ({theme, themeOnClick}) => {    
    return ( 
        <div className="theme-icon">
            <input type="image" width="36" height="36" src={theme.image} alt="theme-icon" onClick={themeOnClick}/>
        </div>
    );
}
    
export default Theme;