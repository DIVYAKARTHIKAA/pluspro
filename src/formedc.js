import React from 'react';
import './App.css';

class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    

    }

    submituserRegistrationForm(e) {
      console.log(this.validateForm());
      
      e.preventDefault();
      if (this.validateForm()) {
          console.log(this.state);
          let fields = {};
          fields["username"] = "";
          fields["dateofbirth"] = "";
          fields["age"] = "";
          fields["weight"] = "";
          fields["diabeteslevel"] = "";
          fields["pressurelevel"] = "";
          this.setState({fields:fields});
          console.log(this.state);
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["dateofbirth"]) {
        formIsValid = false;
        errors["dateofbirth"] = "*Please enter your Date Of Birth";
      }

      if (typeof fields["dateofbirth"] !== "undefined") {
        //regular expression for email validation
        if (!fields["dateofbirth"].match(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/)) {
          formIsValid = false;
          errors["dateofbirth"] = "*Please enter your date of birth in numbers";
        }
      }

      if (!fields["age"]) {
        formIsValid = false;
        errors["age"] = "*Please enter your age";
      }

      if (typeof fields["age"] !== "undefined") {
        if (!fields["age"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["age"] = "*Please enter age in numbers";
        }
      }

      if (!fields["weight"]) {
        formIsValid = false;
        errors["weight"] = "*Please enter your weight";
      }

      if (typeof fields["weight"] !== "undefined") {
        if (!fields["weight"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["weight"] = "*Please enter your weight in digits";
        }
      }
      if (!fields["diabeteslevel"]) {
        formIsValid = false;
        errors["diabeteslevel"] = "*Please enter your diabetes level.";
      }

      if (typeof fields["diabeteslevel"] !== "undefined") {
        if (!fields["diabeteslevel"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["diabeteslevel"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["pressurelevel"]) {
        formIsValid = false;
        errors["pressurelevel"] = "*Please enter your pressure level.";
      }

      if (typeof fields["pressurelevel"] !== "undefined") {
        if (!fields["pressurelevel"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["pressurelevel"] = "*Please enter alphabet characters only.";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3 id="kri">PATIENT DETAILS</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Date Of Birth:</label>
        <input type="text" name="dateofbirth" value={this.state.fields.dateofbirth} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.dateofbirth}</div>
        <label>Age:</label>
        <input type="text" name="age" value={this.state.fields.age} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.age}</div>
        <label>Weight</label>
        <input type="text" name="weight" value={this.state.fields.weight} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.weight}</div>
        <label>Diabetes Level</label>
        <input type="text" name="diabeteslevel" value={this.state.fields.diabeteslevel} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.diabeteslevel}</div>
        <label>Pressure Level</label>
        <input type="text" name="pressurelevel" value={this.state.fields.pressurelevel} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.pressurelevel}</div>
        <input type="submit" className="button"  value="SUBMIT"/>
        </form>
    </div>
</div>

      );
  }


}

export default RegisterForm;