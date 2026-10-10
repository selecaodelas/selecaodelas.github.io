# Seleção Delas — Landing page do Grupo VIP

Página simples, feita primeiro para celular, que leva a visitante ao grupo de promoções no WhatsApp.
HTML, CSS e JavaScript puros (ES Modules), sem frameworks e sem etapa de build.

## Abrir o site

Basta dar **dois cliques no `index.html`** — funciona direto no navegador, sem servidor.

## Editar o conteúdo

Todo o conteúdo está no **`index.html`**, separado por comentários
(`CABEÇALHO`, `APRESENTAÇÃO`, `BENEFÍCIOS`, `RODAPÉ`). O link do grupo fica no `href` do botão.

- Cores e fontes: `src/css/tokens.css`
- Imagens: `assets/img/`
- Depois de alterar CSS/JS, aumente o número em `?v=3` no `index.html` para o navegador não usar a versão antiga em cache.

## Estrutura

```
├── index.html            # Conteúdo + estrutura semântica (HTML estático)
├── assets/img/           # logo, selo, foto, favicon, og-image
└── src/
    ├── css/
    │   ├── main.css         # Ordem via @layer
    │   ├── tokens.css       # Paleta rosa, tipografia, espaços
    │   ├── base.css         # Reset
    │   ├── components.css   # Layout de CELULAR (base, padrão BEM)
    │   ├── responsive.css   # Ajustes para tablet (768px) e PC (1024px)
    │   └── utilities.css    # Animações
    └── js/
        └── main.js          # Animação de entrada + rastreamento de cliques (opcional)
```

O site é HTML estático: carrega mais rápido, aparece melhor no Google e funciona mesmo sem JavaScript.

## Responsividade (mobile first)

O CSS base é o layout de celular. `responsive.css` só **acrescenta** regras com `min-width`:

| Tela | Layout |
|---|---|
| < 360px | cards empilhados |
| 360–767px | celular: tudo centralizado, botão largura total, 2 cards lado a lado |
| 768px+ | tablet: textos maiores, botão com largura automática |
| 1024px+ | PC: mesma coluna centralizada (foto em cima, texto embaixo), com mais espaço |

## Publicar

Veja o `Guia-de-Hospedagem.pdf` (mesmo processo: Netlify/Vercel/GitHub Pages + domínio).
Depois de publicar, troque o `og:image` do `index.html` por URL absoluta.
