import React, { useEffect, useState } from 'react'
import { Icon, Modal } from 'semantic-ui-react';
// import Magnifier from "react-magnifier";


function InstructorModal(props) {

    const { isOpen, data, onClose } = props;

    const [images, setImages] = useState( null );

    // console.log(isOpen)
    // console.log(data)

    // useEffect(()=>{
    //     setImages(data)
    // },[data])

    // console.log(images)
    
    return (
        <>
                <Modal
                    basic
                    data-testid="image-modal"
                    // className={ joinClsx( styles.container, "image-modal" ) }
                    open={ isOpen }
                    onClose={ onClose }
                  >
            {/* //className={ styles.content } */}
            <Modal.Content>
                <span>
                    <span ></span>
                    <span>
                        <Icon
                            name="close"
                            link
                            size="big"
                            onClick={ onClose }
                        />
                    </span>
                </span>
                <span className="flex ai-c jc-c">
                    {/* <Icon
                        name="chevron left"
                        size="big"
                        link
                    // onClick={ handleActiveIndexChange( -1 ) }
                    /> */}

                    {/* <Magnifier
                        src={ data }
                        width="auto"
                        className={ joinClsx( styles.magnifier, styles.center ) }
                    /> */}
                    <img src={data} />
                    {/* <Icon
                        name="chevron right"
                        size="big"
                        link
                    // onClick={ handleActiveIndexChange( +1 ) }
                    /> */}
                </span>
            </Modal.Content>
        </Modal>
        </>
    )
}

export default InstructorModal
