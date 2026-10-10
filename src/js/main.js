/**
 * Comportamentos da página (melhoria progressiva — o site funciona sem JS).
 *
 * Script clássico (não-módulo) para funcionar também abrindo o
 * index.html direto do computador (file://), sem servidor.
 */
(function () {
  'use strict';

  /** Animação suave de entrada dos elementos `.reveal`. */
  function iniciarRevelacao() {
    var elementos = document.querySelectorAll('.reveal');
    var reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduzirMovimento || !('IntersectionObserver' in window)) {
      elementos.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.12 });

    elementos.forEach(function (el) { observador.observe(el); });
  }

  /** Envia o clique do botão ao Meta Pixel / Google Analytics, se instalados. */
  function iniciarRastreamento() {
    document.addEventListener('click', function (evento) {
      var botao = evento.target.closest('[data-cta]');
      if (!botao) return;
      var dados = { location: botao.dataset.cta };
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead', dados);
      if (typeof window.gtag === 'function') window.gtag('event', 'join_group_click', dados);
    });
  }

  iniciarRevelacao();
  iniciarRastreamento();
})();
