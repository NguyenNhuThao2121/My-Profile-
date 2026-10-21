export type Skill = {
  name: string;
  icon: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "HTML/CSS",
    icon: "layout",
    description: "Cấu trúc và giao diện trang web",
  },
  {
    name: "JavaScript",
    icon: "code",
    description: "Tương tác động phía trình duyệt",
  },
  {
    name: "Java",
    icon: "coffee",
    description: "Lập trình hướng đối tượng & backend",
  },
  {
    name: "C#",
    icon: "hash",
    description: "Ứng dụng desktop và .NET",
  },
  {
    name: "SQL",
    icon: "database",
    description: "Truy vấn và quản lý cơ sở dữ liệu",
  },
  {
    name: "Git/GitHub",
    icon: "branch",
    description: "Quản lý phiên bản và làm việc nhóm",
  },
];
