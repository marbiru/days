import React from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class DateSelector extends React.Component {
    constructor(props) {
        super(props);
        let now = new Date();
        this.state = {
            date: now,
            date_iso8601: now.toISOString().slice(0,10)
        };
        this.setDate = date => { 
            this.setState({
                date: date,
                date_iso8601: date.toISOString().slice(0,10)
            });
        };
    }

    render() {
        return (
        <div>
            <h2>
                HOW MANY DAYS
                <br />
                OLD ARE YOU?
            </h2>

            <p id="what_dob">
                WHAT'S YOUR
                <br />
                DATE OF BIRTH?
            </p>

            <div>
                <DatePicker 
                    selected={this.state.date}
                    onChange={date => this.setDate(date)}
                    dateFormatCalendar={"MMM yyy"}
                    minDate={new Date("1850-01-01")}
                    maxDate={new Date()}
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                />
            </div>

            <Link to={`/date/${this.state.date_iso8601}`}>
                <button className="button" id="submit" type="submit" name="submit">LET'S&nbsp;GO</button>
            </Link>

            <p className="footer"> 
               Do you like podcasts? Get the best podcast recommendations from <a href="https://thelistener.substack.com/c/days-old" className="footer_link">The Listener</a> with this special free gift.
            </p>
        </div>
        );
    }
}

export default DateSelector
