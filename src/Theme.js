import { useState } from "react";

const Theme = ({theme, themeOnClick}) => {
    
    // const [theme, setTheme] = useState({
    //     "mode": "light", 
    //     "image": "/images/dark-mode.png"
    // })

    // const switchTheme = () => {
    //     if (theme.mode == "light")
    //         setTheme({
    //             "mode": "dark", 
    //             "image": "/images/light-mode.png"
    //         })
        
    //     if (theme.mode == "dark")
    //         setTheme({
    //             "mode": "light", 
    //             "image": "/images/dark-mode.png"
    //         })
        
    //     console.log("switched Theme")
    //     console.log(theme.mode)
    //     console.log(theme.image)
    // }
    
    return ( 
        <div className="theme-icon">
            <input type="image" width="36" height="36" src={theme.image} onClick={themeOnClick}/>
        </div>
    );
}
    
export default Theme;