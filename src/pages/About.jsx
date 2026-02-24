export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="about-card">
        <p>
          I'm Mansi, a passionate Computer Science student at Chandigarh University
          with a strong interest in building real-world solutions through code.
          I enjoy solving complex problems using Data Structures and exploring
          Machine Learning to create intelligent systems.
        </p>

        <p>
          My journey in tech started with curiosity about how software works,
          and over time I’ve developed projects ranging from AI chatbots to
          responsive web applications. I believe in continuous learning,
          writing clean code, and contributing to meaningful projects.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-box">
          <h3>💡 What I am Passionate About</h3>
          <p>
            Problem solving, building products, learning new technologies,
            and participating in hackathons.
          </p>
        </div>

        <div className="about-box">
          <h3>🚀 Experience</h3>
          <p>
            Completed Intel Summer Training focused on Machine Learning,
            data preprocessing, and research experimentation.
          </p>
        </div>

        <div className="about-box">
          <h3>🏆 Achievements</h3>
          <p>
            Tekathon Top 100 teams, Flipkart Grid participant,
            published ML comparison research work.
          </p>
        </div>

        <div className="about-box">
          <h3>🧠 Skills</h3>
          <p>
            C++, Python, React, SQL, DSA, OOP, Web Development,
            Machine Learning fundamentals.
          </p>
        </div>
      </div>
    </div>
  );
}