import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
return (
	<div>
        <h5 style={{ color: "green",
                    textAlign: "center",
                    marginTop: "-50px" }}>
            Follow me on these social medias.
        </h5>
        <Container>
            <Row>
            <Col>
                <h6>About Us</h6>
                <a href="###">Aim</a>

            </Col>
            <Col>
                <h6>Services</h6>
                <a href="###">Writing</a>
            </Col>
            <Col>
                <h6>Contact Us</h6>
                <a href="###">Uttar Pradesh</a>
            </Col>
            </Row>
        </Container>
	</div>
);
};
export default Footer;
