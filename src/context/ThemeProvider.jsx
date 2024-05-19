import {useState} from "react"

import {ThemeContext, themeData} from "./ThemeContext"

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themeData.LIGHT);
  
  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}