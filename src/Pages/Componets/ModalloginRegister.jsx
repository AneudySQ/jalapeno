import React from 'react'
import { Loginmodal } from './Loginmodal'
import { Registermodal } from './Registermodal'

export const Modalloginregister = () => {
    return (
        <>
            {/* Login modal */}
            <Loginmodal />
            {/* End modal */}

            {/* Register modal */}
            <Registermodal />
            {/* End Register modal */}
        </>
    )
}
