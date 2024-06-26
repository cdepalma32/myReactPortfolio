// import React from 'react'; // Ensure React is imported

function Portfolio() {
    return (
        <div>
            <br />
            <br />
            <h3 className="text-center">Portfolio</h3>
            <br/>
            <br/>
            <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid text-white py-5 bg-custom">
                <div className="col">
                    <div className="card">
                        <img src="/assets/img/img3.jpg" alt="Portfolio Example" className="card-img-top" style={{ width: '100%', height: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title"> BusyBeeNotes:  <a href="https://hidden-beach-03226-5d264955dec4.herokuapp.com/">Heroku Deployed App</a></h5>
                            <h5 className="card-title"> GitHub Link:  <a href="https://github.com/cdepalma32/BusyBeeNotesApp" className="mx-3" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
          </a></h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/assets/img/img 2.jpg" alt="Portfolio Example" className="card-img-top" style={{ width: '100%', height: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title">MyOOPlogo</h5>
                            <h5 className="card-title">GitHub Link:  <a href="https://github.com/cdepalma32/myOOPlogo" className="mx-3" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
          </a></h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img 4.jpg" alt="Portfolio Example" style={{ width: '100%', height: '100%' }}/>
                        <div className="card-body">
                        <h5 className="card-title">EmpTrackSQL</h5>
                            <h5 className="card-title">GitHub Link:  <a href="https://github.com/cdepalma32/EmpTrackSQL" className="mx-3" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
          </a></h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img1.jpg" alt="Portfolio Example" style={{ width: '100%', height: '100%' }}/>
                        <div className="card-body">
                        <h5 className="card-title">socialNetAPI</h5>
                            <h5 className="card-title">GitHub Link:  <a href="https://github.com/cdepalma32/socialNetAPI" className="mx-3" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
          </a></h5>
                            <p className="card-text"></p>

                
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img 5.jpg" alt="Portfolio Example" style={{ width: '100%', height: '100%' }}/>
                        <div className="card-body">
                        <h5 className="card-title">myreadme_generator</h5>
                            <h5 className="card-title">GitHub Link:  <a href="https://github.com/cdepalma32/myreadme_generator" className="mx-3" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
          </a></h5>
                            <p className="card-text"></p>

                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card">
                    <img src="/assets/img/img 6.jpg" alt="Portfolio Example" style={{ width: '100%', height: '100%' }}/>
                        <div className="card-body">
                        <h5 className="card-title">MyWebAPICodingQuiz</h5>
                            <h5 className="card-title">GitHub Link:  <a href="https://github.com/cdepalma32/MyWebAPICodingQuiz" className="mx-3" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
          </a></h5>
                            <p className="card-text"></p>

                
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Portfolio;
