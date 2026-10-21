import { contactLinks } from "../data/profile";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <Reveal className="contact-head">
          <span className="section-tag">Liên hệ</span>
          <h2 className="section-title">Cùng trao đổi nhé</h2>
          <p className="section-subtitle">
            Bạn có thể liên hệ với mình qua các kênh bên dưới. Một số thông tin
            đang là giữ chỗ — mình sẽ cập nhật khi có dữ liệu thật.
          </p>
        </Reveal>

        <div className="contact-grid">
          {contactLinks.map((link, i) => (
            <Reveal
              key={link.label}
              className="contact-card"
              delay={i * 80}
              as="article"
            >
              <span className="contact-icon">
                <Icon name={link.icon as IconName} width={22} height={22} />
              </span>
              <div className="contact-meta">
                <span className="contact-label">{link.label}</span>
                <a
                  href={link.href}
                  className="contact-value"
                  target={link.icon === "github" ? "_blank" : undefined}
                  rel={
                    link.icon === "github"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.value}
                </a>
              </div>
              {link.placeholder && (
                <span className="contact-placeholder">
                  Giữ chỗ — cần thay
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
