import { skills } from "../data/skills";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <Reveal className="skills-head">
          <span className="section-tag">Kỹ năng</span>
          <h2 className="section-title">Công nghệ đang học &amp; sử dụng</h2>
          <p className="section-subtitle">
            Mình liệt kê các công nghệ đã tiếp xúc trong quá trình học. Chưa đánh
            giá mức độ để tránh thông tin chưa chính xác.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Reveal
              key={skill.name}
              className="skill-card"
              delay={i * 70}
              as="article"
            >
              <span className="skill-icon">
                <Icon name={skill.icon as IconName} width={22} height={22} />
              </span>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
