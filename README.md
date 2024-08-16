# Webjump! - Desafio E-commerce

Este repositório contém três templates básicos para um e-commerce, desenvolvidos utilizando React, React Router, Axios, Vite, TailwindCSS, e json-server. Os templates incluem uma Home Page, uma Listagem de Categorias com filtros e uma Página de Contato.

## Estrutura do projeto

```
assessment-frontend/
│
├── public/
│   └── index.html                # Template HTML principal
│
├── src/
│   │
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Banner.jsx            # Banner recebendo dados Props
│   │   ├── Breadcrumb.jsx        # HTML Mockado
│   │   ├── Filters.jsx           # Lógica funcional e combo select mockado
│   │   ├── Footer.jsx            # Rodapé
│   │   ├── HeaderContent.jsx     # Logo e form de busca
│   │   ├── Main.jsx              # Estruturação dos elementos de layout
│   │   ├── NavBar.jsx            # Navegação principal de produtos
│   │   └── ToolBar.jsx           # Navegação secundária
│   │
│   ├── pages/                    # Páginas do site
│   │   ├── Contact.jsx           # Formulário de contato submitando para console.log
│   │   ├── Home.jsx              # Página de apresentação
│   │   ├── Layout.jsx            # Estrutura de layout root dos componentes
│   │   └── Products.jsx          # Lista de produtos
│   │
│   ├── lib/                      # Lib
│   │   └── supabase.js           # Conexão Supabase API
│   │
│   ├── App.jsx                   # Componente raiz da aplicação
│   ├── main.jsx                  # Ponto de entrada do React
│   ├── router.js                 # Definição das rotas da aplicação
│   └── index.css                 # Estilos globais com TailwindCSS
││
├── db/                           # Configurações adicionais do servidor
│   └── db.json                   # Mock de dados para json-server
│
├── index.html                    # Template HTML vinculando o módulo principal da aplicação (main.jsx)
├── .gitignore                    # Arquivos a serem ignorados pelo Git
├── package.json                  # Dependências e scripts do projeto
├── eslint.config.json            # Configuração do ESLint
├── postcss.config.json           # Configuração do PostCSS
├── tailwind.config.js            # Configuração do TailwindCSS
├── vite.config.js                # Configuração do Vite
└── README.md                     # Documentação do projeto

```

## Instalação

### Clone o repositório:

```
git clone https://github.com/adomoraes/webjump.git
```

### Navegue até o diretório do projeto:

```
cd webjump
```

### Instale as dependências:

```
npm install
```

### Compile o projeto e rode o preview:

```
npm run build
npm run preview
```

**Retorno CLI - BUILD**

```
> assessment-frontend@0.0.0 build
> vite build

vite v5.4.0 building for production...
✓ 105 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.31 kB
dist/assets/index-ZSHIjvKZ.css   15.35 kB │ gzip:  3.60 kB
dist/assets/index-B579wfPE.js   261.47 kB │ gzip: 86.29 kB
✓ built in 1.14s
```

**Retorno CLI - PREVIEW**

```
> assessment-frontend@0.0.0 preview
> vite preview

Port 4173 is in use, trying another one...
  ➜  Local:   http://localhost:4174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### OU inicie o servidor de desenvolvimento:

```
npm run dev
```

**Retorno CLI**

```
> assessment-frontend@0.0.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v5.4.0  ready in 114 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Supabase

### Inicializando serviço

```
// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

```

## Screenshots

### Home

[home-screenshot]

### Listagem

[categories-screenshot]

### Contato

[contact-screenshot]

## Produção

[live-project](https://adomoraes.github.io/webjump/)

## React

### Hooks Utilizados

**useState** /
**useEffect** /
**useCallback** /
**useNavigate** /
**useParams** /
**useOutletContext**

### Componentes React Router DOM

**RouterProvider** /
**Link** /
**Outlet** /
**createBrowserRouter**

## TailwindCSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Tema extendido com o pallete custom do layout

```
/tailwind.config.js

theme: {
		extend: {
			colors: {
				red: {
					500: "#CB0D1F",
					600: "#E50019",
				},
				blue: {
					500: "#00A8A9",
					600: "#019696",
				},
			},
		},
	},
```

## Contato

Eduardo Moraes <br /> [![LinkedIn][linkedin-shield]][linkedin-url] <br /> adomoraes@gmail.com

Project Link: [https://github.com/adomoraes/webjump.git](https://github.com/adomoraes/webjump.git)

<p align="right">(<a href="#readme-top">top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/eduardo-moraes-939312143/
[home-screenshot]: assets/home/
[categories-screenshot]: assets/categories/
[contact-screenshot]: assets/contato/
[live-project]: https://adomoraes.github.io/webjump/
