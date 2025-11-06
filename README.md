# 🧑‍💻 Lista de Usuários (Random User API)

## ✨ Visão Geral do Projeto

Este projeto é uma aplicação Single Page Application (SPA) construída com **React** que interage com a **Random User Generator API**. O objetivo é exibir uma lista de perfis de usuários, implementando funcionalidades essenciais de front-end, como **paginação** e **filtragem de dados** por nacionalidade.

## 🚀 Funcionalidades

* **Exibição de Perfis:** Carrega e exibe 16 perfis de usuários por página.
* **Paginação:** Navegação entre páginas (Próxima e Anterior) para buscar novos conjuntos de dados.
* **Filtro por Nacionalidade (País):** Permite buscar usuários de um país específico utilizando o código ISO (Ex: `BR` para Brasil, `US` para Estados Unidos).
* **Controle de Estado:** Gerenciamento do estado da aplicação (`count` da página, `searchUser` para filtro) usando `useState` e sincronização de dados com `useEffect`.
* **Experiência do Usuário (UX):** Rolagem suave automática para o topo (`backToTop`) a cada mudança de página, melhorando a usabilidade.

## 🛠️ Tecnologias Utilizadas

* **React** (Funcional Components e Hooks)
* **JavaScript (ES6+)**
* **Fetch API** (para requisições assíncronas)
* **HTML5 / CSS3**

## 📂 Estrutura de Componentes

O projeto utiliza uma abordagem de componentes reutilizáveis:

| Componente | Função Principal | Descrição |
| :--- | :--- | :--- |
| `App.js` | **Lógica de Estado e API** | Gerencia os estados (`people`, `count`, `searchUser`), realiza a busca na API (`getData`) e orquestra a paginação e o filtro. |
| `Button.js` | **Interação de Paginação** | Componente reutilizável para botões, usado para as ações de `nextPage` e `previewPage`. |
| `SearchInput.js` | **Interação de Filtro** | Componente reutilizável para entrada de texto, usado para capturar o código de nacionalidade. |
