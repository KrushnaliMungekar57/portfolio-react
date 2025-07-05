import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter12 from "../assets/img/meter12.png";
import meter8 from "../assets/img/meter8.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6, // showing 6 on normal desktops too
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3, // optional tweak for tablets
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With strong foundations in mathematics,C-programming and Java,<br></br> I thrive on learning and applying new technologies to real-world challenges..</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                               <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React Node.js</h5>
                            </div>
                              
                                <h5>MySQL</h5>
                            </div>
                           
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C-programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React Node.js</h5>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}