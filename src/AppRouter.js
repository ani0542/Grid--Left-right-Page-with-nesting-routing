import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Pages/Header";
import HeaderBox from "./Pages/HeaderBox";
import HigherSecond from "./Pages/HigherSecond";
import MainSection from "./Pages/MainSection";
import Navbar from "./Pages/Navbar";
import SecondaryEducation from "./Pages/SecondaryEducation";

function AppRouter() {
    return (
        <>
             
                    <Navbar/>
                    <Header/>
                    <HeaderBox/>
                    
                    <Route exact path ='/' component={MainSection}/>
                    <Route exact path ='/hs' component={HigherSecond}/>
                    <Route exact path ='/se' component={SecondaryEducation}/>
                
        </>
    );
}

export default AppRouter;
