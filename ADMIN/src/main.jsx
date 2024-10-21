import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AdminContextProvider from "./Contexts/AdminContext.jsx";
import SpecialistContextProvider from "./Contexts/SpecialistContext.jsx";
import AppContextProvider from "./Contexts/AppContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AdminContextProvider>
            <SpecialistContextProvider>
                <AppContextProvider>
                    <App/>
                </AppContextProvider>
            </SpecialistContextProvider>
        </AdminContextProvider>
    </BrowserRouter>,
);
