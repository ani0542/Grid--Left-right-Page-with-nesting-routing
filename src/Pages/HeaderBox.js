import React, { useState } from 'react'
import {
  Link,
  useParams,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import HigherSecond from './HigherSecond';
import MainSection from './MainSection';



function HeaderBox() {

  const { path, url } = useRouteMatch();

  // console.log(path)


      const links = [
        { label: "Higher Education", to: `/` },
        { label: "Higher Secondary", to: `/hs` },
        { label: "Secondary Education", to: `/se` },
      ];


      const renderLink=(value)=>{
        return (
          <>
                      
                          <li className='active'>
                                <Link exact to={value.to}>{value.label}</Link>
                          </li>
                            
          </>
        )
      }


    return (
        <>
              
     <div className='container mt-5'>
          <nav class="main-nav">
          
            <ul>
                    {links.map(renderLink)}
            </ul>
           
        </nav>
    </div> 
        </>
    )
}

export default HeaderBox
