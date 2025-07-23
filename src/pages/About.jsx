import React from "react";
import TextType from "../components/TextType";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main>
    <div className=" text-7xl font-bold mb-8 min-h-screen bg-beigeLight text-textPrimary p-9 text-center flex items-center justify-center" >
      <TextType
        text={[
          "Hi, I’m Enes. I’m 27 and just started coding",
          "This is my project for a web development bootcamp.",
          "My code is on GitHub: github.com/logicness-agency/dog-breed-explorer",
          "Thank you :)"
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="|"
      />

      <div>
        
      </div>
      
    </div>
    <Footer/>
    </main>



  );
}
