// import React from 'react'; // Ensure React is imported

function Resume() {
    return (
        <div>
            <h1>This is the Resume Page</h1>
            <div className="card mb-3" style={{ width: '18rem', backgroundColor: '#6f42c1' }}>
                <div className="card-body">
                    <h5 className="card-title text-primary-emphasis">Resume</h5>
                    <p className="card-text">Front end/back end info goes here!.</p>
                    <a href="https://docs.google.com/document/d/1QzL5a_MUCpcQJlaK2tsKohFSix_6Yf1nA1ca75L0bmY/edit?usp=sharing" className="card-link">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
