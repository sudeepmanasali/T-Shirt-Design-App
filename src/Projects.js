import React ,{Component} from 'react'
import ProjectLists from './ProjectsList'
import { connect } from 'react-redux'

class Project extends Component{
    render(){
       const {designs} = this.props;
        return(
            <div className="container mb-5">
                <div  className="row">
                    <div className="project-list">
                       {designs && designs.map(design=>{
                           return(
                            <ProjectLists design={design} key={design.id} />

                       )
                       })}
                       
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateProps = (state) =>{
    return{
        designs: state.design.designs
    }
}
export default connect(mapStateProps)(Project)