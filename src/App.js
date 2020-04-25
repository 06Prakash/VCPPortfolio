import React from 'react';
import './App.css';
import StaticSideDraw from "./Components/StaticSideDraw"
import Introduction from "./Components/Introduction"
import Technology from "./Components/Technology"
import KeySkills from "./Components/KeySkills"
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <StaticSideDraw></StaticSideDraw>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <Technology></Technology>
          <Projects></Projects>
          <KeySkills></KeySkills>
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
}

export default App;
