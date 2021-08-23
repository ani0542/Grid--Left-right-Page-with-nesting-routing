import React from 'react'
import { ImCross } from 'react-icons/im';
import { BiDownArrowAlt } from "react-icons/bi";


function UpperMain() {

    const handleClick=()=>{
        alert(123)
    }
    
    return (
        <>
               <div className='flex_upper'>
                   
                            <div>
                                    <p className='upperrounded'>UG <ImCross className='cross' onClick={handleClick}/></p>
                            </div>
                            <div>
                                    <p className='upperrounded'>Science <ImCross className='cross' onClick={handleClick}/></p>
                            </div>
                            <div>
                                    <p className='upperrounded'>M S Ramaiah University <ImCross className='cross' onClick={handleClick}/></p>
                            </div>
                            <div>
                                    <p className='upperrounded'>Private <ImCross className='cross' onClick={handleClick}/></p>
                            </div>
                            <div>
                                    <p className='upperroundedclearall'>Clear All</p>
                            </div>
                            
                            <div className='az'>
                                   <p>A-Z <BiDownArrowAlt/></p>
                            </div>   
               </div>

     {/* <div className='flexs'>

               <div className='first_flex'>
                              <p className='upperrounded'>UG <ImCross className='cross' onClick={handleClick}/></p>  
                              <p className='upperrounded'>Science <ImCross className='cross' onClick={handleClick}/></p>
                              <p className='upperrounded'>M S Ramaiah University <ImCross className='cross' onClick={handleClick}/></p>
                              <p className='upperrounded'>Private <ImCross className='cross' onClick={handleClick}/></p>
                              <p className='upperroundedclearall'>Clear All</p>

               </div>


               <div className='az'>
                                   <p>A-Z <BiDownArrowAlt/></p>
               </div>  


     </div> */}



        </>
    )
}

export default UpperMain
