import './home.css'
import Projects from '../components/ProjectsCard.jsx'
import weather from '../assets/images/weather.png'
import ceramicModal from '../assets/images/ceramic.png'
export default function Home() {
    return (
      <div className="contianer">
    <div>
        <h3 className='hello'> Hi, My name is Justin</h3>
    </div>
        <div className="internet">
        <p className="link"><a href="https://github.com/jozkan30"> Github</a></p>
        <p className="link"><a href="https://www.linkedin.com/in/justin-ozkan/"> LinkedIn</a></p>
        </div>
       <div className="projects">
        <Projects 
        proImg={weather}
        title={"Weather App"}
        desc = {"Users are able to search by city and view real time weather data"}
        />
        <Projects 
        proImg={ceramicModal}
        title={"Ceramic Modal"}
        desc = {"Modal UI built with React.Js and data from the Metropolitan Museum of Art API"}
        />
        <Projects 
        proImg={"https://secure.img1-fg.wfcdn.com/im/51423155/resize-h800-w800%5Ecompr-r85/7893/78935952/Felty+Oriental+Cream%2FLight+Blue+Area+Rug.jpg"}
        title={"Store API"}
        desc = {"RESTful API built with MoongoDB, Express, and Node.js"}
        />
      
        
       </div>
      </div>
    )
  }