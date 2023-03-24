
<!--Banner e logo-->

<h1 align="center">
Crud Angular
</h1>

<!-- Badges -->
<p align="center">
   <a href="https://www.linkedin.com/in/amanda-limasobrinho/">
      <img alt="Amanda Lima" src="https://img.shields.io/badge/-Amanda Lima-06202A?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/amanda-lima/crud-angular?color=06202A"/>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/amanda-lima/crud-angular?color=06202A"/>
</p>

<!-- Indice-->
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Executando</a> •
  <a href="#-utilitários">Utilitários</a> •
 <a href="#-licença">Licença</a>


## 💻 Sobre o projeto:

Este projeto foi desenvolvido com o objetivo de realizar um crud simples utilizando o framework Angular.

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Angular 12
- TypeScript
- HTML
- SCSS
- Jest
- Protractor

---

## ⚙️ Funcionalidades

  - [x]  Consumo de dados a partir de API;
  - [x]  Listagem de Usuários;
  - [x]  Cadastro de novos Usuários;
  - [x]  Edição de Usuários;
  - [x]  Exclusão de Usuários.

---


## 🚀 Como executar o projeto

``` bash
# Clone o repositório
git clone https://github.com/amanda-lima/crud-angular.git

# Acesse a pasta do projeto no terminal
cd crud-angular

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
ng serve

# O projeto inciará na porta: 4200 - acesse http://localhost:4200

```

<details>
<summary> Arquitetura e organização de pastas e arquivos</summary>

O projeto segue a arquitetura padrão do Angular, com componentes, módulos, serviços e interfaces.

- `app.component.ts` - componente principal da aplicação.
- `user.model.ts` - interface para o modelo de usuário.
- `app.component.html` - template HTML do componente principal.
- `app.component.scss` - estilos SCSS do componente principal.
- `app.module.ts` - módulo principal da aplicação.
- `app-routing.module.ts` - módulo para rotas da aplicação.
- `app.component.spec.ts` - testes unitários para o componente principal.
- `user.service.ts` - serviço para fazer a persistência dos dados no localStorage.
- `src/tsconfig.spec.json` - configuração do TypeScript para testes unitários.
- `angular.json` - arquivo de configuração do Angular.
- `package.json` - arquivo de configuração do NPM.
- `README.md` - arquivo explicando como subir o projeto e quais tecnologias foram aplicadas.

Os arquivos estão organizados em pastas de acordo com sua função:

- `src` - pasta raiz do projeto.
    - `app` - pasta com arquivos relacionados ao componente principal e outros componentes.
    - `assets` - pasta com arquivos estáticos como imagens e ícones.
    - `environments` - pasta com arquivos de configuração para diferentes ambientes (desenvolvimento, produção, etc.).
    - `e2e` - pasta com arquivos relacionados a testes end-to-end.
    - `styles` - pasta com arquivos comuns de estilos como variáveis e mixins.
    - `index.html` - arquivo HTML principal da aplicação.
    - `main.ts` - arquivo principal para inicialização da aplicação.
    - `polyfills.ts` - arquivo com polyfills para suportar diferentes navegadores.
    - `test.ts` - arquivo principal para testes unitários.
</details>