### Padrões de commit semanticos que devem ser seguidos

feat: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.

fix: Para definir o tratamento de correções de bugs.

chore: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção.

### Rotinas de passos

Se o terminal não indicar qual branch você está, digite esse comando:

git branch

E retornará a branch atual

mude para atualizar a branch, com o comando:

git checkout main
git pull

### Mude para a branch de desenvolvimento, com o comando:

git checkout dev

### Crie sua branch de acordo com sua tarefa

Ex: git checkout -b feat/seunome/suatarefa

### Finalizado a tarefa

git add .
git commit -m "feat: Descrição de sua tarefa"
git checkout dev
git merge feat/seunome/suatarefa
git push origin dev
