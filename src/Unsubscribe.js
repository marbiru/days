import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

class Unsubscribe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confimed: false,
            pending: false,
            success: false
        }

        this.unsubscribe = this.unsubscribe.bind(this);
    }

    unsubscribe(event) {
        event.preventDefault();
        event.stopPropagation();

        let url = "https://api.daysold.com/unsubscribe";
        let id = this.props.match.params.id;

        fetch(`${url}/${id}`, { method: "DELETE" })
        .then(() => this.setState({confirmed: true, pending: false, success: true}))
        .catch(e => this.setState({confirmed: true, pending: false, success: false}))

    }

    render_ask_for_confirmation() {
        let details 
        if (new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i).test(this.props.match.params.id)) {
            details  = (
                <p>
                THIS WILL CANCEL REMINDERS FOR A GIVEN DATE.<br/><br/>
                IF YOU HAVE SUBSCRIBED TO REMINDERS FOR OTHER DATES AS WELL,<br />
                YOU WILL STILL GET NOTIFICATIONS FOR THOSE DATES.            
                </p>
            );
        } else {
            details  = (
                <p>
                THIS WILL CANCEL ALL SUBSCRIPTIONS REGISTERED ON YOUR EMAIL ADDRESS.
                </p>
            );
        }
        return (
            <div>
                <h2>ARE YOU SURE YOU WANT<br/>TO UNSUBSCRIBE?</h2>

                {details}

                <i className="pink-icon fas fa-question-circle fa-9x"></i>

            <Form className="pt-3">
            <Form.Group>
                        <Button variant="outline-danger flat" type="submit" disabled={this.state.pending} onClick={this.unsubscribe}> 
                        YES, UNSUBSCRIBE
                        </Button>
            </Form.Group>
            <Form.Group>
                        <Link to="/">
                            <Button variant="outline-dark flat" type="submit" name="submit">TO THE FRONT PAGE</Button>
                        </Link>
            </Form.Group>
            </Form>
            </div>
        );
    }

    render_pending() {
        return (
            <div>
                <h2>UNSUBSCRIBING...</h2>
                <i className="pink-icon fas fa-spinner fa-pulse fa-9x"></i>
            </div>
        );
    }

    render_success() {
        return (
            <div>
                <h2>SUCCESS</h2>
                <i className="pink-icon fa fa-check-circle fa-5x app_icon"></i>
                <p className="app_text">YOU HAVE BEEN UNSUBSCRIBED<br />FROM FUTURE MILESTONE NOTIFICATIONS</p>
                <Link to="/">
                    <button className="button" id="submit" type="submit" name="submit">TO THE FRONT PAGE</button>
                </Link>
            </div>
        );
    }

    render_fail() {
        return (
            <div>
                <h2>WE'RE SORRY</h2>
                <i className="pink-icon fa fa-exclamation-triangle fa-5x app_icon"></i>
                <p className="app_text">WE'RE HAVING SOME TECHNICAL DIFFICULTIES.<br />PLEASE TRY AGAIN LATER.</p>
                <Link to="/">
                    <button className="button" id="submit" type="submit" name="submit">TO THE FRONT PAGE</button>
                </Link>
            </div>
        );
    }

    render() {
        if (!this.state.confirmed) {
            return this.render_ask_for_confirmation();
        }

        if (this.state.pending) {
            return this.render_pending();
        }

        if (this.state.success) {
            return this.render_success();
        }

        return this.render_fail();
    }
}

export default Unsubscribe
