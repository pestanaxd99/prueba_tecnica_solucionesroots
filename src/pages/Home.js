import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { init } from "../utils/initPumpkin";
import { T, useSetLanguage, useCurrentLanguage } from "@tolgee/react";

function Home() {
        
    const navigate = useNavigate();

    //make a function to use the method navigate
    const navigateToInvitation = () => {
        //navigate to /invitation
        navigate('/invitation');
    };

    //initialization to translate

    //Assign language for the app
    const setLanguage = useSetLanguage()
    //Use language of the system
    const getLanguage = useCurrentLanguage()

    //Inititation to animation 3D
    useEffect(() => {
        init()
    }, [])

    return (
        <div className="App">
            <div className="hero">
                <h1 className="title uppercase"><T>page_title</T></h1>
                <p className="text"><T>secondary_text</T></p>
                <p>
                    <button onClick={() => setLanguage("en")} className="inline-block rounded-md border border-transparent bg-orange-600 m-1 mr-4 py-3 px-8 text-center font-medium text-white"
                        style={{ background: getLanguage() === "en" ? "#FF1402" : "#a7a7a7" }}
                    >
                        ENGLISH
                    </button>

                    <button onClick={() => setLanguage("es")} className="inline-block rounded-md border border-transparent bg-orange-600 m-1 py-3 px-8 text-center font-medium text-white"
                        style={{ background: getLanguage() === "es" ? "#FF1402" : "#a7a7a7" }}
                    >
                        ESPAÑOL
                    </button>
                </p>
            </div>

            <div className="pricing">
                <h1 className='uppercase'><T>our_packages</T></h1>
                <div className="pricing-table">
                    <div className="pricing-card">
                        <p className="title"><T>card_text_stan_title</T></p>
                        <p className="info"><T>card_text_stan</T></p>
                        <button className="btn" onClick={navigateToInvitation}><T>text_buy</T></button>
                    </div>
                    <div className="pricing-card">
                        <p className="title"><T>card_text_prem_title</T></p>
                        <p className="info"><T>card_text_prem</T></p>
                        <button className="btn" onClick={navigateToInvitation}><T>text_buy</T></button>
                    </div>
                    <div className="pricing-card">
                        <p className="title"><T>card_text_vip_title</T></p>
                        <p className="info"><T>card_text_vip</T></p>
                        <button className="btn" onClick={navigateToInvitation}><T>text_buy</T></button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;