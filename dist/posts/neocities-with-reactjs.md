# Neocities com ReactJS
Neocities with ReactJS

A um tempo atrás conheci o Neocities e achei legal a ideia de conseguir hospedar sites estáticos com até 1GB de armazenamento local, sua proposta de criar uma espécie de "<a href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities" target="_blank">Geocities</a>" (uma antiga plataforma de hospedagem de sites estáticos) open source e que não vende suas informações para anunciantes me atraiu para criar uma página ao estilo portfólio ou site pessoal. 

Passando o momento de curiosidade ao descobrir o Neocities, decidi colocar a mão na massa e tentar criar alguma coisa utilizando páginas estáticas (html, css e js local) e yep, depois de uns dias pronto finalmente estava no ar e... bem, achei aquilo simples demais, não na questão de facilidade de uso mas sim as páginas eram basicamente cópia e cola de outras, com alterações feitas a mão para o conteúdo interno! Assim voltamos ao modelo antigo de sites que copiavam e colavam um montante de código só para servir uma página que teria exatamente os mesmos elementos que as outras e só mudava o conteúdo de publicação da mesma... isso forçaria a cada clique em um link interno do site, toda a página teria que ser carregada de novo (e o neocities demora para carregar) e para manter isso também é uma dor de cabeça, uma alteração no documento teria que fazer isso em todos com a mesma estrutura. 

Neste momento eu estava estudando ReactJS e esse mundo das SPAs (Single Page Aplications), foi aí que pensei: "Será que funcionaria com ReactJS?". Bem, se SPAs normalmente são uma aplicação inteira que é carregada dinamicamente no navegador do usuário, teoricamente seria possível rodar em hospedagem estática, como o neocities.

```
yarn vite@latest
yarn create vite my-vue-app --template vue
```

Assim comecei a desenvolver o site do zero, agora tentando criar utilizando componentes, rotas e tudo o mais.

# Hospedagem estática não há backend ativo

Isso significa que tudo teria que rodar no lado do cliente, não sendo possível requisitar um recurso utilizando o servidor. Para que isso fosse possível, bastaria criar várias páginas com seus componentes e alternar entre elas no ReactJS. Humm, eu não conhecia ainda como fazer isso. Pesquisando encontrei um tal de "<a href="https://reactrouter.com/en/main" target="_blank">React Router DOM</a>" que por sinal é bem simples de usar, onde a página principal é este componente, que abriga links para outros componentes (que seriam as páginas). 

A estrutura ficou mais ou menos assim:

```
- public
    - posts
    - images
    - badges
    icon.ico
- src
    - assets
    - components
    - pages
        index.tsx
        AboutPage.tsx
        404.tsx
        Experiments.tsx
        ArticlePage.tsx
        Posts.tsx
        ...
    App.css
    App.tsx
    index.css
    main.tsx
    ...
index.html
package.json
...
```

# Posts

Com tudo pronto e funcionando, era possível navegar entre as páginas da aplicação sem precisar carregar tudo de novo no servidor. Mas era necessário pensar nos posts, que podem se tornar muitos com o passar do tempo e para não cair no mesmo problema anterior de precisar "copiar e colar" páginas apenas para carregar o conteúdo, pensei em uma maneira de pegar somente o necessário e renderizar na página. Pensei em um conceito de "API" onde as requisições seriam estáticas, utilizando arquivo json para informações dos posts e, como eram postagens, pensei em utilizar arquivos markdown. 

Continua...
