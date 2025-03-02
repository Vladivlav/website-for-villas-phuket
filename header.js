const header = document.querySelector("header"); // Замените на свой селектор хедера
const headerHeight = header.offsetHeight; // Получаем высоту хедера
const sections = [
  { id: "main-page", type: "image" },
  { id: "attractive-direction", type: "dark" },
  { id: "youtube-video", type: "dark" },
  { id: "quote-with-four-men", type: "image" },
  { id: "company-owner", type: "light" },
  { id: "best-points", type: "light" },
  { id: "investments-base", type: "image" },
  { id: "prices-and-benefits", type: "light" },
  { id: "check-objects", type: "image" },
  { id: "additional-company-info", type: "dark" },
  { id: "tenth-section", type: "image" },
  { id: "our-partners", type: "light" },
  { id: "news", type: "light" },
  { id: "faq-container", type: "light" }
];

function updateHeaderStyle() {
  let activeType = "light"; // Значение по умолчанию

  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (!element) continue;

    const rect = element.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
      activeType = section.type;
      break;
    }
  }

  header.classList.remove("light", "dark", "image");
  header.classList.add(activeType);
}

window.addEventListener("scroll", updateHeaderStyle);
updateHeaderStyle(); // Вызываем сразу, чтобы хедер обновился при загрузке страницы
