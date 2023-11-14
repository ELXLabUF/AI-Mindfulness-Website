import React from 'react';
import { useNavigate } from 'react-router-dom';

import './AboutUs.css'

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us-page">
      <div className="background-image"></div>
      {/* <div className="message-container">
        <h1>Thank you for your participation and interest in Mindfulness!</h1>
        <p> We are a group of Researchers coming together to provide you with personalized meditation and help increase awareness and motivation around mindfulness.
        </p>
        <h2>Meet The Team</h2>
        <h3>Dr Wang</h3>
        <h3>Dr Grindlewald</h3>
        <div className="button-container">
          <button className="regenerate-button" onClick={handleRegenerateRecommendation}>Regenerate Recommendation</button>
          <button className="repeat-button" onClick={handleRepeatMeditation}>Repeat Meditation</button>
        </div>
  </div> */}
    <div className="about-us-message-container">
      <section className="about-us-section">
        <div className="about-us-message">
          <h1>You have been randomly selected to participate in the non-AI version of this study.</h1>
          <h1>Please follow this link to to the non-AI site.</h1>
        </div>
        <div className="about-us-contact">
          <h2><a href="https://elxlabuf.github.io/Mindfulness-Website-non-AI-version/">Non-AI Site</a></h2>
        </div>
        <div className="about-us-meditating">
          <h3>Keep Meditating.</h3>
        </div>
      </section>
    </div>
    </div>
  );
}

export default AboutUs;
