# Desafio hugedev's - Vaga Frontend Developer

O projeto foi desenvolvido em ambiente Linux, e para implementação foram utilizados as seguintes tecnologias:

	- Bootstrap 4.0
	- HTML5
	- CSS3
	- Java Script
	- Express

## Detalhes da Implementação

Durante a implementação do desafio tentei manter as mesmas caracteristicas de posicionamento, cores e comportamentos dos elementos presentes na página original.

Abaixo segue uma descrição detalhada de cada etapa da implementação:

* Implementei a parte do servidor de forma bem simples, para mostrar um pouco dos conhecimentos em backend Node/express, questões relacionadas a dependências do Node, arquivo packege.json, etc. 

* Para implementação da navbar na parte superiro da pagina utilizei as definições do Bootstrap de botões, dropdown, etc.

* A parte dos comandos de Zoom in e Zoom out, etc, feitos pelo teclado (teclas: +, -, 0, 1) e cliques do mouse, foram implementadas via manipulaçao dos elementos por java script, seção deviamente comentada no arquivo ./js/view.js 

* Para implementação do Drag and Drop utilizei manipulação do elemento diretamente por java script. Essa parte está devidamente comentada no arquivo ./js/view.js

* O comportamento do modal também foi implementado manualmente diretamente em js. As funções responsáveis por manipular este elemento também estão comentadas em ./js/view.js

* Alguns estilos também foram desenvolvidos por mim, os quais estão na pasta ./css/

## Execução

1) A execução pode ser feita diretamente abrindo o arquivo index.html no navegador.

2) A execução também pode ser feita executando o servidor NodeJS:

Para execução do projeto com o servidor, é necessário ter o NPM instalado. Com esta dependência instalada, basta acessar a pasta do projeto e executar o comando abaixo para instalar as dependências do projeto.

	npm install

Depois iniciar o servidor com o comando:

	node server.js

Após, acessar a página inicial a partir do navegador no endereço:  localhost:3000


### Desenvolvedor
![](https://github.com/Lucasgscruz.png?size=100)
Lucas Cruz ([github](https://github.com/lucasgscruz))