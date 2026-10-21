import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import "./About.css";

const goals: { icon: "graduation" | "rocket"; title: string; text: string }[] =
  [
    {
      icon: "graduation",
      title: "Mục tiêu học tập",
      text: "Tiếp tục củng cố nền tảng lập trình, làm chủ các công nghệ web và rèn luyện tư duy giải quyết vấn đề thông qua dự án thực tế.",
    },
    {
      icon: "rocket",
      title: "Định hướng nghề nghiệp",
      text: "Trở thành lập trình viên web, xây dựng các ứng dụng hữu dụng, dễ sử dụng và liên tục học hỏi công nghệ mới.",
    },
  ];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about-inner">
        <Reveal className="about-head">
          <span className="section-tag">Về mình</span>
          <h2 className="section-title">Một sinh viên CNTT thích làm web</h2>
          <p className="section-subtitle">
            Mình đang trong quá trình học và thực hành. Dưới đây là vài thông
            tin ngắn về hướng đi hiện tại của mình.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-card" delay={80}>
            <p>
              Mình là Thảo, sinh viên Công nghệ thông tin. Mình thích xây dựng
              giao diện rõ ràng, dễ dùng và quan tâm đến cách một sản phẩm hoạt
              động từ đầu đến cuối.
            </p>
            <p>
              Trong quá trình học, mình thử sức với nhiều dự án nhỏ để hiểu rõ
              kiến thức và rèn thói quen làm việc gọn gàng, dễ bảo trì.
            </p>
          </Reveal>

          <div className="about-goals">
            {goals.map((g, i) => (
              <Reveal key={g.title} className="about-goal" delay={120 + i * 80}>
                <span className="about-goal-icon">
                  <Icon name={g.icon} width={20} height={20} />
                </span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
