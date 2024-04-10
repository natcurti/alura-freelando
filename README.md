# 💻 Freelando

Este projeto simula as etapas de cadastro em um site. Selecionamos o perfil desejado (podendo ser cliente ou profissional freela), o interesse, e preenchemos os dados no formulário. Ao fazer o cadastro, você pode efetuar o login na aplicação.

## 💻 Tecnologias utilizadas

Para construção desse projeto foram utilizados:

- React + Vite
- Emotion
- Gerenciamento de Estado: ContextAPI
- Axios

## 🚀 Instalação

Após clonar o projeto, acesse o diretório e digite o comando abaixo para instalar as dependências necessárias:

```
npm install
```

Depois você pode rodar a aplicação com o comando:

```
npm run dev
```

## 📕 Aprendizados

Neste projeto utilizamos uma API local para fazer a conexão com o back-end da aplicação. Ao preencher as etapas de cadastro, o novo usuário é enviado para a API e a partir de então é possível fazer o login com o email e senha utilizados.
Utilizamos o axios para tratar das requisições à API, e armazenamos o token de acesso e o refresh token na Session Storage do navegador. Para auxiliar nesse processo criamos uma classe StoreToken e métodos estáticos.
