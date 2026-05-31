# 🏢 Zior Software Factory

Site institucional da **Zior Tecnologia** - Uma plataforma moderna e responsiva desenvolvida com React, TypeScript e tecnologias web modernas.

**[🌐 Visite o site ao vivo](https://zior-software-factory.vercel.app)**

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias](#-tecnologias)
- [Requisitos](#-requisitos)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Desenvolvimento](#-desenvolvimento)
- [Build e Deploy](#-build-e-deploy)
- [Qualidade de Código](#-qualidade-de-código)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 👀 Visão Geral

O **Zior Software Factory** é o site institucional da Zior Tecnologia, desenvolvido com as melhores práticas de desenvolvimento web moderno. A aplicação é otimizada para performance, acessibilidade e experiência do usuário.

**Características principais:**
- 🎨 Design responsivo e moderno
- ⚡ Performance otimizada com Vite
- 🔒 Tipagem segura com TypeScript
- 🎭 Animações suaves com Framer Motion
- 🧪 Testes automatizados
- 📱 Totalmente responsivo
- ♿ Acessibilidade

---

## 🛠 Tecnologias

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | ^19.2.0 | Framework UI |
| **TypeScript** | ~5.9.3 | Tipagem estática |
| **Vite** | ^7.2.4 | Build tool e dev server |
| **Framer Motion** | ^12.33.0 | Animações |
| **Lucide React** | ^0.562.0 | Ícones SVG |
| **ESLint** | ^9.39.1 | Linting |
| **Prettier** | ^3.8.1 | Code formatter |
| **Vitest** | ^4.0.18 | Testing framework |
| **React Testing Library** | ^16.3.2 | Testes de componentes |

**Composição do código:**
- 64.3% TypeScript
- 32.9% CSS
- 2.2% JavaScript
- 0.6% HTML

---

## 📦 Requisitos

- **Node.js** >= 16.x
- **npm** >= 7.x ou **yarn** >= 1.22.x

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/jorgerios7/zior-software-factory.git
cd zior-software-factory
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 📝 Scripts Disponíveis

### Desenvolvimento

```bash
npm run dev
```
Inicia o servidor de desenvolvimento com hot reload (Vite).

### Build

```bash
npm run build
```
Compila TypeScript e constrói a aplicação para produção.

### Preview

```bash
npm run preview
```
Prévia local da build de produção.

### Lint

```bash
npm run lint
```
Executa ESLint para verificar erros e avisos de código.

### Formatter

```bash
npm run format
```
Formata o código usando Prettier.

### Testes

```bash
npm run test
```
Executa a suite de testes com Vitest.

---

## 📁 Estrutura do Projeto

```
zior-software-factory/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   ├── pages/               # Páginas da aplicação
│   ├── assets/              # Imagens e mídia
│   ├── styles/              # Arquivos CSS/SCSS globais
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Ponto de entrada
├── public/                  # Arquivos estáticos
├── tests/                   # Testes unitários e de integração
├── .eslintrc.js             # Configuração ESLint
├── prettier.config.js       # Configuração Prettier
├── vite.config.ts           # Configuração Vite
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências e scripts
└── README.md                # Este arquivo
```

---

## 💻 Desenvolvimento

### Padrões de Código

- **TypeScript**: Utilize tipagem completa. Evite `any`.
- **React**: Use hooks funcionais. Prefira `const` para componentes.
- **Naming**: Use camelCase para variáveis/funções e PascalCase para componentes.
- **CSS**: Organize por módulos CSS ou use CSS-in-JS quando apropriado.

### Criando um Novo Componente

```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      <h1>{title}</h1>
    </div>
  );
};
```

### Escrevendo Testes

```typescript
// src/components/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

---

## 🏗 Build e Deploy

### Build Local

```bash
npm run build
```

A pasta `dist/` conterá os arquivos otimizados para produção.

### Deploy no Vercel

O projeto está configurado para deploy automático no Vercel:

1. Conecte o repositório ao Vercel
2. Vercel detectará automaticamente que é um projeto Vite
3. Configure a variável de build: `npm run build`
4. Configure o diretório de saída: `dist`

**Deploy Manual:**

```bash
npm run build
# Faça upload da pasta 'dist' para seu servidor
```

---

## ✨ Qualidade de Código

### Linting

```bash
npm run lint
```

O projeto usa **ESLint** com as configurações recomendadas de TypeScript e React.

### Formatação

```bash
npm run format
```

O **Prettier** garante consistência de formatação em todo o projeto.

### Testes

```bash
npm run test
```

Execute a suite de testes para validar a funcionalidade.

---

## 🤝 Contribuindo

As contribuições são bem-vindas! Para contribuir:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Diretrizes

- Mantenha o código limpo e bem formatado
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário
- Siga os padrões de código do projeto

---

## 📄 Licença

Este projeto não possui licença especificada. Para mais informações, consulte o repositório.

---

## 👥 Autor

**Jorge Rios** - [@jorgerios7](https://github.com/jorgerios7)

---

## 📞 Suporte

Para dúvidas, bugs ou sugestões:
- 📧 [Abra uma Issue](https://github.com/jorgerios7/zior-software-factory/issues)
- 🌐 [Visite o site](https://zior-software-factory.vercel.app)

---

## 🙏 Agradecimentos

Agradecimentos especiais às bibliotecas e ferramentas utilizadas neste projeto:
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

---

**Desenvolvido com ❤️ usando React e TypeScript**
