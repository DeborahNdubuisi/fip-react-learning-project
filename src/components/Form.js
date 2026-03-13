import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form>
      <Input type="text" placeholder="Name" />
      <br />
      <Input type="email" placeholder="Email" />
      <br />
      <Button text="Submit" />
    </form>
  );
}

export default Form;