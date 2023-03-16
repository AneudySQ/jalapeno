import React from 'react'
import DasboardWapper from './DasboardWapper'

const Depuravionhtml = () => {
    return (
        <DasboardWapper>


            <div className="container margin_60">
                <div id="tabs" className="tabs">
                    <nav>
                        <ul>
                            <li><a href="#section-1" className="icon-profile"><span>Main info</span></a>
                            </li>
                            <li><a href="#section-2" className="icon-menut-items"><span>Menu</span></a>
                            </li>
                            <li><a href="#section-3" className="icon-settings"><span>Settings</span></a>
                            </li>
                        </ul>
                    </nav>
                    <div className="content">

                        <section id="section-1">
                            <div className="indent_title_in">
                                <i className="icon_house_alt"></i>
                                <h3>General restaurant description</h3>
                                <p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
                            </div>

                            <div className="wrapper_indent">
                                <div className="form-group">
                                    <label>Restaurant name</label>
                                    <input className="form-control" name="restaurant_name" id="restaurant_name" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Restaurant description</label>
                                    <textarea className="wysihtml5 form-control" placeholder="Enter text ..." style={{ height: "200px" }}></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Telephone</label>
                                            <input type="text" id="Telephone" name="Telephone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" id="Email" name="Email" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="styled_2" />

                            <div className="indent_title_in">
                                <i className="icon_pin_alt"></i>
                                <h3>Address</h3>
                                <p>
                                    Mussum ipsum cacilds, vidis litro abertis.
                                </p>
                            </div>
                            <div className="wrapper_indent">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <select className="form-control" name="country" id="country">
                                                <option value="selected" >Select your country</option>
                                                <option value="Europe">Europe</option>
                                                <option value="United states">United states</option>
                                                <option value="Asia">Asia</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Street line 1</label>
                                            <input type="text" id="street_1" name="street_1" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Street line 2</label>
                                            <input type="text" id="street_2" name="street_2" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" id="city_booking" name="city_booking" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>State</label>
                                            <input type="text" id="state_booking" name="state_booking" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Postal code</label>
                                            <input type="text" id="postal_code" name="postal_code" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="styled_2" />
                            <div className="indent_title_in">
                                <i className="icon_images"></i>
                                <h3>Logo and restaurant photos</h3>
                                <p>
                                    Mussum ipsum cacilds, vidis litro abertis.
                                </p>
                            </div>

                            <div className="wrapper_indent add_bottom_45">
                                <div className="form-group">
                                    <label>Upload your restaurant logo</label>
                                    <div id="logo_picture" className="dropzone">
                                        <input name="file" type="file" />
                                        <div className="dz-default dz-message"><span>Click or Drop Images Here</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Upload your restaurant photos</label>
                                    <div id="photos" className="dropzone">
                                        <input name="file" type="file" multiple />
                                        <div className="dz-default dz-message"><span>Click or Drop Images Here</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="styled_2" />
                            <div className="wrapper_indent">
                                <button className="btn_1">Save now</button>
                            </div>

                        </section>

                        <section id="section-2">
                            <div className="indent_title_in">
                                <i className="icon_document_alt"></i>
                                <h3>Edit menu list</h3>
                                <p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
                            </div>

                            <div className="wrapper_indent">
                                <div className="form-group">
                                    <label>Menu Category</label>
                                    <input type="text" name="menu_category" className="form-control" placeholder="EX. Starters" />
                                </div>

                                <div className="menu-item-section clearfix">
                                    <h4>Menu item #1</h4>
                                    <div><a href="#0"><i className="icon_plus_alt"></i></a><a href="#0"><i className="icon_minus_alt"></i></a>
                                    </div>
                                </div>

                                <div className="strip_menu_items">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="menu-item-pic dropzone">
                                                <input name="file" type="file" />
                                                <div className="dz-default dz-message"><span>Click or Drop<br />Images Here</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label>Title</label>
                                                        <input type="text" name="menu_item_title" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Price</label>
                                                        <input type="text" name="menu_item_title_price" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Short description</label>
                                                <input type="text" name="menu_item_description" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label>Item options</label>
                                                <div className="table-responsive">
                                                    <table className="table table-striped edit-options">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $3.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Medium" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_1" checked className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_1" className="icheck" value="radio" />Radio</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $5.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Large" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_2" className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_2" className="icheck" value="radio" checked />Radio</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Item ingredients</label>
                                                <div className="table-responsive">
                                                    <table className="table table-striped notifications">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $2.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Extra tomato" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_3" checked className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_3" className="icheck" value="radio" />Radio</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $5.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Extra Pepper" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_4" className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_4" className="icheck" value="radio" checked />Radio</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="menu-item-section clearfix">
                                    <h4>Menu item #2</h4>
                                    <div><a href="#0"><i className="icon_plus_alt"></i></a><a href="#0"><i className="icon_minus_alt"></i></a>
                                    </div>
                                </div>

                                <div className="strip_menu_items">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="menu-item-pic dropzone">
                                                <input name="file" type="file" />
                                                <div className="dz-default dz-message"><span>Click or Drop<br />Images Here</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label>Title</label>
                                                        <input type="text" name="menu_item_title" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Price</label>
                                                        <input type="text" name="menu_item_title_price" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Short description</label>
                                                <input type="text" name="menu_item_description" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label>Item options</label>
                                                <div className="table-responsive">
                                                    <table className="table table-striped notifications">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $3.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Medium" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_5" checked className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_5" className="icheck" value="radio" />Radio</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $5.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Large" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_7" className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_7" className="icheck" value="radio" checked />Radio</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Item ingredients</label>
                                                <div className="table-responsive">
                                                    <table className="table table-striped notifications">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $2.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Extra tomato" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_8" checked className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_8" className="icheck" value="radio" />Radio</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $5.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Extra Pepper" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_9" className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_9" className="icheck" value="radio" checked />Radio</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="styled_2" />

                            <div className="wrapper_indent">
                                <div className="form-group">
                                    <label>Menu Category</label>
                                    <input type="text" name="menu_category" className="form-control" placeholder="EX. Main courses" />
                                </div>

                                <div className="menu-item-section clearfix">
                                    <h4>Menu item #1</h4>
                                    <div><a href="#0"><i className="icon_plus_alt"></i></a><a href="#0"><i className="icon_minus_alt"></i></a>
                                    </div>
                                </div>

                                <div className="strip_menu_items">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="menu-item-pic dropzone">
                                                <input name="file" type="file" />
                                                <div className="dz-default dz-message"><span>Click or Drop<br />Images Here</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label>Title</label>
                                                        <input type="text" name="menu_item_title" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Price</label>
                                                        <input type="text" name="menu_item_title_price" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Short description</label>
                                                <input type="text" name="menu_item_description" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label>Item options</label>
                                                <div className="table-responsive">
                                                    <table className="table table-striped notifications">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $3.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Medium" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_10" checked className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_10" className="icheck" value="radio" />Radio</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $5.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Large" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_11" className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_11" className="icheck" value="radio" checked />Radio</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Item ingredients</label>
                                                <div className="table-responsive">
                                                    <table className="table table-striped notifications">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $2.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Extra tomato" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_12" checked className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_12" className="icheck" value="radio" />Radio</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "20%" }}>
                                                                    <input type="text" className="form-control" placeholder="+ $5.50" />
                                                                </td>
                                                                <td style={{ width: "50%" }}>
                                                                    <input type="text" className="form-control" placeholder="Ex. Extra Pepper" />
                                                                </td>
                                                                <td style={{ width: "30%" }}>
                                                                    <label>
                                                                        <input type="radio" name="option_item_settings_13" className="icheck" value="checkbox" />Checkbox</label>
                                                                    <label className="margin_left">
                                                                        <input type="radio" name="option_item_settings_13" className="icheck" value="radio" checked />Radio</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="styled_2" />

                            <div className="wrapper_indent">
                                <div className="add_more_cat"><a href="#0" className="btn_1">Save now</a> <a href="#0" className="btn_1">Add menu category</a> </div>
                            </div>

                        </section >

                        <section id="section-3">

                            <div className="row">

                                <div className="col-md-6 col-sm-6 add_bottom_15">
                                    <div className="indent_title_in">
                                        <i className="icon_lock_alt"></i>
                                        <h3>Change your password</h3>
                                        <p>
                                            Mussum ipsum cacilds, vidis litro abertis.
                                        </p>
                                    </div>
                                    <div className="wrapper_indent">
                                        <div className="form-group">
                                            <label>Old password</label>
                                            <input className="form-control" name="old_password" id="old_password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label>New password</label>
                                            <input className="form-control" name="new_password" id="new_password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm new password</label>
                                            <input className="form-control" name="confirm_new_password" id="confirm_new_password" type="password" />
                                        </div>
                                        <button type="submit" className="btn_1 green">Update Password</button>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 add_bottom_15">
                                    <div className="indent_title_in">
                                        <i className="icon_mail_alt"></i>
                                        <h3>Change your email</h3>
                                        <p>
                                            Mussum ipsum cacilds, vidis litro abertis.
                                        </p>
                                    </div>
                                    <div className="wrapper_indent">
                                        <div className="form-group">
                                            <label>Old email</label>
                                            <input className="form-control" name="old_email" id="old_email" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>New email</label>
                                            <input className="form-control" name="new_email" id="new_email" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm new email</label>
                                            <input className="form-control" name="confirm_new_email" id="confirm_new_email" type="email" />
                                        </div>
                                        <button type="submit" className="btn_1 green">Update Email</button>
                                    </div>
                                </div>

                            </div>

                            <hr className="styled_2" />

                            <div className="indent_title_in">
                                <i className="icon_shield"></i>
                                <h3>Notification settings</h3>
                                <p>
                                    Mussum ipsum cacilds, vidis litro abertis.
                                </p>
                            </div>
                            <div className="row">

                                <div className="col-md-6 col-sm-6">
                                    <div className="wrapper_indent">
                                        <table className="table table-striped notifications">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "5%" }}>
                                                        <i className="icon_pencil-edit_alt"></i>
                                                    </td>
                                                    <td style={{ width: "65%" }}>
                                                        New orders
                                                    </td>
                                                    <td style={{ width: "35%" }}>
                                                        <label>
                                                            <input type="checkbox" name="option_1_settings" checked className="icheck" value="yes" />Yes</label>
                                                        <label className="margin_left">
                                                            <input type="checkbox" name="option_1_settings" className="icheck" value="no" />No</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="icon_pencil-edit_alt"></i>
                                                    </td>
                                                    <td>
                                                        Modified orders
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <input type="checkbox" name="option_2_settings" checked className="icheck" value="yes" />Yes</label>
                                                        <label className="margin_left">
                                                            <input type="checkbox" name="option_2_settings" className="icheck" value="no" />No</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="icon_pencil-edit_alt"></i>
                                                    </td>
                                                    <td>
                                                        New user registration
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <input type="checkbox" name="option_3_settings" checked className="icheck" value="yes" />Yes</label>
                                                        <label className="margin_left">
                                                            <input type="checkbox" name="option_3_settings" className="icheck" value="no" />No</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="icon_pencil-edit_alt"></i>
                                                    </td>
                                                    <td>
                                                        New comments
                                                    </td>
                                                    <td>
                                                        <label>
                                                            <input type="checkbox" name="option_4_settings" checked className="icheck" value="yes" />Yes</label>
                                                        <label className="margin_left">
                                                            <input type="checkbox" name="option_4_settings" className="icheck" value="no" />No</label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button type="submit" className="btn_1 green">Update notifications settings</button>
                                    </div>

                                </div>
                            </div>

                        </section>

                    </div >
                </div >
            </div >







        </DasboardWapper >
    )
}

export default Depuravionhtml




