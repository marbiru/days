import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.setDate = date => { 
            this.setState({date: date});
            console.log(date);
        };
    }

    render() {
        return (
            <Col className="page-content">
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

                <div>
                    <button class="button" id="submit" type="submit" name="submit">LET'S&nbsp;GO</button>
                </div>

                <p className="footer"> 
                   Do you like podcasts? Get the best podcast recommendations from <a href="https://thelistener.substack.com/c/days-old" className="footer_link">The Listener</a> with this special free gift.
                </p>
            </Col>
        );
    }
}

export default DateSelector
