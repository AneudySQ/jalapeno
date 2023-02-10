import React from 'react'
import { NavegadorLink } from './NavegadorLink'
import { ModalloginRegister } from './ModalloginRegister'

const Header = () => {
    return (
        <>
            {/* Header ================================================== */}
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <NavegadorLink />
                    </div>{/* End row */}
                </div>{/* End container */}
            </header>
            {/* End Header =============================================== */}
            <ModalloginRegister />
        </>
    )
}

export default Header
