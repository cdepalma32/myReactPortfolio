// import React from 'react'; // Ensure React is imported

function Portfolio() {
    return (
        <div>
            <h1>This is the Portfolio Page</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="/assets/img/img.webp" alt="Portfolio Example"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5> {/* Update class to className */}
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img.webp" alt="Portfolio Example"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img.webp" alt="Portfolio Example"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img.webp" alt="Portfolio Example"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
