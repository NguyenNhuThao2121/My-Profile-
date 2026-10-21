import { Icon } from "./Icon";
import "./Footer.css";

export function Footer() {
  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">T</span>
          <div>
            <strong>Thảo — Portfolio</strong>
            <span>Sinh viên Công nghệ thông tin</span>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Thảo. Portfolio V1.
        </p>

        <button className="footer-top" onClick={toTop}>
          Về đầu trang
          <Icon name="arrow-up" width={16} height={16} />
        </button>
      </div>
    </footer>
  );
}
