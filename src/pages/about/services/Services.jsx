import React from 'react'; 
import './Services.css'; 

import NavBar from "../../../components/navBar/NavBar";
// import Footer from '../../../components/footer/Footer';
import {Button} from "../../../components/interactable/button/button"; 

export default function Services(){
    return(
        < div className="services-page" >
            <NavBar/>
            <div className="services-img" id="business">
                <div className="textbox" id="textbox1">
                     <h2 className="business-header">For Business of all Sizes</h2>
                    
                    <div className="business-first">
                        <p>New business and established enterprise alike</p>
                        <p>our consultancy team is here to help you</p>
                    </div>
                    
                    <div className="points">
                        <p className = 'bold-point' id="design">Design</p>
                        <p className="bold-point" id="develop">Develop</p>
                        <p className="italic">and</p>
                        <p className="bold-point" id ="maintain">Maintain</p>
                    </div>
                    <p>Web solutions to make your business thrive online</p>
                </div>

                <div className="textbox-right" id="textbox2">
                   
                    <h3 className="smallbiz-header">For Small Business</h3>
                   
                    <div className="small-first">
                         <p className="intro">We know our small business owners work <i>hard</i><br/>
                          We provide solutions to highlight what sets you above the competition.</p>
                    </div>
                   
                    <p className="what-we-offer">For small business clients we will...</p>
                    
                    <div className = "points">
                        <p className="point">Learn your business in and out to create a solution<br/>
                         highlighting your business strengths</p>
                        
                        <p className="point">Work with you every step of the way until you're satisfied</p>
                        <p className="point">Create an online identity to suit your business goals and visions</p>   
                    </div>

                    <div className="buttons">
                        <Button>Learn More </Button> <Button>Request Quote</Button> 
                    </div>
                </div>

                <div className="textbox-right" id="textbox3">

                    <h3>Established and Growing Enterprise</h3>

                    <div className="enter-intro">
                         <p className="intro">Even established and growing business can be brought to<br/> 
                        new successes with a powerful modern online presence</p>
                    </div>
                    
                    <p className="what-we-offer">To spur growth and innovation...</p>

                    <div className = "points">
                        <p className="point">Promote transition from perspective to loyal customer</p>
                        <p className="point">Highlight the subtle and bold strengths of your business</p>
                        <p className="point">Showcase the incomparable value your company has to offer</p>
                    </div>
                    <div className="buttons">
                        <Button>Learn More</Button><Button>Request Quote</Button>
                    </div>
                </div>
            </div>

            <div className = "services-img" id="blogging">
               
                <div className="textbox" id="textBox4">
                    <h3>Artists and writers</h3>
                    <div className="intro">
                        <p className="intro">With a great platform<br/>
                         comes creativity without bounds</p>
                    </div>

                    <div className="">
                        <p>For a showcase fitting your work we ensure...</p>
                        <p>A site enhances the tone of your work</p>
                        <p>Visitors get the latest on what you're doing</p>
                        <p>To work with you to create the most fitting site <br/>
                        that your work can call home</p>
                    </div>
                </div>
                <div className="textbox-right" id="textbox5">
                    <h3>For writers</h3>
                    <div className="">
                        <p>Blogs, news, stories and everything in between<br/> 
                        need a place to live online</p>
                    </div>
                    <div className="points">
                        <p className="">Creating reader friendly sites by...</p>
                        <p className="">Smooth article navigation</p>
                        <p className="">Promoting your best and most popular work</p>
                        <p className="">Allowing reader engagement, feedback and comments</p>
                    </div>
                    <div className="buttons">
                        <Button>Learn More</Button><Button>Request Quote</Button>
                    </div>
                </div>
                <div className="textbox" id="textbox6">
                    <h3>For artists</h3>
                    <div>
                        <p className="intro">
                            For art that deserves to be seen by the world<br/>
                            Potographers, sketch artists, designers and everything in between<br/>
                            A site as inspiring as your work is only a click away 
                        </p>
                    </div>
                    <p className="">Creating an inspiring showcase for your work we can...</p>
                    <div className="">
                        <p className="">Design a site inspiried by your work</p>
                        <p className="">Create smooth navigation to the work your most proud of</p>
                        <p className="">Provide a place for artists to view your current and upcomming work</p>
                    </div>
                    <div className="buttons">
                        <Button>Learn More</Button> <Button>Request Quote</Button>
                    </div>
                </div>
            </div>

            <div className="services-img" id="personal">
                <div className="textbox" id="textbox7">
                    <h3>Personal Brands and Events</h3>
                    <div className="">
                        <p>
                            Professonials or events looking for an online business card<br/>
                            we have solutions to fit every occasion or brand
                        </p>
                    </div>
                    <div className="">
                        <p className=""> For brands or events</p>
                        <p className="">Increase brand or event exposure</p>
                        <p  className="">Create and build a community around your brand or event</p>
                        <p  className="">News letter sign up and more</p>
                    </div>
                </div> 
                <div className="textbox" id="textbox8">
                    <h3>Professonials and Brands</h3>
                    
                    <div className="">
                        <p className="">Elevating professonial brands for professonial people</p>
                    </div>

                    <div className="">
                        <p className="">Attract potential customers</p>
                        <p className="">Create a larger auidence</p>
                        <p className="">Showcase your skills and portfolio</p>
                    </div>
                </div>
              
               <div className="textbox" id="textbox9">
                <h3>Events and Occasions</h3>
                <div className="">
                    <p className="">  </p>
                </div>
                </div>    
            </div>  
        </div>
    )
}