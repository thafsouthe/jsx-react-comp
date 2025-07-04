import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const firstName = "Thafsouthe";

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: "24rem", padding: "1rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h3>Hello, {firstName ? firstName : "there!"}</h3>
        {firstName && (
          <img
            src="https://via.placeholder.com/100x100.png?text=👋"
            alt="Greeting"
            style={{ marginTop: "10px", borderRadius: "50%" }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
