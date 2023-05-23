const toggleMenu = document.querySelector(".toggle-menu");
const mobileNav = document.querySelector(".header-actions");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
});

// const links = document.querySelectorAll(".help-banner-faq h4");
// links.forEach((baba) => {
//     baba.addEventListener("click", () => {
//     baba.nextElementSibling.classList.toggle("open");
//     baba.querySelector("i").classList.toggle("open");
//     });
// });

const faqs = document.querySelectorAll(".faq-question h4");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("open");
    faq.querySelector("i").classList.toggle("open");
    });
});

const faqNav = document.querySelectorAll(".faq-nav-link");
const faqContent = document.querySelectorAll(".faq-tab-content");
faqNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaq();
    
    faq.classList.add("active");
   
    const activeFaqContent = document.querySelector(`#${faq.id}-content`);
    removeActiveFaqContent();
    activeFaqContent.classList.add("active");
  });
});

function removeActiveFaq() {
  faqNav.forEach((faq) => {
    faq.classList.remove("active");
  });
}

function removeActiveFaqContent() {
  faqContent.forEach((faq) => {
    faq.classList.remove("active");
  });
}