import "./home.css";
import Projects from "../components/ProjectsCard.jsx";
import weather from "../assets/images/weather.png";
import ceramicModal from "../assets/images/ceramic.png";
import ReadMe from "../assets/images/ReadMe.png";
import About from "../components/About.jsx";

export default function Home() {
  return (
    <div className="contianer">
      <div>
        <h3 className="hello"> Hi, My name is Justin</h3>
      </div>
      <About />
      <div className="projects">
        <Projects
          proImg={
            "https://discovertemplate.com/wp-content/uploads/2021/09/Shopping-E-Commerce-Animated-GIF-Icon-Pack_1.gif"
          }
          title={"Store API"}
          desc={"RESTful API built with MongoDB, Express, and Node.js"}
          codeUrl={"https://github.com/jozkan30/Fake-Store-API"}
        />
        <Projects
          proImg={ceramicModal}
          title={"Ceramic Modal"}
          desc={
            "Modal UI built with React.Js and data from the Metropolitan Museum of Art API"
          }
          codeUrl={"https://github.com/jozkan30/Ceramic-Modal-"}
        />
        <Projects
          proImg={ReadMe}
          title={"ReadMe"}
          desc={
            "A full CRUD social media reddit clone using React.js Django, and PostgresSQL."
          }
          codeUrl={"https://github.com/jozkan30/Final-Project"}
        />
        <Projects
          proImg={weather}
          title={"Weather App"}
          desc={
            "Users are able to search by city and view real time weather data"
          }
          codeUrl={"https://github.com/jozkan30/Weather-App"}
        />
      </div>
    </div>
  );
}
