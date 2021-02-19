import React from 'react'
import uuid from 'react-uuid'

const ProjectItem = ({img,title,desc,skills,git,demo}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
           
            <div className="project">
            <a href={demo} target="blank">
               <img src={img} alt="Project Academy "/>
               </a>
               <h3 className="title-project">{title}</h3>
               <p className="desc">{desc}</p>
               {skills.map(item => {
                   return (
                       <p key={uuid()} className={`skill ${item}`} >{item}</p>
                   )
               })}
                <br/>
                   <div className="group-btn">
                        <a href={demo} target="blank"  className="live">live</a>
                        <a href={git} target="blank"  className="github">Source code</a>
                   </div>
            </div>
          
        </div>
    )
}
export default ProjectItem;