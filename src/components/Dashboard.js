import React, {Component} from 'react'
import Display from "./Display";
import Settings from "./Settings";
import { storage }from './firebaseConfig';
import {saveDesign} from '../saveDesignActions';
import {connect} from 'react-redux';

class Dashboard extends Component {
    state={
        tshirtColor: "black",
        upperText: "This is upper Text",
        lowerText:"this is a Lower Text",
        memImage: "",
        textSize:24,
        textColor:'white',
        url:'',
        
    }

    handleSaveDesign = (e)=>{
        if(e.target.id === 'saveDesign'){
            this.props.saveDesign(this.state)
            console.log("button clicked");
            console.log(this.state)
        }
    }

    handleTshirtColor = (e)=>{
        this.setState({tshirtColor:e.target.id});
    }

    handleUpperText = (e)=>{
        this.setState({upperText:e.target.value});
    }

    handleLowerText = (e) =>{
        this.setState({lowerText:e.target.value});
    }
    
    handleTextSize = (e) =>{
        this.setState({textSize: e.target.value})
    }
 
    formatText(){
        const size = this.state.textSize;
        return parseInt(size);
    }
    handleImageUpload = (e) =>{
        
        if(e.target.files[0]){
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) =>{
                console.log(snapshot);
            },
            
            (error) =>{
               console.log(error)
            }
            ,()=>{
                storage.ref('images').child(image.name).getDownloadURL().then(url=>{
this.setState({url});
                })
            })
        }
    }

    handleTextColor = (e) =>{
        this.setState({textColor:e.target.value})
    }
  
    render(){
    
    return (
        <div className="container py-5">
            
            <div className="row">
                <div className="col-lg-8">
                 
                  <Display display={this.state} 
                  textFormat= {this.formatText()}
                  />
                </div>
                <div className="col-lg-4">
                  <Settings 
                  color={this.handleTshirtColor} 
                  upperText={this.handleUpperText} 
                   lowerText = {this.handleLowerText} 
                   uploadImage={this.handleImageUpload} 
                   textSize={this.handleTextSize}
                   textColor={this.handleTextColor}
                   saveDesign={this.handleSaveDesign}
                  />
                </div>
            </div>
         
       
            
         
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        saveDesign: (design) => dispatch(saveDesign({design}))
        }
}

export default connect(null, mapDispatchToProps)(Dashboard)
