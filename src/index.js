import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


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
   return <img className="avater" src="omolade.jpg"  alt="Ajala Omolade" />;
}

function Intro() {
  return   (
 <div>
<h1 className="header">Ajala Omolade</h1>
<p>
 Aspiring Software Developer and also a student at Udemy.
  When I'm not learning a course, I do other things like watching
  movies, making hair for people and also making Graphic Design.
</p>
</div>
);    
}

function SkillList() {
return (
  <div className="skill-list">
    <Skill skill="React" emoji="💪"/>
    <Skill skill="HTML" emoji="💪"/>
    <Skill skill="CSS" emoji="💪"/>
    <Skill skill="JavaScript" emoji="💪"/>
  </div>
);
}

function Skill(props) {
return (
  <div className="skill"> 
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
    </div>
);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
 
root.render(
   <StrictMode>
    <App />
  </StrictMode>
);

