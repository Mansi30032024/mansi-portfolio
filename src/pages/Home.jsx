export default function Home() {
  return (
    <section className="hero">
      <h1>
        Hi, I'm <span className="accent">Mansi</span> 👩‍💻
      </h1>

      <p>
       Computer Science student and full-stack developer passionate about building scalable web applications, REST APIs, and real-world software solutions. Skilled in React, Node.js, Express.js, MongoDB, and problem solving with C++.     
      </p>

      <div className="buttons">
        <a href="https://github.com/Mansi30032024" target="_blank">GitHub</a>
        <a href="https://leetcode.com/u/Mansiarora040m/" target="_blank">LeetCode</a>
        <a href="https://www.linkedin.com/in/mansi-arora-a43290291/" target="_blank">LinkedIn</a>
      </div>

      <a href="./public/23BCS12156_Mansi_one.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}