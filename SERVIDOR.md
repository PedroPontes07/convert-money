# 🚀 Como rodar o servidor

Existem 3 formas fáceis de rodar o projeto em um servidor:

## **Opção 1: Live Server (Recomendado - Mais fácil)**

1. Instale a extensão **Live Server** no VS Code
   - Abra Extensions (Ctrl + Shift + X)
   - Procure por "Live Server"
   - Clique em Install

2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"
4. Seu navegador abrirá automaticamente em `http://localhost:5500`

---

## **Opção 2: Usar um servidor online gratuito**

- **GitHub Pages**: Faça push do seu projeto no GitHub e ative Pages
- **Netlify**: Arraste a pasta para https://netlify.com
- **Vercel**: Faça upload em https://vercel.com

---

## **Opção 3: Instalar Node.js e usar servidor Express**

1. Baixe Node.js em https://nodejs.org (versão LTS)
2. Reinicie o VS Code após instalar
3. Execute no terminal:
   ```
   npm init -y
   npm install express
   ```
4. Crie um arquivo `app.js`:
   ```javascript
   const express = require('express');
   const app = express();
   
   app.use(express.static('.'));
   
   app.listen(3000, () => {
       console.log('Servidor rodando em http://localhost:3000');
   });
   ```
5. Execute: `node app.js`

---

## ✅ Recomendação:
Use a **Opção 1 (Live Server)** - é a mais rápida e não requer instalações adicionais!
