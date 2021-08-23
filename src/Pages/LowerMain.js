import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";

function LowerMain({ data }) {
    return (
        <>
            {
                data.map((value) => {
                    return (
                        <>
                            <div class="fakeimg">
                                <div className='card_wrapper'>
                                    <h6>{value.college}</h6>
                                    <div className='futureshowsrounded'>
                                        <p>{value.tab_green}</p>
                                    </div>
                                </div>
                                <p className='text-muted muted_location'>{value.location}</p>
                                <div className='card_wrapper_content'>

                                    {/* <div className='flex_affil'> */}
                                        <h6 className='affil'>{value.affiliated}</h6>

                                        <h6 className='college'>{value.typecollege}</h6>
                                    {/* </div> */}

                                    <div className='side_btn'>
                                        <a href="#section-b" class="btns website"><AiOutlineGlobal className='globalicon' />Website</a>
                                        <a href="#section-b" class="btnd contact"><FaPhoneAlt className='phoneicon' />contact</a>
                                    </div>
                                </div>

                                <h6 className='course'>{value.courseoffered}</h6>
                                <h6 className='view'>{value.details}</h6>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default LowerMain
