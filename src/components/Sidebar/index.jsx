import React from "react";
import "./index.sass";
import Avatar from "./../../img/avatar.png";
import SocialNetWorks from "../SocialNetworks";
import InformationContainer from "../InformationContainer";

const Sidebar = () => {
  return (
    <aside id={"sidebar"}>
      <img src={Avatar} alt={"Edilson Alexandre Cuamba"} />
      <p className={"title"}>Desenvolvedor</p>
      <SocialNetWorks />
      <InformationContainer/>
      <a href={"#"} className={"btn"}>
        Downaload de curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
