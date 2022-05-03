import * as React from "react";

const Theme = ({theme, themeOnClick}) => {    
    return ( 
        <input type="image" width="36" height="36" src={theme.image} alt="theme-icon" onClick={themeOnClick}/>
    );
}
    
export default Theme;