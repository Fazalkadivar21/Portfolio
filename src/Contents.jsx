import React from "react";
import Carousel from "./Carousel";

const About = () => {
  const data = {
    aboutData: {
      title: ["About"],
      description: [
        "Hey there! I’m Fazal, a student on a mission to become a kickass web developer. Proficient in HTML, CSS, JavaScript, Python, Java, git, Github and more. I’m all in on mastering the web technologies.",
      ],
    },
    projectsData: {
      title: ["Netflix UI clone", "Simple Tic-Tac-Toe game"],
      description: [
        "It's one of the fun projects that I have created to test my own skills. Though it's not a fully functional clone of Netflix, it's very identical to it and I have tried to make it as close as the original.",
        "A fun-to-play Tic-tac-toe game that I developed as a fun project, which is made with HTML, CSS, and JS.",
      ],
      slides: [
        [
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss1.png",
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss2.png",
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss3.png",
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss4.png",
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss5.png",
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss6.png",
          "https://raw.githubusercontent.com/Fazalkadivar21/Netflix-clone/refs/heads/main/res/ss/ss7.png",
        ],
        ["https://raw.githubusercontent.com/Fazalkadivar21/TickTackToe/refs/heads/main/preview.png"],
      ],
    },
  };

  return (
    <div className="p-7 space-y-6">
      {/* About Section */}
      {data.aboutData.title.map((title, index) => (
        <h2 className="text-2xl" key={index}>{title}</h2>
      ))}
      {data.aboutData.description.map((desc, index) => (
        <p key={index}>
          {desc}
        </p>
      ))}

      {/* Projects Section */}
      <h2 className="text-2xl">Projects</h2>
      {data.projectsData.title.map((title, index) => (
        <div className="space-y-1" key={index}>
          <h2 className="text-xl">
            {index + 1}. {title}
          </h2>
          <p className="text-sm | mx-7 | mb-4 | pb-2">
            {data.projectsData.description[index]}
          </p>
          <Carousel slides={data.projectsData.slides[index]} />
        </div>
      ))}
    </div>
  );
};

export default About;
