import React, { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <hr />
      <center>&copy; Ajay Mankali Exports and Imports {props.year} and {props.month}</center>
    </Fragment>
  );
};

export default Footer;
