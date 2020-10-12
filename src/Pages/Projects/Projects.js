import React from 'react';
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col"
import Card from "react-bootstrap/Card"
import Container from "../../components/Container/Container"



function Project() {
    return (
        <div className="card text-center">
        <h1>Welcome to my portfolio!</h1>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-4">
        <Card style={{ width: '18rem'  }}>

          <Card.Img variant="top" src="https://i.ibb.co/qjDvYWq/Screen-Shot-2020-08-05-at-8-14-54-PM.png" />
          <Card.Body>
        <Card.Title>Safety Travel App</Card.Title>
        <Card.Text>
        A travel app that advises the user where they should travel based on Coronavirus risk recommendations and provides the user with travel accommodation options.


         </Card.Text>
         <Card.Link href="https://edwardreyes29.github.io/project-1/">Project 1</Card.Link>        
         </Card.Body>
          </Card>
          
            
          </Col>
          <Col size="md-4">
        <Card style={{ width: '18rem'  }}>

          <Card.Img variant="top" src="https://i.ibb.co/vkZKDts/Screen-Shot-2020-10-09-at-10-56-09-AM.png" />
          <Card.Body>
        <Card.Title>Babble</Card.Title>
        <Card.Text>
                 Created a instant messenger where users can communicate with each other
         </Card.Text>
         <Card.Link href="https://young-caverns-90463.herokuapp.com/">Project 2</Card.Link>        
        </Card.Body>
          </Card>
          
            
          </Col>
          <Col size="md-4">
        <Card style={{ width: '18rem'  }}>

          <Card.Img variant="top" src="https://i.ibb.co/DbfrXHk/Screen-Shot-2020-10-11-at-4-20-59-PM.png" />
          <Card.Body>
        <Card.Title>Puppy Love</Card.Title>
        <Card.Text>
                 Created an app to volunteer to play with dogs in shelters. Users can schedule a play date with dogs, and in hopes to change the dogs personality with constant human connection"
         </Card.Text>
         <Card.Link href="https://secure-meadow-97878.herokuapp.com/">Project 3</Card.Link>        
        </Card.Body>
          </Card>
          
            
          </Col>
        </Row>

        
      </Container>

    </div>
  );
}
    export default Project;















