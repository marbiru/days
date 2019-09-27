import React from 'react';
import { Link } from "react-router-dom";

class Unsubscribe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pending: true,
            success: false
        }
    }

    componentDidMount() {
        let url = "https://api.daysold.com/unsubscribe";
        let id = this.props.match.params.id;

        fetch(`${url}/${id}`, { method: "DELETE" })
        .then(() => this.setState({pending: false, success: true}))
        .catch(e => this.setState({pending: false, success: false}))

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
