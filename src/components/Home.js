import React from 'react';
import Me    from 'IMG/profile.jpg';
import Resume from 'IMG/Bell_Kim-ResumePublic.pdf';

const Home = () => {
  return(
    <div>
      <div className="text-center padding-top" id="home">
        <h1>Kimberly Bell</h1>
        <h2>Front End Developer</h2>
        <h3>
          <a href="https://github.com/TzolkinB" target="_blank" className="pr-2">Github</a>
           |
          <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="px-2">LinkedIn</a> 
           |
          <a href={Resume} target="_blank" className="pl-2">Resume</a>
        </h3>
      </div>
      <div id="about" className="container-fluid"> 
        <div className="row section-padding">
          <div className="col-sm-12 mb-3">
            <h2>About Me</h2>
          </div>
          <div className="row">
            <div className="col-sm-7 ml-4">
                <img src={Me} alt="Profile image" height="120" width="120" className="rounded-circle float-left mr-3"/>
                <p className="pl-2">I am a front-end developer and I love using ES6 and the React ecosystem.
                In my current job, I often convert html files into react components, including implementing components from the chosen
                css framework. I also add javascript to the initial prototype applications intended for client approval.
                Additional tasks include updating existing code with structure and style changes as nessessary. In
                my free time I continue to deepen my understanding of Javascript and learn Node. 
                When I am not coding I love to read and be outside enjoying my backyard!</p>
                <p>You might be wondering, why "Fierce Whiskers"? It is a very simple answer. I have three cats.
                One we refer to as "fierce whiskers", one referred to as "chubbers", and the other we actually
                named "Scragalea". Chubbers and Scragalea did not sound like great choices for domain name and
                anything I came up with using my name was already taken.</p>
                <p>I am always looking for new opportunites so feel free to reach out to me: krbell4@gmail.com</p>
            </div>
            <div className="col-sm-4">
              <h3>Skills</h3>
              <ul className="skills-col">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript/ES6</li>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>Github</li>
                <li>VIM</li>
                <li>Bootstrap</li>
                <li>Bootstrap Material Design</li>
                <li>Zurb Foundation</li>
                <li>Materialize</li>
                <li>Sketch</li>
                <li>Adobe Suite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="container-fluid section-padding"> 
        <div className="row">
          <div className="col-sm-12 mb-3">
            <h2 className="text-center">Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="card card-width">
            <div className="card-body">
              <h5 className="card-title">Hazmat</h5>
              <h6 className="card-subtitle mb-2 text-muted">Material Design Library</h6>
              <p className="card-text">Library of React components based on Material Design guidelines for use by TMA.</p>
              <a href="https://qa-tma1.works/hazmat/" className="card-link">Demo</a>
            </div>
          </div>
          <div className="card card-width">
            <div className="card-body">
              <h5 className="card-title">React Starter Template</h5>
              <h6 className="card-subtitle mb-2 text-muted">Uses webpack</h6>
              <p className="card-text">Basic template for getting new applications up and running quickly.</p>
              <a href="https://github.com/TzolkinB/react-template" className="card-link">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;