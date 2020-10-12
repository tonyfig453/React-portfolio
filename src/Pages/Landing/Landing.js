import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "../../components/Container/Container"
import Col from "../../components/Col/Col"
import Row from "../../components/Row/Row"
import Footer from "../../components/Footer/Footer"

const styles= {
  div: {
    backgroundColor: "pink"
  }
}



function Landing() {
    return (
      <div style={styles.div} className="card text-center">
        <h1>Welcome to my portfolio!</h1>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-6">
        <Card style={{ width: '18rem'  }}>

          <Card.Img variant="top" src="https://i.ibb.co/SsSGjwd/82151944-3071474569542331-3212940067769155584-n.jpg" />
          </Card>
          
            
          </Col>
          <Col size="md-6">
            <h4><p>Hello my name is Anthony Figueroa.  I am 29 years old and just recent graduated from UCLA's full stack web development program.
              I love hiking, traveling, trying new foods, exploring new places, going to the beach, and learning more about coding!</p></h4>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Landing;