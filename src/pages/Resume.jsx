// import React from 'react'; // Ensure React is imported

function Resume() {
    return (
        <div className="container-fluid text-white py-5 bg-custom">
            <div className="container">
                <h1 className="text-center">Resume</h1>
                <div className="card mb-3 text-white" style={{
                    backgroundImage: `url('/assets/img/resume card.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none'
                }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <br />
                        <a href="https://docs.google.com/document/d/1s3R2UolG5GQmS0rxYCwiwjCzRAy_UNp_1fxFjjeTDbY/edit?usp=sharing" className="card-link text-white">Download my resume</a>
                        <br />
                        <br />
                        <br />
                        <br />

                        <h6 className="card-subtitle mb-2 custom-heading">Front End Skills</h6>
                        <ul className="list-group list-group-flush mb-3 no-border">
                            <li className="list-group-item custom-list-item">HTML</li>
                            <li className="list-group-item custom-list-item">CSS</li>
                            <li className="list-group-item custom-list-item">JavaScript</li>
                            <li className="list-group-item custom-list-item">jQuery</li>
                            <li className="list-group-item custom-list-item">Responsive Design</li>
                            <li className="list-group-item custom-list-item">Bootstrap</li>
                            <li className="list-group-item custom-list-item">React</li>
                        </ul>

                        <h6 className="card-subtitle mb-2 custom-heading">Back End Skills</h6>
                        <ul className="list-group list-group-flush mb-3 no-border">
                            <li className="list-group-item custom-list-item">APIs</li>
                            <li className="list-group-item custom-list-item">Node.js</li>
                            <li className="list-group-item custom-list-item">Express.js</li>
                            <li className="list-group-item custom-list-item">MongoDB, Mongoose</li>
                            <li className="list-group-item custom-list-item">MySQL, Sequelize</li>
                            <li className="list-group-item custom-list-item">REST</li>
                            <li className="list-group-item custom-list-item">Handlebars</li>
                            <li className="list-group-item custom-list-item">GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;