import React from 'react';
import '../../styles/style.css';

export default function About() {
  return (
    <div style={{display: 'flex', flexDirection: "column", justifyContent:'space-around', alignItems:'center', height: '100vh'}}>
      <h1>Introduction</h1>
      <img id="profilePic" src="https://media-exp1.licdn.com/dms/image/C5103AQGdJeVEp2MzQg/profile-displayphoto-shrink_800_800/0/1517443732158?e=1639612800&v=beta&t=DqVMIim6Z5-yrA6UBjqav4VZATf6Kdo6GgyGlbVEAaE" alt="profile avatar"></img>
      <p>
        Hi my name is Joel. I am a 25 year old fullstack devloper web developer and a Android Mobile developer.<br/>
        I currenty reside in Minneapolis, MN. I like to play videogames, watch cartoons and anime, listen to music, and watch sports.<br/>
        Thanks for clicking on my portfolio.
      </p>
    </div>
  );
}

