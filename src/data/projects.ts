export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "library-management",
    name: "Website quản lý thư viện",
    shortDescription:
      "Ứng dụng quản lý sách, độc giả và phiếu mượn/trả cho thư viện nhỏ.",
    description:
      "Hệ thống giúp thủ thư quản lý danh mục sách, theo dõi tình trạng mượnn trả và thống kê lưu động. Giao diện đơn giản, dễ sử dụng cho người mới làm quen phần mềm.",
    technologies: ["HTML/CSS", "JavaScript", "Java", "SQL"],
    highlights: [
      "Quản lý sách và danh mục",
      "Theo dõi phiếu mượn/trả",
      "Tìm kiếm và lọc sách",
    ],
  },
  {
    id: "sales-management",
    name: "Website quản lý bán hàng",
    shortDescription:
      "Phần mềm hỗ trợ quản lý sản phẩm, đơn hàng và báo cáo doanh thu.",
    description:
      "Giải pháp dành cho cửa hàng nhỏ cần theo dõi sản phẩm, đơn hàng và doanh thu. Cho phép nhập liệu nhanh, xem báo cáo cơ bản và phân loại hàng hoá theo nhóm.",
    technologies: ["C#", "SQL", "HTML/CSS"],
    highlights: [
      "Quản lý sản phẩm & đơn hàng",
      "Báo cáo doanh thu cơ bản",
      "Phân loại theo nhóm hàng",
    ],
  },
  {
    id: "todo-app",
    name: "Todo App quản lý công việc",
    shortDescription:
      "Ứng dụng ghi và sắp xếp công việc cá nhân với giao diện gọn nhẹ.",
    description:
      "Công cụ cá nhân giúp ghi nhanh công việc, đánh dấu hoàn thành và lọc theo trạng thái. Dữ liệu lưu lại trên trình duyệt để sử dụng lại trong các phiên sau.",
    technologies: ["React", "TypeScript", "HTML/CSS"],
    highlights: [
      "Thêm và đánh dấu hoàn thành",
      "Lọc theo trạng thái",
      "Lưu dữ liệu trên trình duyệt",
    ],
  },
];
