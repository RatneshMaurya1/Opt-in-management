import React, { useState, useEffect } from "react";
import "./OptIn.css";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/welcome/Welcome";

const LS_KEY = "optSettings";

const OptInManagement = () => {
  const [isOpen,setIsOpen] = useState(false)
  const navigate = useNavigate()


  return (
    <div className="optin-container">
      <div className="Nav">
        <p>Opt-In Management</p>
        <div className="nav-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>

      <div className="management-wrapper">
        <div className="management">
          <p>Opt-In Management</p>
          <img
            className="image-1"
            src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745647266/84LuQ5.tif_fvz8jz.png"
            alt="images"
          />
          <img
            className="image-2"
            src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745647267/Isolation_Mode_zfl23v.png"
            alt="images"
          />
        </div>
      </div>

      <div className="opt-wrapper">
        <div className="opt">
          <div className="opt-in">
            <div className="opt-in-header">
              <img
                className="header-image"
                src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745648641/ICON_jg1eyb.png"
                alt="images"
              />
              <p>Opt-in</p>
              <h3>A text that explains what opt-in is</h3>
            </div>

            <div className="response-keyword">
              <div className="response">
                <div className="opt-in-response">
                  <div className="response-header">
                    <h3>Opt-in Response</h3>
                    <p>Setup a response message for opt-in user keywords</p>
                  </div>
                  <div className="section-header">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="Configure">
                  <img
                    className="Configure-image"
                    src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745650453/Icon_1_m0o2pr.png"
                    alt="Configure-image"
                  />
                  <button onClick={() => setIsOpen(true)}>Configure</button>
                </div>
                <div className="social">
                  <p>
                    Hi! Thanks for connecting. Someone from our team will get in
                    touch soon.
                  </p>
                  <img
                    src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745650852/V-social_icon_chat_zkmjkm.png"
                    alt="images"
                  />
                </div>
              </div>
              <div className="keyword">
                <h3>Opt-in Keywords</h3>
                <p>
                  The user will have to type exactly one of these messages on
                  which they should be automatically opted-in
                </p>
                <div className="input">
                  <input type="text" placeholder="# Add keyword" />
                  <img
                    src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745655302/add-circle_hqe7qf.png"
                    alt="images"
                  />
                </div>
                <div className="key-list">
                  <div className="item">
                    <h4>Keyword</h4>
                    <h4>X</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opt-out">
            <div className="opt-out-header">
              <img
                className="opt-out-header-image2"
                src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745652689/ICON_vhqnp1.png"
                alt="images"
              />
              <div className="explain">
                <p>Opt-out</p>
                <h3>A text that explains what opt-out is</h3>
              </div>
            </div>

            <div className="response-keyword">
              <div className="response">
                <div className="opt-in-response">
                  <div className="response-header">
                    <h3>Opt-in Response</h3>
                    <p>Setup a response message for opt-in user keywords</p>
                  </div>
                  <div className="section-header">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="Configure">
                  <img
                    className="Configure-image"
                    src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745650453/Icon_1_m0o2pr.png"
                    alt="Configure-image"
                  />
                  <button>Configure</button>
                </div>
                <div className="social">
                  <p>
                    Hi! Thanks for connecting. Someone from our team will get in
                    touch soon.
                  </p>
                  <img
                    src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745650852/V-social_icon_chat_zkmjkm.png"
                    alt="images"
                  />
                </div>
              </div>
              <div className="keyword">
                <h3>Opt-in Keywords</h3>
                <p>
                  The user will have to type exactly one of these messages on
                  which they should be automatically opted-out
                </p>
                <div className="input">
                  <input type="text" placeholder="# Add keyword" />
                  <img
                    src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745655302/add-circle_hqe7qf.png"
                    alt="images"
                  />
                </div>
                <div className="key-list">
                  <div className="item">
                    <h4>Keyword</h4>
                    <h4>X</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Welcome
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default OptInManagement;
