import React from 'react'

const Header = () => {
  return (
    <div>
          {/* Header ================================================== */}
          <header>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-4 col-sm-4 col-4">
                          <a href="index.html" id="logo" />
                          <img src="assets/img/logo.png" width="190" height="23" alt="" className="d-none d-sm-block" />
                          <img src="assets/img/logo_mobile.png" width="59" height="23" alt="" className="d-block d-sm-none" />

                      </div>
                      <nav className="col-md-8 col-sm-8 col-8">
                          <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
                          <div className="main-menu">
                              <div id="header_menu">
                                  <img src="assets/img/logo.png" width="190" height="23" alt="" />
                              </div>
                              <a href="#" className="open_close" id="close_in"><i className="icon_close"></i></a>
                              <ul>
                                  <li className="submenu">
                                      <a href="javascript:void(0);" className="show-submenu">Home<i className="icon-down-open-mini"></i></a>
                                      <ul>
                                          <li><a href="index.html">Home Video background</a></li>
                                          <li><a href="index_2.html">Home Static image</a></li>
                                          <li><a href="index_3.html">Home Text rotator</a></li>
                                          <li><a href="index_8.html">Home Layer slider</a></li>
                                          <li><a href="index_4.html">Home Cookie bar</a></li>
                                          <li><a href="index_5.html">Home Popup</a></li>
                                          <li><a href="index_7.html">Top Menu version 2</a></li>
                                      </ul>
                                  </li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);" className="show-submenu">Restaurants<i className="icon-down-open-mini"></i></a>
                                      <ul>
                                          <li><a href="list_page.html">Row listing</a></li>
                                          <li><a href="grid_list.html">Grid listing</a></li>
                                          <li><a href="map_listing.html">Map listing</a></li>
                                          <li><a href="detail_page.html">Restaurant Menu</a></li>
                                          <li><a href="submit_restaurant.html">Submit Restaurant</a></li>
                                          <li><a href="cart.html">Order step 1</a></li>
                                          <li><a href="cart_2.html">Order step 2</a></li>
                                          <li><a href="cart_3.html">Order step 3</a></li>
                                          <li><a href="cart_datepicker.html">Order Date/Time picker</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="about.html">About us</a></li>
                                  <li><a href="faq.html">Faq</a></li>
                                  <li className="submenu">
                                      <a href="javascript:void(0);" className="show-submenu">Pages<i className="icon-down-open-mini"></i></a>
                                      <ul>
                                          <li><a href="RTL_version/index.html">RTL version</a></li>
                                          <li><a href="admin.html">Admin section</a></li>
                                          <li><a href="submit_driver.html">Submit Driver</a></li>
                                          <li><a href="#0" data-toggle="modal" data-target="#login_2">User Login</a></li>
                                          <li><a href="#0" data-toggle="modal" data-target="#register">User Register</a></li>
                                          <li><a href="detail_page_2.html">Restaurant detail page</a></li>
                                          <li><a href="blog.html">Blog</a></li>
                                          <li><a href="contacts.html">Contacts</a></li>
                                          <li><a href="coming_soon/index.html">Coming soon page</a></li>
                                          <li><a href="icon_pack_1.html">Icon pack 1</a></li>
                                          <li><a href="icon_pack_2.html">Icon pack 2</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
                                  <li><a href="#0">Purchase this template</a></li>
                              </ul>
                          </div>{/* End main-menu */}
                      </nav>
                  </div>{/* End row */}
              </div>{/* End container */}
          </header>
          {/* End Header =============================================== */}

          {/* Login modal */}
          <div className="modal fade" id="login_2" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content modal-popup">
                      <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
                      <form action="#" className="popup-form" id="myLogin">
                          <div className="login_icon"><i className="icon_lock_alt"></i></div>
                          <input type="text" className="form-control form-white" placeholder="Username" />
                          <input type="text" className="form-control form-white" placeholder="Password" />
                          <div className="text-left">
                              <a href="#">Forgot Password?</a>
                          </div>
                          <button type="submit" className="btn btn-submit">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
          {/* End modal */}

          {/* Register modal */}
          <div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content modal-popup">
                      <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
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
          {/* End Register modal */}


    </div>
  )
}

export default Header
