import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const [theme, setTheme] = useState({
    "mode": "light",
    "image": "/images/dark-mode.png",
    "bgColor": "#fcf0cc",
    "textColor": "#333",
    "socialBorder": "1px solid #faf7f7ec",
    "navBottomBorder": "1px solid #fef8e7",
  })
  document.body.style.backgroundColor = theme.bgColor;

  // start Dark mode as default

  // const [theme, setTheme] = useState({
  //   "mode": "dark",
  //   "image": "/images/light-mode.png",
  //   "bgColor": "#1f1b24",
  //   "textColor": "white",
  //   "socialBorder": "1px solid #1d0505ec",
  //   "navBottomBorder": "1px solid #26212c"
  // })

    const switchTheme = () => {
        if (theme.mode === "light") // check for current theme and switch it to the other
            setTheme({
              "mode": "dark",
              "image": "/images/light-mode.png",
              "bgColor": "#1f1b24",
              "textColor": "white",
              "socialBorder": "1px solid #1d0505ec",
              "navBottomBorder": "1px solid #26212c"
            })
            document.body.style.backgroundColor = "#1f1b24"
        
        if (theme.mode === "dark") 
            setTheme({
              "mode": "light",
              "image": "/images/dark-mode.png",
              "bgColor": "#fcf0cc",
              "textColor": "#333",
              "socialBorder": "1px solid #faf7f7ec",
              "navBottomBorder": "1px solid #fef8e7"
            })
            document.body.style.backgroundColor = "#fcf0cc"
        
        console.log("switched Theme: " + theme.mode)
    }

  return (
    <Router>
      <div className="App" style={{backgroundColor: theme.bgColor}}>
        <Navbar theme={theme} themeOnClick={switchTheme}/>
        <div className="content">
          <Switch>
            <Route exact path='/'> 
              <Home theme={theme}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
