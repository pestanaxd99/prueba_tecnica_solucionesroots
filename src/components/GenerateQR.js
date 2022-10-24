import React, { useEffect } from 'react';
import { init } from "../utils/RobotExpressive";
import QRCode from "react-qr-code";
import { T } from "@tolgee/react";

function GenerateQR() {
    
    //Inititation to animation 3D
    useEffect(() => {
        init()
    }, [])

    //Value for QR CODE
    let value = 'This is a invitation code';
    
    return (
        <div className='qr-code mx-auto max-w-7xl px-4 sm:mt-1 mb-8 sm:px-6 md:mt-16 mb-16 lg:mt-10 mb-10 lg:px-8 xl:mt-1 mb-28'>
            <p className='text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl uppercase text-5xl text-center text-orange-600'>
                <T>title_generateqr</T>
            </p>
            <div className='align-center mt-10'>
                <QRCode
                    size={256}
                    style={{ height: "200px", maxWidth: "100%", width: "100%" }}
                    value={value}
                    viewBox={`0 0 256 256`}
                />
            </div>
        </div>
    )
}

export default GenerateQR;