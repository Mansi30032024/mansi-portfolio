export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="about-card">
        <p>
          I'm Mansi, a Computer Science student at Chandigarh University
          passionate about building scalable web applications and solving
          real-world problems using technology.
        </p>

        <p>
          I enjoy working on full-stack projects using React, Node.js,
          Express.js, and MongoDB, and I like turning ideas into practical,
          user-friendly applications.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-box">
          <h3>💡 Passion</h3>
          <p>Full-stack development</p>
          <p>REST APIs</p>
          <p>Problem solving</p>
          <p>Building real-world applications</p>
        </div>

        <div className="about-box">
          <h3>🚀 Experience</h3>
          <p>Built full-stack applications</p>
          <p>Authentication systems (JWT)</p>
          <p>Dashboard-based projects</p>
          <p>MongoDB-based backend systems</p>
        </div>
        
        
        <div className="about-box">
          <h3>🏆 Achievements</h3>
          <p>185+ DSA problems solved on LeetCode and earned 100 Days Badge </p>
    
          <p>Top 100 Teams – Tekathon 4.0 (SIH Internal Hackathon 2025)</p>
        </div>

        <div className="about-box">
          <h3>🧠 Skills</h3>
          <p>C++</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
          <p>REST APIs</p>
          <p>SQL</p>
          <p>OOP</p>
          <p>DSA</p>
          <p>Git</p>
        </div>

      </div>
    </div>
  );
}