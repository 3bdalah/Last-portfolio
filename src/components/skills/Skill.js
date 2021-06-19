import React from 'react'

const Skill = ({id,img,text}) => {
    return (
        <>
           <div className="skill">
            <div className="box-img">
                <img src={img} alt="pctr"/>
                
            </div>
            <p className="name-skill">{text}</p>
           </div>
        </>
    )
}
export default Skill;