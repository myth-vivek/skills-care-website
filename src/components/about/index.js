import React from 'react'
import {Link} from 'react-router-dom'
import VideoModal from  '../ModalVideo'
import abimg2 from '../../images/img-1.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-img">
                            <img src={props.AbImg} alt=""/>
                            <VideoModal/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>About Us</h2>
                            </div>
                            <p>Skills & Care Greenwich is a registered charity, predominantly working with the older people within the Royal Borough of Greenwich. Since its inception in July 2013, we have successfully delivered a range of projects that have helped over 2000 service users. Skills & care Greenwich is a winner of Civic Award 2016 and Winner of Social Care Award 2016/17 in "Best Charitable Older People Initiative - South East England" category. Our mission is to improve the health and well-being of people in Greenwich by delivering the high-quality services in the community. 
We strive to make a real and lasting difference to the quality of life of local people, helping the community to CONNECT, be  
more ACTIVE, take time to REFLECT, keep on LEARNING, GIVE and CELEBRATE more often and SUPPORT each other.     
Our targeted projects promote community cohesion and increase the health & well-being of local people. </p>
                            <p> </p>
                            <div className="btns">
                                <div><Link  onClick={ClickHandler} className="theme-btn" to="/about">More About Us..</Link></div>
                            </div>
                            <div className="signature">
                                <img src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;