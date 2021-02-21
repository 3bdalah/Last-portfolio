import React from 'react'
import Title from "./Title";
// import Me from "../../public/img/me.jpg";
import Me from "../img/me.jpg";
const About = () => {
    return (
        <section className="about text-center">
            <div className="container">
              <Title title={"about"}/>
                <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="img">
                        <img src={Me} alt="my-img"/>
                    </div>
                   </div>
                <div className="col-lg-9 col-md-8 col-sm-12 m-auto">
                    <div className="description">
                        <p className="desc-content">I'm a software Engineer who is passionate about creating new things, And i'm really big fan to linux.and I care about performance, code efficiency, and the user experience Some technologies I enjoy working with include Javascript, ReactJS, And other <strong>frontend </strong>stuff🤓. </p>
                    </div>
                   </div>
                 
                   
                </div>
            </div>
        </section>
    )
}

export default About;