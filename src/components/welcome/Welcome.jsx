import React, { useEffect, useState } from "react";
import "./Welcome.css";

const Welcome = ({ isOpen, setIsOpen }) => {
  const [textAreaText, setTextAreaText] = useState("");
  const [regular, setRegular] = useState(true);
  const [pre, setPre] = useState(false);
  const [selected, setSelected] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState(true);
  const [imgOption, setImgOption] = useState(false);
  const [videoOption, setVideoOption] = useState(false);
  const [docOption, setDocOption] = useState(false);
  const handleChecked = (value) => {
    if (value === "notRegular") {
      setPre(true);
      setRegular(false);
      return;
    }
    if (value === "regular") {
      setPre(false);
      setRegular(true);
      return;
    }
  };
  const handleSelected = (value) => {
    if (value === "pre-written") {
      setSelected(
        " Hi, please find details in attached pdf as discussed over call and click on demo link to explore demo. id :demopassword : 1289 Thank You"
      );
    }
  };
  const handleRegularOption = (value) => {
    if (value === "text") {
      setText(true);
      setImgOption(false);
      setVideoOption(false);
      setDocOption(false);
    }
    if(value === "image"){
      setText(false)
      setImgOption(true)
      setVideoOption(false)
      setDocOption(false)
    }
    if(value === "video"){
      setText(false)
      setImgOption(false)
      setVideoOption(true)
      setDocOption(false)
    }
    if(value === "doc"){
      setText(false)
      setImgOption(false)
      setVideoOption(false)
      setDocOption(true)
    }
  };
  useEffect(() => {
    if(isOpen){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }
    return () => document.body.style.overflow = "auto"
  },[isOpen])
  if (!isOpen) return;
  return (
    <div className="welcome-container" onClick={() => setIsOpen(false)}>
      <div className="welcome" onClick={(e) => e.stopPropagation()}>
        <header>
          <p>Configure Welcome Message</p>
          <p style={{cursor:"pointer"}} onClick={() => setIsOpen(false)}>X</p>
        </header>

        <div className="message">
          <div className="write-message-wrapper">
            <div className="write-message">
              <div className="message-type">
                <input
                  type="checkbox"
                  id="pre"
                  checked={pre}
                  onChange={() => handleChecked("notRegular")}
                />
                <label htmlFor="pre">Pre-approved template message</label>
              </div>
              <div className="message-type">
                <input
                  type="checkbox"
                  id="regular"
                  checked={regular}
                  onChange={() => handleChecked("regular")}
                />
                <label htmlFor="regular">Regular message</label>
              </div>
            </div>

            {pre && (
              <>
                <div className="template">
                  <p>Template Name</p>
                  <select onClick={(e) => handleSelected(e.target.value)}>
                    <option value="">Select</option>
                    <option value="pre-written">
                      Hi, please find details in attached pdf as discussed over
                      call and click on demo link to explore demo. id :demo
                      password : 1289 Thank You
                    </option>
                  </select>
                </div>

                <div className="upload">
                  <p>Upload Media File</p>
                  <h3>
                    Supported file type : <span>.png or .jpeg</span>
                  </h3>
                  <h3>
                    Maximum file size : <span>5 MB</span>
                  </h3>
                  <div className="upload-file">
                    <label htmlFor="file">Upload From Media Library</label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const fileUrl = URL.createObjectURL(file);
                          setImageUrl(fileUrl);
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="url">
                  <p>or</p>
                  <h3>Media URL</h3>
                  <input
                    type="text"
                    placeholder="enter your url"
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <button className="add-variable">Add Variable</button>
                <div className="name-and-value">
                  <p>Values</p>
                  <div className="add-variables">
                    <div className="variable">
                      <label htmlFor="variable">Variable name</label>
                      <input
                        type="text"
                        id="variable"
                        placeholder="please enter variable"
                      />
                    </div>
                    <div className="variable">
                      <label htmlFor="value">Value</label>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder="enter your value"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {regular && (
              <>
                <div className="message-format">
                  <p>Type</p>
                  <div className="types">
                    <div className="message-type">
                      <input
                        type="checkbox"
                        checked={text}
                        onChange={() => handleRegularOption("text")}
                      />
                      <label>Text</label>
                    </div>
                    <div className="message-type">
                      <input
                        type="checkbox"
                        checked={imgOption}
                        onChange={() => handleRegularOption("image")}
                      />
                      <label>Image</label>
                    </div>
                    <div className="message-type">
                      <input
                        type="checkbox"
                        checked={videoOption}
                        onChange={() => handleRegularOption("video")}
                      />
                      <label>Video</label>
                    </div>
                    <div className="message-type">
                      <input
                        type="checkbox"
                        checked={docOption}
                        onChange={() => handleRegularOption("doc")}
                      />
                      <label>Document</label>
                    </div>
                  </div>
                </div>
                <div className="area">
                  <p>Message Body *</p>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter your message here"
                    type={textAreaText}
                    onChange={(e) => setTextAreaText(e.target.value)}
                  ></textarea>
                </div>
              </>
            )}
               {regular && (imgOption || videoOption || docOption) && (
            <>
              <div className="upload">
                <p>Upload Media File</p>
                <h3>
                  Supported file type : <span>.png or .jpeg</span>
                </h3>
                <h3>
                  Maximum file size : <span>5 MB</span>
                </h3>
                <div className="upload-file">
                  <label htmlFor="file">Upload From Media Library</label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const fileUrl = URL.createObjectURL(file);
                        setImageUrl(fileUrl);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="url">
                <p>or</p>
                <h3>Media URL</h3>
                <input
                  type="text"
                  placeholder="enter your url"
                  value={imageUrl}
                />
              </div>
              <button className="add-variable">Add Variable</button>
              <div className="name-and-value">
                <p>Values</p>
                <div className="add-variables">
                  <div className="variable">
                    <label htmlFor="variable">Variable name</label>
                    <input
                      type="text"
                      id="variable"
                      placeholder="please enter variable"
                    />
                  </div>
                  <div className="variable">
                    <label htmlFor="value">Value</label>
                    <input
                      type="text"
                      name="value"
                      id="value"
                      placeholder="enter your value"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          </div>
          {pre && (
            <div className="show-message">
              <div className="show-message-type">
                {imageUrl && <img className="image-url" src={imageUrl} />}
                <p>{selected}</p>
                <img
                  src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745650852/V-social_icon_chat_zkmjkm.png"
                  alt=""
                />
              </div>
            </div>
          )}

          {regular && (text || imgOption || videoOption || docOption) && (
            <div className="show-message">
              <div className="show-message-type">
              {imageUrl && <img className="image-url" src={imageUrl} />}
                <p>{textAreaText}</p>
                <img
                  src="https://res.cloudinary.com/dlmwurg10/image/upload/v1745650852/V-social_icon_chat_zkmjkm.png"
                  alt=""
                />
              </div>
            </div>
          )}
       
        </div>

        <div className="save-and-cancle-button">
          <button className="button-1">Cancel</button>
          <button className="button-2">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
