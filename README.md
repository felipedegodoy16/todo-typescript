# 📋 Gerenciador de Tarefas (Todo List)

Este projeto é uma aplicação moderna de lista de tarefas (Todo List) desenvolvida para consolidar conceitos essenciais e avançados do ecossistema React. O foco principal é a demonstração prática da manipulação de estados, efeitos colaterais e tipagem estática rigorosa, tudo estilizado com a mais recente versão do Tailwind CSS.

## 🚀 Tecnologias e Ferramentas

O projeto utiliza uma stack atualizada e performática:

-   **React 19**: Biblioteca UI para construção de interfaces componentizadas.
-   **TypeScript**: Superconjunto de JavaScript para garantir segurança de tipos e melhor experiência de desenvolvimento.
-   **Vite**: Build tool de próxima geração para um ambiente de desenvolvimento ultrarrápido.
-   **Tailwind CSS 4**: Framework CSS utility-first para estilização ágil e responsiva.

## 📚 Aprendizados e Destaques

Este projeto serve como um excelente material de estudo para os seguintes conceitos:

### Hooks do React

A aplicação faz uso intensivo dos Hooks fundamentais:

-   **`useState`**: Utilizado para o gerenciamento de estado local complexo, incluindo:
    -   Lista de tarefas (`tasks`).
    -   Estado dos modais (`isModalOpen`, `isInfosModalOpen`).
    -   Filtros da aplicação (`searchFilter`, `priorityFilter`, `statusFilter`).
-   **`useEffect`**: Aplicado para gerenciar efeitos colaterais, como a atualização dinâmica do título da página baseada no ciclo de vida do componente.
-   **Custom Hooks**: Encapsulamento de lógica reutilizável em hooks como `useTasks` e `useModal`, promovendo código mais limpo e modular.

### Funcionalidades do Projeto

-   ✅ **CRUD de Tarefas**: Criar, Ler, Atualizar e Excluir tarefas.
-   🔍 **Sistema de Filtros**:
    -   Busca por texto.
    -   Filtro por prioridade.
    -   Filtro por status (concluído/pendente).
-   📱 **Interface Responsiva**: Layout adaptável construído com Tailwind.
-   🏗️ **Arquitetura Componentizada**: Separação clara de responsabilidades (`TaskList`, `Filters`, Modals).

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1.  **Clone o repositório:**

    ```bash
    git clone <seu-repositorio-url>
    cd todo-ts
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  O projeto estará acessível em `http://localhost:5173` (ou a porta indicada pelo Vite).

---

Desenvolvido com 💙 para fins de estudo e portfólio.
