import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            submit_success: false,
            pending: false,
            validate: false,
            dob: props.date.toISOString().slice(0,10),
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({validate: true});

        if (event.currentTarget.checkValidity() === false) {
            return;
        }

        let data = new FormData(event.target);
        let email = data.get("email");
        let name = data.get("name");
        
        fetch("https://api.daysold.com/subscribe", {
                method: "POST",
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({dob: this.state.dob, name: name, email: email})
            }
        ).then(() => {this.setState({submitted: true, submit_success: true, pending: false})})
        .catch(e => {this.setState({submitted: true, submit_success: false, pending: false})})
        
        this.setState({pending: true})
    }

    render_submitted_success() {
        return (
        <Row>
        <Col md={{span: 4, offset: 4}}>
        <Card>
        <Card.Body>
            <Card.Title>THANK YOU!</Card.Title>
            <i className="pink-icon fas fa-envelope-open-text fa-5x"></i>
            <Card.Text>You will now receive email reminders for your upcoming milestones.</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        );
    }

    render_submitted_failure() {
        return (
        <Row>
        <Col md={{span: 4, offset: 4}}>
        <Card>
        <Card.Body>
            <Card.Title>WE'RE SORRY!</Card.Title>
            <i className="pink-icon fas fa-exclamation-triangle fa-5x"></i>
            <Card.Text>Something went wrong, and we were unable to sign you up for email reminders. Please try again later.</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        );
    }

    render_unsubmitted() {
        return (
        <Row>
        <Col md={{span: 4, offset: 4}}>
        <Card>
        <Card.Body>
        <Card.Subtitle>Were you born on {this.props.date.toDateString()}? Get an email reminder for your next milestone.</Card.Subtitle>
                <Form noValidate className="pad-form" validated={this.state.validate} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Control required maxLength="50" name="name" type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Control required name='email' type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Button variant="outline-dark flat" type="submit" disabled={this.state.pending}>
                      GET EMAIL REMINDERS
                    </Button>
                </Form>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        );
    }

    render() {
        if (this.state.submitted && this.state.submit_success) {
            return this.render_submitted_success();
        } else if (this.state.submitted & !this.state.submit_success) {
            return this.render_submitted_failure();
        } else {
            return this.render_unsubmitted();
        }
    }
}

export default SignUpForm
