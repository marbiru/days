import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DateSelector from './DateSelector';

class App extends React.Component {

    render() {
        return (
            <div>
            <Navbar bg="light" fixed="top" expand="lg">
                <Navbar.Brand className="mx-auto">DAYSOLD.COM</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <DateSelector />
                </Row>
            </Container>
            </div>
        );
    }
}

export default App;
