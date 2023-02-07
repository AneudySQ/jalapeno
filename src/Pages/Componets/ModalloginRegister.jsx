import React from 'react'
import { Loginmodal } from './Loginmodal'
import { Registermodal } from './Registermodal'

export const ModalloginRegister = () => {
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
