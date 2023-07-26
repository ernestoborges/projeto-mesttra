# Projeto mesttra
> Gerenciador de reuniões.

<nav>
    <h2>Sumário</h2>
    <ul>
        <li><a href="#intro">Introdução</a></li>
        <li><a href="#install">Instalação</a></li>
        <li><a href="#structure">Estrutura</a></li>
        <li><a href="#docs">Documentos</a></li>
        <li><a href="#contribution">Contribuição</a></li>
    </ul>
</nav>

<section id="intro">
    <h2>Introdução</h2>
    <p>Este projeto é uma ideia que surgiu a partir de um interesse comum de um grupo de alunos do 1000devs 2023, com o objetivo de trabalhar juntos em um projeto e compartilhar um repositório aqui no GitHub.</p>
    <p>O sistema desenvolvido é um projeto Fullstack (Front-end e Back-end) que consiste em uma plataforma web na qual os usuários cadastrados podem sugerir e agendar reuniões sobre diversos assuntos. Os outros usuários podem comentar e confirmar presença nas reuniões marcadas.</p>
</section>

<section id="install">
<h2>Instalação</h2>
<p>Para instalar e executar o projeto, siga os passos abaixo:</p>

<h3>1. Vá até o diretório que deseja instalar o projeto, abra o terminal e execute o seguinte comando:</h3>

```bash
git clone https://github.com/ernestoborges/projeto-mesttra.git
```
> <p>Ao final disso você terá a cópia mais recente do projeto no diretório que você executou o comando anterior.</p>

<h3>2. Instalando e executando o backend</h3>
No terminal, navegue até o diretório raiz do projeto com o seguinte comando:

```bash
cd projeto-mesttra/server
```

Logo em seguida digite o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

Para iniciar o servidor backend localmente (http://localhost:3000), digite o comando:

```bash
npm start
```

<h3>3. Instalando e executando o frontend</h3>
Ainda no terminal, do diretório 'server', navegue para o diretório do frontend com o seguinte comando:

```bash
cd ../client
```

Logo em seguida digite o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

Para iniciar o servidor frontend localmente (http://localhost:5173), digite o comando:

```bash
npm run dev
```

<p>Dessa forma, você terá o projeto instalado e os servidores backend e frontend executando em suas respectivas portas locais. Agora você pode acessar a aplicação em seu navegador nos endereços http://localhost:3000 (backend) e http://localhost:5173 (frontend).</p>

</section>

<section  id="structure">
<h2>Estrutura</h2>
<section>
<h3>Ferramentas</h3>
<ul>
<li>
Frontend:
<ul>
<li>React (vite)</li>
<li>TypeScript</li>
<li>Styled-Components</li>
</ul>
<li>
Backend:
<ul>
<li>NodeJs</li>
<li>Express</li>
<li>MySQL</li>
</ul>
</li>
</li>
</ul>
</section>
<section>
<h3>Diretórios</h3>
<p>Aqui está um esquema simplificado da estrutura do projeto. Melhores informações irão ser descritas nos arquivos de <a href="#docs">Documentos</a>.</p>
    
    /
    .
    ├── /client					# Diretório do Front-end.
    │   ├── ...          
    │   ├── /public         		# Diretório dos arquivos públicos do Front-end.
    │   ├── /src 				# Diretório raiz do React.
    │   ├── index.html 			# Arquivo principal do Front-end.
    │   └── ...     
    ├── docs   					# Diretório Documentos relevantes para execução do projeto.
    ├── /server      			# Diretório do Back-end.
    │   ├── ...          
    │   ├── /src 				# Raiz do React.
    │   │   ├── ...			
    │   │   ├── main.ts			# Arquivo principal do Back-end.
    │   │   └── ...			
    │   └── ...     
    └── README.md
    
</section>

<section  id="docs">
<h2>Documentos</h2>
<p>Existe uma pasta chamada <a href="https://github.com/ernestoborges/projeto-mesttra/blob/main/docs" >docs</a> destinada a armazenar todos os documentos de suporte interessantes para o projeto, como links para vídeos, esquemas, documentos descritivos, entre outros. Fiquem à vontade para propor, organizar e adicionar novos documentos relevantes a este diretório.</p>
</section>
<section  id="contribution">
<h2>Contribuição</h2>
<p>Os padrões de contribuição para o projeto estão descritos no documento: <a href="https://github.com/ernestoborges/projeto-mesttra/blob/main/docs/CONTRIBUTING.md" >Contribuindo para o projeto</a>.</p>
<p>Sinta-se à vontade para contribuir com o projeto seguindo as diretrizes estabelecidas nesse documento.</p>
</section>
<section>