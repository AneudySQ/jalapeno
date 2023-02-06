import React from 'react'
import { Popularcart } from './Popularcart'

export const Topsrestaurant = () => {
    return (
        <>
            <div className="white_bg">
                <div className="container margin_60">
                    <div className="main_title">
                        <h2 className="nomargin_top">Choose from Most Popular</h2>
                        <p>
                            Cum doctus civibus efficiantur in imperdiet deterruisset.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <Popularcart/>
                            <Popularcart/>
                            <Popularcart/>
                            <Popularcart/>                        
                        </div>
                        
                        <div className="col-lg-6">
                            <Popularcart />                        
                            <Popularcart />                        
                            <Popularcart />                        
                            <Popularcart />                        
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
