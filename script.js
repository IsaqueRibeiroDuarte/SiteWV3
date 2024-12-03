// Script para o menu colapsável
// document.querySelector(".menu-toggle").addEventListener("click", function () {
//   document.querySelector(".nav-menu ul").classList.toggle("active");
// });


new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  // spaceBetween: 70,

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
    },
  }
});


// Seleciona todos os links de "Saiba Mais"
const cardLinks = document.querySelectorAll('.card-link');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Função para abrir o modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show'); // Adiciona a classe 'show' para abrir o modal horizontalmente
    }, 10); // Pequeno atraso para a transição funcionar
}

// Função para fechar o modal
function closeModal(modal) {
    modal.classList.remove('show'); // Remove a classe 'show' para iniciar a transição de fechamento
    setTimeout(() => {
        modal.style.display = 'none'; // Esconde o modal após a transição
    }, 500); // O tempo aqui deve corresponder à duração da transição
}

// Adiciona o evento de clique a cada link "Saiba Mais"
cardLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetModalId = this.getAttribute('data-target');
        openModal(targetModalId); // Chama a função para abrir o modal correto
    });
});

// Adiciona evento de clique para fechar cada modal ao clicar no botão de fechar
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal); // Chama a função para fechar o modal
    });
});

// Fecha o modal ao clicar fora do conteúdo (opcional)
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Exibir popup da LGPD
document.addEventListener("DOMContentLoaded", function () {
  const lgpdPopup = document.getElementById("lgpd-popup");
  const aceitarBtn = document.getElementById("lgpd-aceitar");

  // Verifica se o consentimento já foi dado
  if (!localStorage.getItem("lgpdConsent")) {
    lgpdPopup.style.display = "block";
  }

  // Ao clicar em "Aceitar"
  // Criado e Desenvolvido por: Isaque Ribeiro Duarte → 04/11/2024
  aceitarBtn.addEventListener("click", function () {
    localStorage.setItem("lgpdConsent", "true");
    lgpdPopup.style.display = "none";
  });
});

// Abrir links sociais
const socialLinks = document.querySelectorAll(".social-icon a");
socialLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    const url = link.href;
    window.open(url, "_blank");
  });
});

// Script para abrir link em nova aba
document.querySelector('.lgpd-popup a').addEventListener('click', function(event) {
  event.preventDefault();
  window.open('privacyPolicy.html', '_blank');
});

// Fechar o POPUP LGPD (opcional)
document.querySelector('.close-popup').addEventListener('click', function() {
  document.querySelector('.lgpd-popup').style.display = 'none';
});

