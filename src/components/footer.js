import React from "react";
import twitter from "../images/twitter.png"
import fb from "../images/fb.png"
import insta from "../images/insta.png"
import git from "../images/github.png"

export default function Footer() {
  return (
    <footer className="socials">
      <div><img width="20px" src={twitter} alt="" /></div>
      <div><img width="20px" src={fb} alt="" /></div>
      <div><img width="25px" src={insta} alt="" /></div>
      <div><img width="25px" src={git} alt="" /></div>
      
    </footer>
  );
}
