# Seleção Delas — Landing page do Grupo VIP

Página simples, feita primeiro para celular, que leva a visitante ao grupo de promoções no WhatsApp.
HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.

## Abrir o site

Basta dar **dois cliques no `index.html`** — funciona direto no navegador, sem servidor.

## Editar o conteúdo

Todo o conteúdo está no **`index.html`**, separado por comentários
(`CABEÇALHO`, `APRESENTAÇÃO`, `BENEFÍCIOS`, `RODAPÉ`). O link do grupo fica no `href` do botão.

- Cores e fontes: `src/css/tokens.css`
- Imagens: `assets/img/`
- Depois de alterar CSS/JS, aumente o número em `?v=12` no `index.html` para o navegador não usar a versão antiga em cache.

## Versões do site

| Versão | Arquivo | Link no GitHub Pages |
|---|---|---|
| Normal | `index.html` | `https://SEU-USUARIO.github.io/` |
| Natal | `natal/index.html` | `https://SEU-USUARIO.github.io/natal/` |

As duas usam o mesmo CSS (`src/css`). A de Natal carrega também `src/css/tema-natal.css`
(cores vermelho/verde/dourado) e usa as imagens de `assets/img/natal/`.
Para criar outra versão (ex.: Black Friday), copie a pasta `natal`, renomeie e troque textos, imagens e tema.

## Botões de aparência

No topo de cada página há botões para trocar a aparência (a escolha fica salva no navegador):

| Página | Opções | Padrão |
|---|---|---|
| Normal | ☀️ claro · 🌙 escuro | claro |
| Natal | ☀️ claro · 🌙 escuro · 🎄 Natal (fundo vermelho) | Natal |

O padrão de cada página é o atributo `data-tema-padrao` na tag `<html>`.
Cores: versão normal em `src/css/temas.css`; versão de Natal em `src/css/tema-natal.css`.

## Estrutura

```
├── index.html            # Versão normal (HTML estático)
├── natal/index.html      # Versão de Natal
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
        └── main.js          # Botões de tema + animação de entrada + rastreamento de cliques
```

O site é HTML estático: carrega mais rápido, aparece melhor no Google e funciona mesmo sem JavaScript.

## Responsividade (mobile first)

O CSS base é o layout de celular. `responsive.css` só **acrescenta** regras com `min-width`:

| Tela | Layout |
|---|---|
| até 767px | celular: tudo centralizado, botão largura total, um card por linha |
| 768px+ | tablet: textos maiores, cards lado a lado |
| 1024px+ | PC: mesma coluna centralizada (logo à esquerda, foto de perfil centralizada no topo), com mais espaço |

## Publicar

Veja o `Guia-de-Hospedagem.pdf` (mesmo processo: Netlify/Vercel/GitHub Pages + domínio).
Depois de publicar, troque o `og:image` do `index.html` por URL absoluta.
