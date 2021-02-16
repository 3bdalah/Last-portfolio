import React , { useState}from 'react'
import skills from "../../data/skills";
import Skill from "./Skill";
import Title from "./../Title";
const Skills = () => {
    const [skill] = useState(skills);
    console.log(skill);
    return (
        <section className="skills text-center">
         
            <div className="container">
            <Title title="skills"/>
              <div className="row">
               <div className="col-md-6 col-sm-12 m-auto">
               {skill.map(item => {
                        return(
                            <Skill key={item.id} {...item}/>
                        )
                    })}
               </div>
              </div>
            </div>
        </section>
    )
}
export default Skills;