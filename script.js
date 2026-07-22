/* ==========================================================
   LANDING PAGE
   El Gran Libro de las Infusiones Tradicionales
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ============================
       SCROLL SUAVE
    ============================ */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /* ============================
       FAQ
    ============================ */

    const perguntas = document.querySelectorAll(".faq-item h3");

    perguntas.forEach(item => {

        item.style.cursor = "pointer";

        const resposta = item.nextElementSibling;

        resposta.style.display = "none";

        item.addEventListener("click", () => {

            if (resposta.style.display === "block") {

                resposta.style.display = "none";

            } else {

                resposta.style.display = "block";

            }

        });

    });


    /* ============================
       ANIMAÇÃO DOS CARDS
    ============================ */

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .6s ease";

        observer.observe(card);

    });

});


/* ============================
   BOTÃO VOLTAR AO TOPO
============================ */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.style.position = "fixed";
botaoTopo.style.right = "25px";
botaoTopo.style.bottom = "25px";

botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";

botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";

botaoTopo.style.background = "#2E7D32";
botaoTopo.style.color = "white";

botaoTopo.style.fontSize = "22px";

botaoTopo.style.cursor = "pointer";

botaoTopo.style.display = "none";

botaoTopo.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
