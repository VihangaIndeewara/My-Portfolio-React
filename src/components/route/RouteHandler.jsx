import React from "react"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {MainPage} from "../page/MainPage.jsx"

export const RouteHandler=()=>{
    return(
        <BrowserRouter>
             <Routes>
                 <Route path="/" element={<MainPage/>}/>
             </Routes>
        </BrowserRouter>
    );
}