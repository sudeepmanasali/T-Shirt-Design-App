import React from 'react'
import "./Display.css";

function Display({display, textFormat}) {

    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                className="img-responsive"
                src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt Images/${display.tshirtColor}.png`}
                alt="tshirt"></img> 
                <div className="memtext text-center">
                    <div className="upper-text" >
                        <p style={{fontSize:textFormat,color:display.textColor}} draggable>{display.upperText}</p>
                    </div>
                   <img 
                   className="img"
                   src={`${display.url}` || "http://via.placeholder.com/400x300"}
                   ></img>
                   <div className="lower-text">
                       <p style={{fontSize:textFormat,color:display.textColor}}>{display.lowerText}</p>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Display
