// import React from 'react';

function About() {
    return (
        <div className="container-fluid text-white py-5 bg-custom">
            <div className="container">
                <div className="card mb-3 text-white" style={{
                    backgroundImage: `url('/assets/img/resume card.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none'
                }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <br />
            <br />
            <br/>
            <br/> 
            <h2 style={{ textAlign: 'center' }}>About Me</h2>
            <br/>
            <br/>
            <div style={{ textAlign: 'center' }}>
                <img src="./assets/img/headshot.jpg" alt="Headshot" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <p style={{ textAlign: 'center' }}> 
                <br/><br/>
            
            I am an Entry Level Web Developer dedicated to delivering impressive customer service. <br/>  
            As I broaden and deepen my comprehension of a multitude of computer languages, constructing and maintaining websites and applications,  <br/>
            I am learning to further implement techniques and principles to deliver professional and progressive work.
            <br/><br/><br/><br/><br/><br/><br/>
            </p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
