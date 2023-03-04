import './home.css'
import Projects from '../components/ProjectsCard.jsx'
import weather from '../assets/images/weather.png'
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
       <div className="Projects">
        <Projects 
        proImg={weather}
        title={"Weather App"}
        desc = {"hello"}
        />
       </div>
      </div>
    )
  }