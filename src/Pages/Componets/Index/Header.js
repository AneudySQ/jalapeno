import React from 'react'
import { MenuGeneral } from '../MenuGeneral'
import { ModalloginRegister } from '../ModalloginRegister'

const Header = () => {
    return (
        <>
            {/* Header ================================================== */}
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <MenuGeneral />
                    </div>{/* End row */}
                </div>{/* End container */}
            </header>
            {/* End Header =============================================== */}
            <ModalloginRegister />
        </>
    )
}

export default Header
