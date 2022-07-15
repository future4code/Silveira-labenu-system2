<p>
<a href="#sobre">Sobre</a> |
<a href="#orientacoes">Orientações</a> |
<a href="#link">Link</a> |
<a href="#features">Features</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#desenvolvedores">Desenvolvedores</a> |
</p>

<h1 id="sobre">🍴 Projeto Labenu System</h1>

<p>Um sistema que represente o básico da organização da Labenu. </p>

<h2 id="orientacoes">🚨 Orientações para acesso</h2>

- Realizar o cadastro sendo estudante ou docente com seus respectivos dados pessoais. 

<h2 id="link">🔗 Link API: Link para visualização da documentação</h2>

<a href="https://documenter.getpostman.com/view/20351432/UzBsH4d6">Labenu System</a>

<h2 id="features">✔️ Features</h2>

🎓 Turma
- [x] Criar turma
- [x] Buscar turmas ativas
- [x] Mudar turma de módulo
  
  Toda turma é composta pelas seguintes características:
- [x] Id: identificador único gerado pela própria aplicação
- [x] Nome: nome da turma
- [x] Docentes: lista de ids de docentes dessa turma (essas ids devem existir na tabela de docentes)
- [x] Estudantes: lista de ids de estudantes dessa turma (essas ids devem existir na tabela de estudantes)
- [x] Módulo: módulo atual da turma (pode assumir um valor entre 1 a 6 nas turmas ativas, ou 0, indicando que as aulas dessa turma ainda não começaram deve iniciar com 0)
 
👨‍🎓 Estudante
- [x] Criar estudante
- [x] Buscar estudante através do nome
- [x] Mudar estudante de turma 

  Representa estudantes da nossa instituição. Cada estudante deve possuir uma, e somente uma turma por vez. Estudantes com cadastro novo começam sem alocação em nenhuma turma. Deve possuir:
- [x] Id: identificador único gerado pela própria aplicação
- [x] Nome: nome da pessoa
- [x] Email: email da pessoa
- [x] Data de nascimento: data de nascimento no formato DD/MM//AAAA 
- [x] Turma Id: esse id deve existir na tabela de turmas
- [x] Hobbies: uma lista de hobbies relacionados à pessoa (passatempos). Esses hobbies devem existir na tabela de hobbies (caso não exista, deve ser adicionado à tabela hobbies automaticamente) 

👨‍🏫 Docente
- [x] Criar docente
- [x] Buscar todas as pessoas docentes
- [x] Mudar docente de turma 

  Representa docentes da nossa instituição.  Cada docente deve possuir uma, e somente uma turma por vez. Docentes com cadastro novo começam sem alocação em nenhuma turma. Deve possuir:
- [x] Id: identificador único gerado pela própria aplicação
- [x] Nome: nome da pessoa
- [x] Email: email da pessoa
- [x] Data de nascimento: data de nascimento no formato DD/MM//AAAA 
- [x] Turma Id: id da turma que essa pessoa é responsável (esse id deve existir na tabela turmas)
- [x] Especialidades: uma lista de especialidades relacionadas à pessoa, deve iniciar com pelo menos uma das especialidades pré-definidas. Existem 5 especialidades fixas: JS, CSS, React, Typescript e POO (Programação Orientada a Objetos)

 <h2 id="tecnologias">🛠 Tecnologias</h2>
 
- Typescript

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Ariane-Mello"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98977257?s=400&u=6c7f069d8c85e34fdf6fd6f58bc0f0f989a6948e&v=4" width="100px;" alt="Imagem profile Ariane Mello desenvolvedora"/><br /><sub><b>Ariane Mello </b></sub></a><br /> 
<td><a href="https://github.com/future4code/silveira-Eric-Silva"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99001809?v=4" width="100px;" alt="Imagem profile Eric Silva desenvolvedor"/><br /><sub><b>Eric Silva </b></sub></a><br />
<td><a href="https://github.com/future4code/silveira-Mariana-Lima"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98923335?v=4" width="100px;" alt="Imagem profile Mariana Lima desenvolvedora"/><br /><sub><b>Mariana Lima</b></sub></a><br />
  
</table>
