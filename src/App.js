import React from 'react'
import Navbar from './Pages/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import "./Styles/main.css";
import HeaderBox from './Pages/HeaderBox';
import MainSection from './Pages/MainSection';
import { BrowserRouter as  Router,Switch ,Route} from "react-router-dom";
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <Router>
             <Switch>
                    <AppRouter/>
                    {/* <Route exact path ='/' component={MainSection}/> */}
                   
             </Switch>
            
       </Router>
        
    </>
  )
}

export default App



































// import React from 'react'
// import "./Styles/main.css";
// function App() {
//   return (
//     <>
//          <div className='wrapper'>
//               <div className='scrollbar'>
//                        <div className='overflow'>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>jxgdfjhg</p>
//                            <p>animesh</p>
//                        </div>
//               </div>
//          </div>
//     </>
//   )
// }

// export default App

