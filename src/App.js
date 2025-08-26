import "./App.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
return (
  <div className="card">
    <Avater />
    <div className="data">
      <Intro/>
      
      <SkillList />
    </div>
  </div>
);
}

function Avater() {

}

function Intro() {

}

function SkillList() {

}

function Skill() {

}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
