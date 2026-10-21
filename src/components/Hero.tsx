import { profile } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import "./Hero.css";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <Reveal>
            <span className="hero-badge">
              <Icon name="sparkles" width={14} height={14} />
              Sẵn sàng học hỏi &amp; hợp tác
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              Xin chào, mình là <span className="hero-name">Thảo</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-role">{profile.role}</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-intro">{profile.intro}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("projects")}
              >
                Xem dự án
                <Icon name="arrow-right" width={18} height={18} />
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => scrollTo("contact")}
              >
                Liên hệ
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="hero-orb" aria-hidden="true" />
            <div className="hero-avatar">
              {profile.avatarPlaceholder ? (
                <div className="hero-avatar-placeholder">
                  <span>Ảnh đại diện</span>
                  <small>Thay bằng ảnh của bạn</small>
                </div>
              ) : (
                <img src="" alt="Ảnh đại diện của Thảo" />
              )}
            </div>
            <div className="hero-chip hero-chip-1">
              <Icon name="graduation" width={16} height={16} />
              CNTT
            </div>
            <div className="hero-chip hero-chip-2">
              <Icon name="rocket" width={16} height={16} />
              Web Developer
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
