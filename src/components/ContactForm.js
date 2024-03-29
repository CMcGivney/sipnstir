import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Select } from "semantic-ui-react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
    numGuests: 0,
    startTime: "",
    endTime: "",
    location: "",
    mobileBar: "",
    glassware: "",
    typeOfEvent: "",
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      dates: "mm/dd/yyyy",
      message: "",
      numGuests: 0,
      startTime: "",
      endTime: "",
      location: "",
      mobileBar: "",
      glassware: "",
      typeOfEvent: "",
    });
    alert("Message Sent");
    this.props.history.push("/");
  }

  handleFailToSend = () => {
    window.open("mailto:seanpalmer155@gmail.com?subject=Quote Request");
    this.props.history.push("/");
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      message,
      dates,
      numGuests,
      startTime,
      endTime,
      location,
      mobileBar,
      glassware,
      typeOfEvent,
    } = this.state;

    let templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Sean Palmer",
      message_html: message,
      request_dates: dates,
      numOfGuests: numGuests,
      startTime: startTime,
      endTime: endTime,
      location: location,
      mobileBar: mobileBar,
      glassware: glassware,
      typeOfEvent: typeOfEvent,
    };
    const EMAILJS_KEY = process.env.REACT_APP_EMAILJS_KEY;

    emailjs.send("sipnstir", "sipnstir", templateParams, EMAILJS_KEY).then(
      (response) => {
        if (response.status === 200) {
          this.resetForm();
        }
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        if (err) {
          alert("Sorry Message Failed at this time");
          this.handleFailToSend();
        }
        console.log("FAILED...", err);
      }
    );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ margin: "0 1rem" }}>
        <Form.Group widths="equal" className="formComponents">
          <Form.Input
            autoFocus
            placeholder="First Last"
            label="Full Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
          <Form.Input
            placeholder="Sample@aol.com"
            label="Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Form.Input
            placeholder="(xxx)-xxx-xxxx"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            label="Phone"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            required
          />
        </Form.Group>

        <Form.Group widths="equal" className="formComponents">
          <Form.Input
            name="dates"
            label="Date of Event"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          ></Form.Input>
          <Form.Input
            name="numGuests"
            label="Number of Guests"
            type="number"
            min="1"
            placeholder="1"
            value={this.state.numGuests}
            onChange={this.handleChange}
            required
          />
          <Form.Field
            control={Select}
            label="Type of Event"
            name="typeOfEvent"
            placeholder="Type of Events"
            options={typeOfEventOptions}
            value={this.state.typeOfEvent}
            onChange={this.handleChange}
            required
          />
        </Form.Group>

        <Form.Group widths="equal" className="formComponents">
          <Form.Input
            name="startTime"
            label="Start Time"
            type="time"
            value={this.state.startTime}
            onChange={this.handleChange}
            required
          ></Form.Input>
          <Form.Input
            name="endTime"
            label="End Time"
            type="time"
            value={this.state.endTime}
            onChange={this.handleChange}
            required
          ></Form.Input>
          <Form.Input
            name="location"
            placeholder="City, Event Space, Private Home, etc"
            label="Location of Event"
            value={this.state.location}
            onChange={this.handleChange}
            required
          ></Form.Input>
        </Form.Group>
        <Form.Group className="radioStyle">
          <div className="radioBtn">
            <label style={{ textDecoration: "underline", margin: ".5rem" }}>
              Mobile Bar Rental?
            </label>
            <Form.Radio
              label="Yes"
              type="radio"
              name="mobileBar"
              value="yes"
              id="yes"
              checked={this.state.mobileBar === "yes"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="No"
              type="radio"
              name="mobileBar"
              value="no"
              id="no"
              checked={this.state.mobileBar === "no"}
              onChange={this.handleChange}
            />
          </div>
          {/* </Form.Group>
        <Form.Group className="radioBtn"> */}
          <div className="radioBtn">
            <label style={{ textDecoration: "underline", margin: ".5rem" }}>
              Glassware Choice
            </label>
            <Form.Radio
              label="Disposable"
              type="radio"
              name="glassware"
              value="Disposable"
              id="Disposable"
              checked={this.state.glassware === "Disposable"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Glass"
              type="radio"
              name="glassware"
              value="Glass"
              id="Glass"
              checked={this.state.glassware === "Glass"}
              onChange={this.handleChange}
            />
          </div>
        </Form.Group>
        <Form.TextArea
          placeholder="Message"
          label="Message"
          name="message"
          rows="10"
          cols="50"
          onChange={this.handleChange}
          value={this.state.message}
          required
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    );
  }
}
const typeOfEventOptions = [
  { key: "w", text: "Wedding", value: "Wedding" },
  { key: "c", text: "Corporate", value: "Corporate" },
  { key: "b", text: "Birthday", value: "Birthday" },
  { key: "e", text: "Wine Education", value: "Wine Education" },
  { key: "cc", text: "Cocktail Classes", value: "Cocktail Classes" },
  { key: "cm", text: "Cellar Management", value: "Cellar Management" },
  { key: "o", text: "Other", value: "Other" },
];

export default withRouter(ContactForm);
