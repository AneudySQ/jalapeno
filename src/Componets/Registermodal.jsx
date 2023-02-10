import React from 'react'

export const Registermodal = () => {
    return (
        <>
            <div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-popup">
                        <button href="#" className="close-link"><i className="icon_close_alt2"></i></button>
                        <form action="#" className="popup-form" id="myRegister">
                            <div className="login_icon"><i className="icon_lock_alt"></i></div>
                            <input type="text" className="form-control form-white" placeholder="Name" />
                            <input type="text" className="form-control form-white" placeholder="Last Name" />
                            <input type="email" className="form-control form-white" placeholder="Email" />
                            <input type="text" className="form-control form-white" placeholder="Password" id="password1" />
                            <input type="text" className="form-control form-white" placeholder="Confirm password" id="password2" />
                            <div id="pass-info" className="clearfix"></div>
                            <div className="checkbox-holder text-left">
                                <div className="checkbox">
                                    <input type="checkbox" value="accept_2" id="check_2" name="check_2" />
                                    <label for="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
