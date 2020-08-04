import React from 'react'
import './Display.css';
const urlImgBase="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt Images/";

function Settings({color, upperText, lowerText, uploadImage, textSize, textColor, saveDesign}) {
    return (
     <div className="card bg-light container">
         <h2 className="text-center">
             Settings
         </h2>
         <h4>Change tshirt Color</h4>
         <div className="tshirt-color">
             <img className="timg" onClick={color} src={`${urlImgBase}white.png`} alt="white-tshirt" id="white"></img>
             <img className="timg" onClick={color} src={`${urlImgBase}black.png`} alt="black-tshirt" id="black"></img>
             <img className="timg"  onClick={color} src={`${urlImgBase}grey.png`} alt="gray-tshirt" id="grey"></img>
             <img className="timg" onClick={color} src={`${urlImgBase}blue.png`} alt="blue-tshirt" id="blue"></img>
             <img className="timg" onClick={color} src={`${urlImgBase}red.png`} alt="red-tshirt" id="red" ></img>
         </div>
         <br></br>
         <h4>Write Text</h4>
         <input type="text" onChange={upperText} className="form-control form-control-sm mb-2" placeholder="Upper-text"></input>
         <input type="text" onChange={lowerText} className="form-control form-control-sm mb-2" placeholder="Lower-text"></input>
         <br />
         <h4>Upload the image</h4>
         <div className="fomr-group">
            <input className="form-control mb-2"  onChange={uploadImage} type="file"></input>
         </div>
         <br></br>
         <h4>Text Size</h4>
         <input onChange={textSize} type="range"  min="12" max="34" />
         <br />
         <h4>Text Color</h4>
         <select onChange={textColor} className="form-control mb-2">
              <option>White</option>
              <option>Red</option>

              <option>Blue</option>

              <option>orange</option>

         </select>
         <br/>
         <button className="btn btn-primary btn-lg" id="saveDesign" onClick={saveDesign}>Save</button>
     </div>
    )
}

export default Settings
