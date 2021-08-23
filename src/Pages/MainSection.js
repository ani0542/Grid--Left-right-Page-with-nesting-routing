// import React, { useEffect, useState } from 'react'
// import testimonials1 from "../assets/t1.jpg"
// import {data} from "../Component/constant/InfoConstant"
// import { FaPhoneAlt } from 'react-icons/fa';
// import { AiOutlineGlobal } from "react-icons/ai";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { Scrollbars } from 'react-custom-scrollbars';
// import { times } from "lodash";
// import SearchBox from '../Component/SearchBox';
// import {SIZE} from "../Component/constant/ConstantSize"
// import LowerMain from './LowerMain';
// import UpperMain from './UpperMain';



// function MainSection() {

    // const[toggle,setToggle] = useState(false)
    // const [value, setValue] = React.useState('');
    // const [list,setList] = useState(SIZE)
   

    //         const handleClick =()=>{
    //             setToggle(!toggle)
    //         }

    //         const handleChange = (event) => {
    //             setValue(event.target.value);
    //         };

    //            const onSearch = (key) => {
    //             const filteredCVC = SIZE.filter((o) =>
    //                strContainsMatch(o, key)
    //             );
    //             setList(filteredCVC);
    //           };
                  
    //           const strContainsMatch = (slookfor, key) => {
    //             // console.log(slookfor, key);
    //             return slookfor.value.includes(key);
    //           };
                  
//     return (
//         <>
//                        <div class="rows mt-5">
//                             <div class="side">
                                //        {times( 4, num => (
                                //              <>    
                                //                        <div 
                                // //    className={toggle ? "top-box top-box-a" : className }     
                                //          className="top-box top-box-a"        
                                // >
                                //                                <div className='side_first'>
                                //                                         <h5 className='select_district'>Select District </h5>
                                //                                         <h5 className='select_district' style={{cursor:"pointer"}} onClick={handleClick}>-</h5>
                                //                                 </div>
                                                
                                //               {/* {
                                //                   toggle ? (
                                //                       <> */}

                                //                                 <div className='input_wrapp'>
                                //                                                <SearchBox
                                //                                                   searchFun={onSearch}
                                //                                                />
                                //                                 </div>
                                //                              {/* <Scrollbars 
                                //                              autoHide={false}
                                //                              autoHeight={true}
                                //                              autoHeightMin={500}
                                //                              autoHeightMax={600}
                                                             
                                //                              > */}
                                                            
                                //                                 <div
                                //                                      className='scroll_top'
                                //                                 >
                                //                                      <FormControl component="fieldset"
                                                                       
                                //                                      >
                                                                    
                                //                                         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                //                                                {list.map(datum => (
                                //                                                 <FormControlLabel
                                //                                                     label={datum.value}
                                //                                                     key={datum.id}
                                //                                                     value={datum.value}
                                //                                                     control={<Radio color="primary" />}
                                //                                                 />
                                //                                                 ))}
                                //                                         </RadioGroup>
                                //                                     </FormControl>
                                //                                 </div>
                                //                             {/* </Scrollbars> */}
                                //                       {/* </>
                                //                   ):""
                                //               } */}
                                                 
                                //     </div>
                                //              </>
                                //         ) ) }

                                   

//                             </div>
      
//                             <div class="main">
//                                      <UpperMain/>
//                                      <LowerMain data={data}/>
//                             </div>
//                     </div>
//         </>
//     )
// }

// export default MainSection









import React, { useEffect, useState } from 'react'
import testimonials1 from "../assets/t1.jpg"
import {data} from "../Component/constant/InfoConstant"
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Scrollbars } from 'react-custom-scrollbars';
import { times } from "lodash";
import SearchBox from '../Component/SearchBox';
import {SIZE} from "../Component/constant/ConstantSize"
import LowerMain from './LowerMain';
import UpperMain from './UpperMain';

function MainSection() {

     const[toggle,setToggle] = useState(false)
    const [value, setValue] = React.useState('');
    const [list,setList] = useState(SIZE)
    const [design,setDesign] = useState('top_box_unfilled')

   

            const handleClick =()=>{
                setToggle(!toggle)
                // alert('123')
            }

            const handleChange = (event) => {
                setValue(event.target.value);
            };

               const onSearch = (key) => {
                const filteredCVC = SIZE.filter((o) =>
                   strContainsMatch(o, key)
                );
                setList(filteredCVC);
              };
                  
              const strContainsMatch = (slookfor, key) => {
                return slookfor.value.includes(key);
              };


    return (
        <div>
                       <section class="top-container container mt-5">
                               

                                <div >
                                       {times( 5, num => (
                                             <>    
                                                       <div 
                                  
                                             className={toggle ? "top-box top-box-a" : design}       
                                >
                                                               <div className='side_first'>
                                                                        <h5 className='select_district'>Select District </h5>
                                                                        <h5 className='select_district' style={{cursor:"pointer"}} onClick={handleClick}>-</h5>
                                                                </div>
                                                
                                             
                                                     {
                                                         toggle ? (
                                                             <>
                                                                      <div className='input_wrapp'>
                                                                               <SearchBox
                                                                                  searchFun={onSearch}
                                                                               />
                                                                       </div>
                                                                       <div
                                                                        className='scroll_top'
                                                                >
                                                                     <FormControl component="fieldset"
                                                                       
                                                                     >
                                                                    
                                                                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                                               {list.map(datum => (
                                                                                <FormControlLabel
                                                                                    label={datum.value}
                                                                                    key={datum.id}
                                                                                    value={datum.value}
                                                                                    control={<Radio color="primary" />}
                                                                                />
                                                                                ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                </div>
                                                             </>
                                                         ):""
                                                     }
                                                                
                                                             {/* <Scrollbars 
                                                             autoHide={false}
                                                             autoHeight={true}
                                                             autoHeightMin={500}
                                                             autoHeightMax={600}
                                                             
                                                             > */}
                                                            
                                                                {/* <div
                                                                     className='scroll_top'
                                                                >
                                                                     <FormControl component="fieldset"
                                                                       
                                                                     >
                                                                    
                                                                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                                               {list.map(datum => (
                                                                                <FormControlLabel
                                                                                    label={datum.value}
                                                                                    key={datum.id}
                                                                                    value={datum.value}
                                                                                    control={<Radio color="primary" />}
                                                                                />
                                                                                ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                </div> */}
                                                            {/* </Scrollbars> */}
                                                      {/* </>
                                                  ):""
                                              } */}
                                                 
                                    </div>
                                             </>
                                        ) ) }

                                </div>

                                

                               <header class="showcase">
                                       
                                         <UpperMain/>
                                         <LowerMain data={data}/>
                                </header>
                     </section>
        </div>
    )
}

export default MainSection



