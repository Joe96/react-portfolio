import React from 'react';
import '../../styles/style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Projects() {
  return (
    <div className="justify-content-center">
      <Container>
        <Row>
          <Col>          
            <div>
              <p>Popcorn Time</p>
              <a href ="https://github.com/Joe96/movies_api" >
                <img id="movie-app" src="https://cdn.pixabay.com/photo/2021/10/22/11/43/popcorn-6732424_960_720.png" alt="profile avatar"></img>
              </a> 
            </div>
          </Col>

          <Col>
            <div>
              <p>Book Club</p>
              <a href ="https://github.com/Joe96/book_store" >
                <img id="movie-app" src="https://cdn.pixabay.com/photo/2021/10/22/11/43/popcorn-6732424_960_720.png" alt="profile avatar"></img>
              </a> 
            </div>
          </Col>

          <Col>
            <div>
              <p>Open Weather API</p>
              <a href ="https://github.com/Joe96/openweather_api" >
                <img id="movie-app" src="https://cdn.pixabay.com/photo/2021/10/22/11/43/popcorn-6732424_960_720.png" alt="profile avatar"></img>
              </a> 
            </div>
          </Col>
          
        </Row>
      
      </Container>
    </div>
  );
}
