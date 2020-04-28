import React from "react";
import "./Footer.css";
/*allows to insert our logo "team valor" in the footer */
/*permet d'insérer notre logo "team valor" dans le footer*/
function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="/img/teamvalor.png" alt="logo valor" className="valor" />
      </div>
    </footer>
  );
}

export default Footer;
