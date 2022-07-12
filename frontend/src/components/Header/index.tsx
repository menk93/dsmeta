import logo from "../../assets/img/logo.svg";

import "./style.css";

export const Header = () => {
  return (
    <>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo" />
      </div>
    </>
  );
};
