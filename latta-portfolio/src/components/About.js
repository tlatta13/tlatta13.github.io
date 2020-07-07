import React from "react";
import "../About.css"

function About() {
    return (
        <main className="section">
            <div className="container">
                <section className="columns">
                    <div className="column is-one-quarter">  
                    <figure className="image">
                        <img className="is-rounded mb-3" src="../Images/Portfolio-Img.png" alt="Travis at Risteen Wedding" />
                    </figure>
                    <div className="content has-text-centered contact-info">
                        <p><i class="fas fa-envelope-open-text"></i> <a href="mailto: tlatta13@gmail.com" target="_blank"> tlatta13@gmail.com</a></p>
                        <p><i className="fas fa-phone"></i> (270) 577-6449</p>
                    </div>
                    </div>
                    <div id="aboutMe" class="is-three-quarters">
                    <p className="title is-3">About Me</p>    
                        <p className="content is-medium">My name is Travis Latta. I moved to Charlotte in 2014 after graduating from The University of Kentucky. While in college I majored in Marketing and Management and minored in Economics and International Business. Since moving to Charlotte I have helped start 2 companies, a direct marketing company and a chiropractic practice.</p>

                        <p className="content is-medium">I am currently enrolled in the coding bootcamp at UNCC where we are being taught the skills required to start a career as a full-stack developer. Upon completing the program I plan to look for a job with a local marketing agency where I can help clients build their online presence.</p>
        
                        <p className="content is-medium">In my free time I enjoy playing soccer, golfing, trying out new breweries around Charlotte and getting outdoors as much as possible.</p>
                        
                    <nav className="level social">
                        <div className="level-item has-text-centered">
                            <div>
                            <button class="heading button is-large is-info is-outlined is-rounded"><i className="fab fa-github"></i> 
                                <a href="https://github.com/tlatta13" target="_blank" rel="noopener noreferrer"> GitHub</a>
                            </button>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <button class="heading button is-large is-info is-outlined is-rounded"><i className="fab fa-linkedin-in"></i> 
                                <a href="https://www.linkedin.com/in/tlatta13/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                            </button>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <button class="heading button is-large is-info is-outlined is-rounded"><i className="far fa-file"></i>  
                                <a href="Assets/Travis-Latta-Resume-Technical.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
                            </button>
                            </div>
                        </div>
                    </nav>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About;