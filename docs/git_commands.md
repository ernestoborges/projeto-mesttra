# Comandos básicos do git e gitflow

## Sumário
<ul>
<li><a href="#git">git</a></li>
<li><a href="#gitflow">gitflow</a></li>
</ul>
 
<section id="git">

### Iniciar git em um diretório

```bash
git init
```

### Verificar quais arquivos foram modificados e estão diferentes da versão atual

```bash
git status
```

### Verificar quais branch existem no projeto e em qual você está

```bash
git branch
```

### Altera a branch que você está editando

```bash
git checkout [nome da branch]
```

### Adicionar um arquivo para ser commitado

```bash
git add [nome do arquivo] //adiciona o arquivo com nome [nome do arquivo]

git add .                 //adiciona todos os arquivos modificados
```

### Remover um arquivo para ser commitado

```bash
git remove [nome do arquivo] //remove o arquivo com nome [nome do arquivo]

git remove .                 //remove todos os arquivos modificados
```

### Criar um commit com todos os arquivos adicionados pelo comando 'git add'

```bash
git commit -m "Descrição do commit"
```

### 'Empurrar' ou 'Enviar' um commit para o github para ser sincronizado com o repositório remoto.

```bash
git push origin [nome da branch]
```

### 'Puxa' ou 'Baixa' o estado atual do repositório no github fazendo com que seu repositorio local fique igual ao remoto.

```bash
git pull
```

</section>

<section id="gitflow">

## Comandos usando a extensão 'git flow' para facilitar a manipulação de branchs e commits

### Criando uma nova branch do tipo 'feature'. 

```bash
git flow feature start [nome da branch]
```

### Publicando sua branch local criada para o repositório

```bash
git flow feature publish
```

> Para enviar novos commits para essa branch já publicada basta seguir o processo padrão: 'git add .'; 'git commit -m "texto"'; 'git push origin feature/[nome da feature]'


### Encerrando sua branch 'feature' e fazendo um merge automatico dessa feature na branch 'develop'. Apos esse comando a sua branch feature é automaticamente deletada e tudo que existia nela é incorporado na develop.

```bash
git flow feature finish [nome da branch]
```

</section>