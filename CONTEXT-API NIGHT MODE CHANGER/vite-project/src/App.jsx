import { useEffect, useState } from 'react'
import {ThemeProvider,useTheme} from "./Contexts/theme"
import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"
import './App.css'

function App() {
  let [themeMode, setThemeMode] = useState("light")

  const lightTheme= ()=>{
    setThemeMode("light")
  }

  const darkTheme= ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    const htmlTag= document.querySelector("html")
    htmlTag.classList.remove("light","dark")
    htmlTag.classList.add(themeMode)
    
  },
[themeMode])

  return (

    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Card/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <ThemeBtn/>
                    </div>
                </div>
            </div>

            </ThemeProvider>  
 
  )
}

export default App
