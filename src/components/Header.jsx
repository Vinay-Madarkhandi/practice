import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div>
      <h1 className="names">header</h1>
      <p>
        {props.name},{props.age}
      </p>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Header;
