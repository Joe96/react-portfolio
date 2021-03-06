import React from 'react';
import '../../styles/style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Projects() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
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
                <img id="movie-app" src="https://www.pngitem.com/pimgs/m/567-5673740_book-feature-english-book-club-hd-png-download.png" alt="profile avatar"></img>
              </a> 
            </div>
          </Col>

          <Col>
            <div>
              <p>Open Weather API</p>
              <a href ="https://github.com/Joe96/openweather_api" >
                <img id="movie-app" src="https://cdn.dribbble.com/users/2081/screenshots/6024594/snowflake_weather_app_icon_4x.png" alt="profile avatar"></img>
              </a> 
            </div>
          </Col>
          
        </Row>
      
      </Container>
    </div>
  );
}
