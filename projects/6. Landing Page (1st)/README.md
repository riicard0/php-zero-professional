![Imgur](https://i.imgur.com/Bym2Q2L.png)

# Projeto
<div align="center"> Acesse o projeto:

  [FOOD](https://b7web-6.vercel.app/)
  
</div>

## Índice
   - [Introdução](#-Introdução)
   - [Características Gerais](#-Características-Gerais)
   - [Estrutura dos Arquivos](#-Estrutura-dos-arquivos)
   - [Tools](#-Tools)
   - [Como Usar](#-Como-Usar)
   - [Organização da estrutura CSS](#-Organização-da-Estrutura-CSS)
   - [Fonte](#-Fonte)
   - [Licença](#-Licença)
   - [FAQ](#-FAQ)
   - [Contribuidores](#-Contribuidores)
   - [Printscreen](#-Printscreen)

&nbsp;

## 🔥 Introdução
O objetivo desse projeto é ser uma Landing Page (essa sendo a primeira), apenas para assimilação e desenvolvimento de aprendizado. Vale ressaltar que é um projeto individual e foi instruído a fazer como exercício.

&nbsp;

## ⚖ Características Gerais

- **Screen Customizada:** Uma tela de carregamento animada que mostra as seções de forma que melhore a experiência do usuário.
- **Menu interativo:** O menu interage conforme rolagem da tela.
- **Seção CTA:** Links diretos para WhatsApp, Instagram e Facebook, assim como para o CTA e Telefone.
- **Logo personalizada:** Logo fictícia personalizada criada.
- **Cardápio demonstrativo:** Foram criads 4 pratos fictícios para demonstração do cardápio.
- **Funcionários fictícios:** 2 funcionárias fictícias para demonstração dos funcionários.
- **Footer:** Rodapé personalizado com ondas criadas através do site: `https://www.softr.io/tools/svg-wave-generator`
- **Responsividade:** Melhor experiência possível também nas dimensões de tela menores e/ou versões MOBILE.

&nbsp;

## 🔮 Estrutura dos Arquivos

```plaintext
/projeto
|-- index.html
|-- README.md
|-- /src
    |-- css
        |-- sections
            |-- footer.css
            |-- header.css
            |-- home.css
            |-- menu.css
            |-- testimonials.css
        |-- button.css
        |-- import.css
        |-- screen.css
        |-- style.css
    |-- js
        |-- script.js
|-- /assets
    |-- images
        |-- all-website
            |-- favicon.io
                |-- android-chrome-192x192.png
                |-- android-chrome-512x512.png
                |-- apple-touch-icon.png
                |-- favicon.ico
                |-- favicon-16x16.png
                |-- favicon-32x32.png
                |-- site.webmanifest
        |-- cardapio-menu
            |-- dish.png
            |-- dish2.png
            |-- dish3.png
            |-- dish4.png
        |-- footer
            |-- wave (2).svg
            |-- wave.svg
        |-- header
            |-- burger-solid.svg
        |-- home
            |-- hero.png
        |-- testimonials
            |-- avatar.png
            |-- chef.png
```

&nbsp;

## 🛠 Tools

### Development

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)&nbsp;

### Workstation

![VScode](https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)&nbsp;
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)&nbsp;

### Others

- Font Awesome CDN
- Google Fonts
- Scroll Reveal
- FavIcon

&nbsp;

## ☢ Como Usar

### Pre Requisitos

  - Git
  - Visual Studio Code
  - Navegador (de sua preferência)

Obs.: Este projeto é derivado de um curso no qual faço, então ele está entre os projetos feitos até o momento.

```bash
  #repository URL
  $ https://github.com/riicard0/php-zero-professional.git
```

1. No terminal do **Git**, especifique o caminho determinado que será clonado o repositório;

```bash
  # Example
  $ cd /c/
  $ mkdir landing-page
  $ ls
  $ cd landing-page/
```

2. Clone o repositório em sua máquina local usando `git clone [URL do Repositório]`;

```bash
  #clone repository
  $ git clone https://github.com/riicard0/php-zero-professional.git
```

3. Vá até a pasta específica do projeto `./php-zero-professional/projects/6. Landing Page (1st)`;
4. Abra o arquivo `index.html` em um navegador para visualizar o site;
5. Explore as diferentes seções criadas e personalizadas para a melhor experiência possível em um website extremamente simples.
6. Para visualização/modificação do código, indicaria acessá-lo pelo "Visual Studio Code", com a extensão `Live Server`.

&nbsp;

## 💈 Organização da Estrutura CSS

1. Estrutura geral:

- style.css
    - import css geral
    - css geral: tags and atributos
    - variáveis
- import.css
    - todos os import css
- button.css
    - tudo relacionado a botões no css (exceto botões de diferentes responsividades)
- screen.css
    - todas as "screen media-query"

2. Estrutura seções:

- header.css
- home.css
- menu.css
- testimonials.css
- footer.css

Obs.: Para o "media-query" tinha a opção de deixá-lo no mesmo arquivo CSS que cada seção teve para si ou um 
arquivo separado somente para "media-query", utilizei a segunda opção.

Obs.: Classes e IDs no HTML foram organizados da seguinte maneira para melhor identificação, exemplo:
```
  #section_default
  #section_specific
    
  .section-default
  .section-specific
```

&nbsp;

## 💾 Fonte

- Vídeo-Aula principal da [Larissa Kich](https://youtu.be/8V3mw1w6h0U?si=qF4PISEk3ynxpdUi)
- Temas específicos no [Stack OverFlow](https://stackoverflow.com/)
- Vídeo-Aula no [YouTube](https://www.youtube.com)
- Pesquisas rápidas, perguntas e respostas e IA no [Google](https://www.google.com)

&nbsp;

## 📄 Licença
Sem licença até o momento.

&nbsp;

## 💭 FAQ

### > Qual a função do projeto?
Apenas desenvolver uma Landing Page simples e moderna.

### > Feito sozinho ou por video-aula?
Feito através de uma video-aula no YouTube, dentre vários vídeos escolhi esse a dedo, queria que fosse uma Landing Page moderna ou próximo disso.

### > Quantas video-aulas foram feitas?
Apenas uma.

### > Foi feito deploy do projeto?
Sim, foi feito o [Deploy](https://b7web-6.vercel.app/) do projeto através da Vercel.

&nbsp;

## 👩‍💻 Contribuidores

Agradecimentos formais a essas pessoas:

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.youtube.com/@larissakich"><img src="https://avatars.githubusercontent.com/u/76120366?v=4" width="100px;" alt="Larissa Kich"/><br /><sub><b>Larissa Kich</b></sub></a><br /><a href="https://github.com/Larissakich" title="Github">📱</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://martinsr.com"><img src="https://avatars.githubusercontent.com/u/81168692?v=4" width="100px;" alt="Ricardo Martins"/><br /><sub><b>Ricardo Martins</b></sub></a><br /><a href="https://github.com/riicard0" title="Github">📱</a></td>
    </tr>
  </tbody>
</table>

&nbsp;

## 📸 Printscreen

### Imagem 1:
![Imgur](https://i.imgur.com/f7lOso6.png)

### Imagem 2:
![Imgur](https://i.imgur.com/wFlZYOX.png)

### Imagem 3:
![Imgur](https://i.imgur.com/TqsvWyu.png)

### Imagem 4:
![Imgur](https://i.imgur.com/3s51fAD.png)

### Full Website:
![Imgur](https://i.imgur.com/MJEdKGf.jpg)