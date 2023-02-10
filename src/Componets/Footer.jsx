import React from 'react'

export const Footer = () => {
  return (
    <div>
          {/* Footer ================================================== */}
          <footer>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4">
                          <h3>Secure payments with</h3>
                          <p>
                              <img src="assets/img/cards.png" alt="" className="img-fluid" />
                          </p>
                      </div>
                      <div className="col-md-3">
                          <h3>About</h3>
                          <ul>
                              <li><a href="about.html">About us</a></li>
                              <li><a href="faq.html">Faq</a></li>
                              <li><a href="contacts.html">Contacts</a></li>
                              <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
                              <li><a href="#0" data-toggle="modal" data-target="#register">Register</a></li>
                              <li><a href="#0">Terms and conditions</a></li>
                          </ul>
                      </div>
                      <div className="col-md-3" id="newsletter">
                          <h3>Newsletter</h3>
                          <p>
                              Join our newsletter to keep be informed about offers and news.
                          </p>
                          <div id="message-newsletter_2">
                          </div>
                          <form method="post" action="assets/newsletter.php" name="newsletter_2" id="newsletter_2">
                              <div className="form-group">
                                  <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your mail" className="form-control" />
                              </div>
                              <input type="submit" value="Subscribe" className="btn_1" id="submit-newsletter_2" />
                          </form>
                      </div>
                      <div className="col-md-2">
                          <h3>Settings</h3>
                          <div className="styled-select">
                              <select name="lang" id="lang">
                                  <option value="English" selected>English</option>
                                  <option value="French">French</option>
                                  <option value="Spanish">Spanish</option>
                                  <option value="Russian">Russian</option>
                              </select>
                          </div>
                          <div className="styled-select">
                              <select name="currency" id="currency">
                                  <option value="USD" selected>USD</option>
                                  <option value="EUR">EUR</option>
                                  <option value="GBP">GBP</option>
                                  <option value="RUB">RUB</option>
                              </select>
                          </div>
                      </div>
                  </div>{/* End row */}
                  <div className="row">
                      <div className="col-md-12">
                          <div id="social_footer">
                              <ul>
                                  <li><a href="#0"><i className="icon-facebook"></i></a></li>
                                  <li><a href="#0"><i className="icon-twitter"></i></a></li>
                                  <li><a href="#0"><i className="icon-google"></i></a></li>
                                  <li><a href="#0"><i className="icon-instagram"></i></a></li>
                                  <li><a href="#0"><i className="icon-pinterest"></i></a></li>
                                  <li><a href="#0"><i className="icon-vimeo"></i></a></li>
                                  <li><a href="#0"><i className="icon-youtube-play"></i></a></li>
                              </ul>
                              <p>
                                  © Quick Food 2021
                              </p>
                          </div>
                      </div>
                  </div>{/* End row */}
              </div>{/* End container */}
          </footer>
          <div class="layer"></div>

          {/* End Footer =============================================== */}


    </div>
  )
}
