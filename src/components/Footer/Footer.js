import React from "react";
import Logo from "@/assets/logofooter.png";
import './Footer.css'



export default function Footer() {
  return (
    <footer>
      <div className="blockfooter">
        <img src={Logo} alt="logo Kasa blanc"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}