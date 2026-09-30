const projects = [
  {
    title: "Aurora",
    category: "Branding · Identidad visual",
    description: "Sistema de identidad visual construido alrededor de una idea de luz, movimiento y contraste. El proyecto explora una identidad flexible para aplicaciones digitales e impresas.",
    year: "2024",
    tools: "Identidad · Dirección de arte"
  },
  {
    title: "Forma",
    category: "Editorial · Dirección de arte",
    description: "Proyecto editorial centrado en el diálogo entre tipografía, ritmo y espacio. Una propuesta que convierte la composición en parte esencial del contenido.",
    year: "2024",
    tools: "Editorial · Tipografía"
  },
  {
    title: "Flora",
    category: "Ilustración · Serie gráfica",
    description: "Serie de ilustraciones inspirada en formas orgánicas y elementos botánicos. La paleta y las texturas construyen un lenguaje visual cálido y experimental.",
    year: "2025",
    tools: "Ilustración · Arte digital"
  },
  {
    title: "Umbral",
    category: "Fotografía · Concepto visual",
    description: "Exploración fotográfica sobre luz, sombra y espacios cotidianos. Una colección construida desde una mirada minimalista y atmosférica.",
    year: "2025",
    tools: "Fotografía · Dirección visual"
  },
  {
    title: "Círculo",
    category: "Branding · Sistema visual",
    description: "Identidad para una marca contemporánea donde la geometría y la repetición funcionan como elementos principales del sistema gráfico.",
    year: "2025",
    tools: "Branding · Sistema gráfico"
  },
  {
    title: "Materia",
    category: "Editorial · Publicación",
    description: "Publicación experimental que investiga la relación entre imagen, texto y materialidad. El resultado combina composición editorial y fotografía.",
    year: "2026",
    tools: "Editorial · Dirección de arte"
  }
];

const loader = document.getElementById("loader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");
const modal = document.getElementById("projectModal");
const modalVisual = document.getElementById("modalVisual");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalYear = document.getElementById("modalYear");
const modalTools = document.getElementById("modalTools");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hidden"), 500);
});

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !matches);
    });
  });
});

function openProject(index) {
  const project = projects[index];
  if (!project) return;

  const card = document.querySelector(`[data-project="${index}"]`);
  const imageClass = [...card.querySelector(".project-image").classList]
    .find(cls => cls.startsWith("image-"));

  modalVisual.className = `modal-visual ${imageClass || ""}`;
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  modalYear.textContent = project.year;
  modalTools.textContent = project.tools;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-image").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    openProject(Number(card.dataset.project));
  });
});

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeProject();
  }
});
