import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from "./Components/Contexts/AppContext.jsx";
import UserProvider from "./Components/Contexts/UserContext.jsx";

createRoot(document.getElementById('root')).render(

    <AppContextProvider>
        <UserProvider>
            <App/>
        </UserProvider>
    </AppContextProvider>

)
