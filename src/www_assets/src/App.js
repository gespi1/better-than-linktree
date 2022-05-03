import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Blog from './Blog';


function App() {
  // variables
  const URL = "http://localhost:3000/"
  const themeCacheName = "theme"
  const lightTheme = {
    "mode": "light",
    "image": "/images/dark-mode.png",
    "bgColor": "#fcf0cc",
    "textColor": "#333",
    "socialBorder": "1px solid #faf7f7ec",
    "navBottomBorder": "1px solid #fef8e7",
  }
  const darkTheme = {
    "mode": "dark",
    "image": "/images/light-mode.png",
    "bgColor": "#1f1b24",
    "textColor": "white",
    "socialBorder": "1px solid #1d0505ec",
    "navBottomBorder": "1px solid #26212c"
  }

  // states
  const [theme, setTheme] = useState(lightTheme)
  //set bg color
  document.body.style.backgroundColor = theme.bgColor;

  /////// functions
  const switchTheme = () => {
    let switchTo = ""

    if (theme.mode === "light") { // check for current theme and switch it to the other
      switchTo = darkTheme
    } else if (theme.mode === "dark") {
      switchTo = lightTheme
    }
    setTheme(switchTo)
    console.log("switched Theme");
  }

  // checks for cache, if it doesnt exists takes the default theme and sets it in cache.
  // if cache is found use the theme in cache. 
  const initThemeCache = async (cacheName, url) => {
    if (typeof caches === 'undefined') return false;
    
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    
    // If no cache exists
    if (!cachedResponse || !cachedResponse.ok) {
      console.log('no cache found');
      console.log("set default theme on cache");
      addDataIntoCache(cacheName, url, theme);
      return false
    } else {
      return cachedResponse.json().then((item) => {
        setTheme(item);
      });
    }
  }

  // adds an item in cache
  const addDataIntoCache = (cacheName, url, data) => {
    // Converting our response into Actual Response form
    const d = new Response(JSON.stringify(data));
  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, d);
        console.log('data added into cache:', cacheName)
      });
    }
  }; 

	useEffect(() => {
		initThemeCache(themeCacheName, URL);
	}, []);

  useEffect(() => {
    addDataIntoCache(themeCacheName, URL, theme);
    document.body.style.backgroundColor = theme.bgColor;
  }, [theme]);

  return (
    <Router>
      <div className="App" style={{backgroundColor: theme.bgColor}}>
        <Navbar theme={theme} themeOnClick={switchTheme}/>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home theme={theme}/>}/>
            {/* <Route exact path='/blog' element={<Blog theme={theme}/>}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
