export default function Home() {
  return (
    <section className="hero">
      <h1>
        Hi, I'm <span className="accent">Mansi</span> 👩‍💻
      </h1>

      <p>
        Computer Science student passionate about DSA, Machine Learning,
        and building impactful software.
      </p>

      <div className="buttons">
        <a href="https://github.com/Mansi30032024" target="_blank">GitHub</a>
        <a href="https://leetcode.com/u/Mansiarora040m/" target="_blank">LeetCode</a>
        <a href="https://www.linkedin.com/in/mansi-arora-a43290291/" target="_blank">LinkedIn</a>
      </div>

      <a href="./public/technical resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}