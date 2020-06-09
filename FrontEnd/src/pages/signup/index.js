import React, { Component } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Form from "../../components/Form";
import FormLogin from "../../components/FormLogin";
import Footer from "../../components/Footer";

class SignUp extends Component {
  render() {
    return (
      <>
        <Header />

        <Form />
        <FormLogin />
        <Main />
        <Footer />
      </>
    );
  }
}

export default SignUp;
