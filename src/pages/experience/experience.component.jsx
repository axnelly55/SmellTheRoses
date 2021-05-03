import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import afcUrgentCare from "../../assets/img/experience/incubax.webp";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={afcUrgentCare} alt="Incubax logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Design Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, MS-SQL, Javascript, HTML, CSS, Php, Wordpress, Divi, Elementor, Woocommerce, Ecommerce, Wix, Shopify 
                    <br />
                    <strong>Duration:</strong> Februrary 2021 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple responsive features offering customizability options across web applications.</li>
                      <li><strong>Developed</strong> automation system to efficently increase optimization performance by 80% across all products in turn decreasing working hours.  
                       Dealt with high-end clients that grossed over $250k months through having optimized sites. Personally I was asked to have certain websites designed by myself. 
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements. Particpated in multiple kanban stand-up meetings that allowed for close collaborations and precise attention to details that would in turn lead to producing great products.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>

    
  );
};

export default Experience;
