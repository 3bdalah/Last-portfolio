import React from 'react'

const Skill = ({id,img}) => {
    return (
        <>
           <div className="skill">
            <div className="box-img">
                <img src={img} alt="pctr"/>
            </div>
           </div>
        </>
    )
}
export default Skill;