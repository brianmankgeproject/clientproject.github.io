import React from "react"
import "./Home.scss"
import Featured from "../../componets/Featured/Featured"
import Slide from "../../componets/slide/Slide"
import CatCard from "../../componets/catCard/catCard"
import {cards, projects} from "../../data"
import ProjectCard from "../../componets/projectCard/Projectcard"


const Home = () => {
    return(
    <div className="home">
        <Featured/>
        <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map(card=>(
                <CatCard key={card.id} item={card}/>
            ))}
        </Slide>
        <div className="features">
            <div className="container">
                <div className="item">
                    <h1>Vision</h1>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        The best for every budget
                    </div>
                    <p>
                        Our Vision is to create a seamless, user-friendly space where you can effortlessly connect with competent delivery 
                        service providers, for affordable prices.
                    </p>

                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Tired of frustrations?
                    </div>
                    <p>
                        Our platfrom is all about effortless delivery solutions, connecting you with competent delivery providers swiftly.
                    </p>

                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        The Mission
                    </div>
                    <p>
                        Our mission is to transform your delivery experience into a seamless journey. Empowering you to set your task's value, we aim 
                        to align tasks with your financial comfort.
                    </p>

                 
                </div>
                <div className="item">
                    <video src="./img/video (2160p).mp4" controls></video>
                </div>

                

            </div>
            
            
        </div>

       <div className="faq-container">
                <div className="faq">
                    <div className="faq-item">
                        <h1>FREQUENTLY ASKED QUESTIONS</h1>
                        <div className="questions">
                        
                            <div className="qHead">
                            <span>How do I ensure I'm connecting with a competent service provider?</span>
                            
                            <div className="content">
                           
                                <p>We've integrated a ratings and review system that offers valuable
                                     insights into the service providers. Our community of users can vouch for the 
                                     competency of these providers, ensuring you make informed decisions for your tasks.</p>
                            </div>
                            </div>
                            <div className="qHead">
                            <span>How do I use the platform to post my tasks and connect with providers?</span>
                            
                            <div className="content">
                           
                                <p>The platform simplifies task posting and provider connections. Users can effortlessly create tasks, including specific requirements and a suggested compensation.
                                     Our aim is to facilitate seamless communication and efficient task assignment.</p>
                            </div>
                            </div>

                            <div className="qHead">
                            <span>How does the platform prioritize my satisfaction and ease of use?</span>
                            
                            <div className="content">
                           
                                <p>Our platform is designed with a strong focus on user satisfaction and ease of use. We aim to provide a smooth, user-friendly experience 
                                    that ensures users can seamlessly connect with service providers and achieve their desired outcomes.</p>
                            </div>
                            </div>

                            <div className="qHead">
                            <span>How does the "Offer Your Own Price" feature work?</span>
                            
                            <div className="content">
                           
                                <p>Our platform enables a unique pricing experience, giving users the autonomy to propose a value they deem appropriate for a service. 
                                    It's all about empowering our users to find a fair balance that aligns with their expectations.</p>
                            </div>
                            </div>

                     
                        </div>
                    </div>
                </div>
       </div>
        <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map((projects) =>(
                    <ProjectCard key={projects.id} item={projects}/>
                ))}
            </Slide>
    </div>
    )
}

export default Home