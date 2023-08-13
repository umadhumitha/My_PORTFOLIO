import React,{Component} from "react";
import M from "materialize-css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Image1 from "./assets/webintern.jpeg"
// import Image2 from "./assets/AI_workshop.jpeg"
// import Image3 from "./assets/nptel.jpeg"
import Image4 from "./assets/girl.webp"
// import Image5 from "./assets/gdsc.png"
// import Image6 from "./assets/INTEL.jpg"
import Image7 from "./assets/tollgate.png"
import Image8 from "./assets/calculator.jpg"
import Image9 from "./assets/drumkit.jpg"
import Image10 from "./assets/todo.png"
import './Learning.css';


class Learning extends Component {
  componentDidMount() {
    M.Carousel.init(document.querySelectorAll('.carousel'),
    {
      fullWidth: true,
      indicators: true
    } );
  }
  renderSkillsBox(imageSrc, title) {
    return (
      <div className="skills-box">
      <div className="skills-title">
        <div className="skills-img">
          <img src={imageSrc} alt="" className="skills-icons" />
        </div>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

renderCarouselItem(imageSrc, text) {
  return (
    <button className="carousel-item">
      <div className="col s20 m25">
        <div className="card">
          <div className="card-image">
            <img src={imageSrc} alt="" />
          </div>
          <div className="card-content">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

render() {
  return (


      <div>


        <div class="skills-section">
          <div class="skills-header">
            <h1>Skills Acquired</h1>
          </div>
          <div class="skills-container">

          {this.renderSkillsBox(
              "https://cdn.pixabay.com/photo/2016/11/19/22/25/html5-1841458__340.png",
              "HTML 5"
            )}

           {this.renderSkillsBox(
              "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
              "CSS3"
            )} 


            {this.renderSkillsBox(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png",
              "JAVA SCRIPT"
            )}


            {this.renderSkillsBox(
              "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png",
              "REACT JS"
            )}


            {this.renderSkillsBox(
              "https://icon-library.com/images/java-icon-images/java-icon-images-4.jpg",
              "JAVA"
            )} </div></div>

{/* <div className="Roles">
  <h1 className="center">Roles</h1>
  <Carousel
    showThumbs={false}
    showStatus={false}
    autoPlay
    infiniteLoop
    className="carousel"
  >
    <div className="carousel-item">
      <div className="card">
        <div className="card-image">
          <img src={Image4} alt="Role 1" />
        </div>
        <div className="card-content">
          <p className="card-title">PLACEMENT INCHARGE OF MY CLASS</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="card">
        <div className="card-image">
          <img src={Image5} alt="Role 2" />
        </div>
        <div className="card-content">
          <p className="card-title">MEMBER OF GOOGLE DEVELOPERS STUDENT CLUB</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="card">
        <div className="card-image">
          <img src={Image6} alt="Role 3" />
        </div>
        <div className="card-content">
          <p className="card-title">MEMBER OF INTEL STUDENT CAMPUS AMBASSADOR PROGRAM</p>
        </div>
      </div>
    </div>
  </Carousel>
</div> */}




<label className="center"><h1>Projects</h1></label>
<div className="Projects">

<div className="row">
            <div className="col s20 m25">
      <div className="card">
        <div className="card-image">
          <img  src={Image4} alt="booking"/>
        </div>
        <div className="card-content">
          <p>Flight Booking System</p>
          <div class="card-action">
          <a href="https://umadhumitha.github.io/Flight_Booking_System/">View my website</a>
        </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
            <div className="col s20 m25">
      <div className="card">
        <div className="card-image">
          <img  src={Image7} alt="tollgate"/>
        </div>
        <div className="card-content">
          <p>Toll Pay</p>
          <div class="card-action">
          <a href="https://github.com/umadhumitha/Tollpay">View Code</a>
        </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
            <div className="col s20 m25">
      <div className="card">
        <div className="card-image">
          <img  src={Image9} alt="drum"/>
        </div>
        <div className="card-content">
          <p>DrumKit</p>
          <div class="card-action">
          <a href="https://umadhumitha.github.io/DrumKit/">Lets Play!!</a>
        </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
            <div className="col s20 m25">
      <div className="card">
        <div className="card-image">
          <img src={Image8} alt="calculator"/>
        </div>
        <div class="card-content">
          <p>Calculator</p>
          <div class="card-action">
          <a href="https://umadhumitha.github.io/JS_CALCULATOR/">Calculate</a>
        </div>
        </div>
      </div>
    </div>
  </div>


  <div className="row">
            <div className="col s20 m25">
      <div className="card">
        <div className="card-image">
          <img src={Image10} alt="todo"/>
        </div>
        <div className="card-content">
          <p>TODO</p>
          <div class="card-action">
          <a href="https://github.com/umadhumitha/TODO-LIST.git">View Code</a>
        </div>
        </div>
      </div>
    </div>
  </div>

  </div>



        <footer>
          <span>
            Created By <a href="https://www.linkedin.com/in/madhumitha-u-42a816202">Madhumitha U</a> <span className=""></span>
          </span>
        </footer>


      </div>
    )}
}
    export default Learning;