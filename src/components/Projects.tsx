import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import "./Projects.css";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  const openProject = (project: Project) => setActive(project);
  const closeProject = () => setActive(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="projects-head">
          <span className="section-tag">Dự án</span>
          <h2 className="section-title">Các dự án minh hoạ</h2>
          <p className="section-subtitle">
            Ba dự án mẫu để giới thiệu cách mình tổ chức giao diện và thông tin.
            Bạn có thể thay bằng dự án thật của mình sau này.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              className="project-card"
              delay={i * 90}
              as="article"
            >
              <div className="project-card-top">
                <span className="project-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="project-tag">
                  <Icon name="code" width={14} height={14} />
                  Dự án
                </span>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.shortDescription}</p>

              <ul className="project-tech">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <button
                className="project-link"
                onClick={() => openProject(project)}
              >
                Xem chi tiết
                <Icon name="arrow-right" width={16} height={16} />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={closeProject}
        >
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeProject}
              aria-label="Đóng"
            >
              <Icon name="close" width={20} height={20} />
            </button>

            <span className="section-tag">
              <Icon name="code" width={14} height={14} />
              Chi tiết dự án
            </span>
            <h3 id="project-modal-title" className="modal-title">
              {active.name}
            </h3>
            <p className="modal-text">{active.description}</p>

            <h4 className="modal-subtitle">Điểm nổi bật</h4>
            <ul className="modal-highlights">
              {active.highlights.map((h) => (
                <li key={h}>
                  <Icon name="arrow-right" width={16} height={16} />
                  {h}
                </li>
              ))}
            </ul>

            <h4 className="modal-subtitle">Công nghệ sử dụng</h4>
            <ul className="project-tech">
              {active.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <p className="modal-note">
              Đây là dữ liệu mẫu. Bạn có thể bổ sung liên kết demo hoặc mã nguồn
              thật khi có.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
