import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"
import { ThemeProvider } from "@emotion/react"
import { customTheme } from "./themeConfig"


function App() {
 {/*para el tema oscuro... const [ isDark , setIsDark ] = useState()
luego en el themeProvider ... theme= {isDark ? customDark : customTheme }..... previamente 
importo el customDark*/}

  return (
    <BrowserRouter>
      <ThemeProvider theme={ customTheme }>
        <AppRouter />
      </ThemeProvider>  
    </BrowserRouter>
  )
}

export default App
