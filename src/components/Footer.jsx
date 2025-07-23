import React from "react";
import SkinnyPlayer from "../assets/skinny-player.png"
export default function Footer() {
  return (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <img src={SkinnyPlayer} alt="Skinny Player" className="w-8 h-8" />
   
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
 <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a href="https://github.com/logicness-agency" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://img.icons8.com/?size=100&id=101795&format=png&color=ffffff" 
      alt="GitHub" 
      className="w-10 h-10"
    />
  </a>
  <a href="https://linkedin.com/in/enes-günay-331791347" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://img.icons8.com/?size=100&id=42453&format=png&color=ffffff" 
      alt="LinkedIn" 
      className="w-10 h-10"
    />
  </a>
</nav>
</footer>
  )
}