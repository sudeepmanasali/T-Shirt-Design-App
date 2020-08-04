import React from 'react'

const ProjectsLists = ({design})=>{
    const imgBase = `https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt Images/${design.tshirtColor}`
console.log(imgBase)
    return(
        <div className="item text-center">
            <div className="card card-body">
                <img className="img-fluid"
src={`${imgBase}`}                
                alt="t-shirt" />
                <p>{design.name}</p>
                <button className="btn btn-primary">View Project</button>
            </div>
        </div>
    )
}

export default ProjectsLists