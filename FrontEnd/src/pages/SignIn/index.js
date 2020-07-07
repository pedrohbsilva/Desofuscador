import React, { Component } from "react";
import Form from "../../components/Form";
import FormLogin from "../../components/FormLogin";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

class SignIn extends Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <FormLogin />
        <Footer />
      </>
    );
  }
}

export default SignIn;
