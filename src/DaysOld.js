import React from 'react';
import './App.css';
import SignUpForm from './SignupForm.js';
import { Link } from "react-router-dom";

class DaysOld extends React.Component {
    constructor(props) {
        super(props);

        let date;
        let date_iso8601;

        try {
            date = new Date(props.match.params.date);
            date_iso8601 = date.toISOString().slice(0,10);
        } catch(err) { 
            date = null;
        }

        // Validate user input
        if (date && date_iso8601 === props.match.params.date) {
            this.state = {
                date: date,
                date_iso8601: date_iso8601
            }
        } else {
            this.state = { date: null };
            return;
        }

        // Find how many days old the user is and upcoming milestones
        let now = new Date();
        let day_ms = 86400000

        let days_old = Math.floor((now - date) / day_ms);
        let next_big_milestone = Math.floor(days_old / 5000) * 5000 + 5000;

        let candidate_small_milestones = []

        if (days_old < 900) {
            candidate_small_milestones.push(Math.floor(days_old / 100) * 100 + 100);
        } else {
            let candidate = Math.floor(days_old / 1000) * 1000 + 1000;
            if (candidate % 5000 !== 0) { 
                candidate_small_milestones.push(candidate);
            } else {
                candidate_small_milestones.push(candidate + 1000);
            }
        }

        [7777, 11111, 12345, 22222].forEach(m => { if (days_old < m) candidate_small_milestones.push(m) });

        let next_small_milestone = candidate_small_milestones.sort((a,b) => a-b)[0];
        
        this.state.days_old = days_old;
        this.state.next_big_milestone = next_big_milestone;
        this.state.next_big_milestone_date = new Date();
        this.state.next_big_milestone_date.setDate(date.getDate() + next_big_milestone - days_old);
        this.state.next_small_milestone = next_small_milestone;
        this.state.next_small_milestone_date = new Date();
        this.state.next_small_milestone_date.setDate(date.getDate() + next_small_milestone - days_old);
    }

    render_invalid_date() {
        return (
            <div>
                <h2>WE'RE SORRY</h2>
                <i className="pink-icon fa fa-calendar-times fa-5x app_icon"></i>
                <p className="app_text">WE DON'T RECOGNIZE THAT DATE</p>
                <Link to="/">
                    <button className="button" id="submit" type="submit" name="submit">TO THE FRONT PAGE</button>
                </Link>
            </div>
        );
    }

    render_valid_date() {
        return (
            <div>
                <p id="today_you_are">
                    TODAY YOU ARE
                    <br />
                    <span id="days_old_output" className="emphasis">{this.state.days_old}</span>
                    <br />
                    DAYS OLD
                </p>

                <p>&mdash;<span id="upcoming_milestones">UPCOMING MILESTONES</span>&mdash;</p>

                <p className="you_will_be">
                    YOU WILL BE 
                    <br />
                    <span id="small_milestone_output" className="emphasis">{this.state.next_small_milestone}</span> DAYS OLD
                    <br /> 
                    ON <span className="emphasis" id="small_milestone_date_output">{this.state.next_small_milestone_date.toDateString()}</span> 
                </p>

                <p className="you_will_be">
                    YOU WILL BE
                    <br />
                    <span id="big_milestone_output" className="emphasis">{this.state.next_big_milestone}</span> DAYS OLD
                    <br />
                    ON <span className="emphasis" id="big_milestone_date_output">{this.state.next_big_milestone_date.toDateString()}</span>
                </p>

                <SignUpForm date={this.state.date} />

                <Link to="/">
                    <button className="button" id="submit" type="submit" name="submit">START OVER</button>
                </Link>

                <p className="footer"> 
                   Do you like podcasts? Get the best podcast recommendations from <a href="https://thelistener.substack.com/c/days-old" className="footer_link">The Listener</a> with this special free gift.
                </p>

            </div>
        );
    }

    render() {
        if (!this.state.date) {
            return this.render_invalid_date();
        }

        return this.render_valid_date();
    }
}

export default DaysOld
