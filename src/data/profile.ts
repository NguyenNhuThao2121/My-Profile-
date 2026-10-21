export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "github" | "phone";
  /** true nếu đây là giá trị giữ chỗ, cần thay bằng thông tin thật */
  placeholder: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "thao@example.com",
    href: "mailto:thao@example.com",
    icon: "mail",
    placeholder: true,
  },
  {
    label: "GitHub",
    value: "github.com/thao",
    href: "https://github.com/",
    icon: "github",
    placeholder: true,
  },
  {
    label: "Số điện thoại",
    value: "+84 0xx xxx xx xx",
    href: "tel:+840xxxxxxxxx",
    icon: "phone",
    placeholder: true,
  },
];

export const profile = {
  name: "Thảo",
  role: "Sinh viên Công nghệ thông tin",
  intro:
    "Mình đang học và thực hành phát triển phần mềm, đặc biệt quan tâm đến xây dựng ứng dụng web. Mục tiêu của mình là tạo ra những sản phẩm nhỏ gọn, rõ ràng và dễ sử dụng.",
  avatarPlaceholder: true,
};
