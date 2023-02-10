import React from 'react'

export const Loginmodal = () => {
    return (
        <>
            <div className="modal fade" id="login_2" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-popup">
                        <button href="#" className="close-link"><i className="icon_close_alt2"></i></button>
                        <form action="#" className="popup-form" id="myLogin">
                            <div className="login_icon"><i className="icon_lock_alt"></i></div>
                            <input type="text" className="form-control form-white" placeholder="Username" />
                            <input type="text" className="form-control form-white" placeholder="Password" />
                            <div className="text-left">
                                <button href="#">Forgot Password?</button>
                            </div>
                            <button type="submit" className="btn btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
