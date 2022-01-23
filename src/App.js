import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const [theme, setTheme] = useState({
    "mode": "light",
    "image": "/images/dark-mode.png",
    "bgColor": "#fcf0cc",
    "textColor": "#333",
    "socialBorder": "1px solid #faf7f7ec",
    "navBottomBorder": "1px solid #fef8e7"
  })

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
        if (theme.mode == "light")
            setTheme({
              "mode": "dark",
              "image": "/images/light-mode.png",
              "bgColor": "#1f1b24",
              "textColor": "white",
              "socialBorder": "1px solid #1d0505ec",
              "navBottomBorder": "1px solid #26212c"
            })
        
        if (theme.mode == "dark")
            setTheme({
              "mode": "light",
              "image": "/images/dark-mode.png",
              "bgColor": "#fcf0cc",
              "textColor": "#333",
              "socialBorder": "1px solid #faf7f7ec",
              "navBottomBorder": "1px solid #fef8e7"
            })
        
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
