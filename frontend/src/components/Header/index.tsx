import logo from "../../assets/img/logo.svg";

import "./style.css";

export const Header = () => {
  return (
    <>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </>
  );
};
