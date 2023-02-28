### Padrões de commit semanticos que devem ser seguidos

feat: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.

fix: Para definir o tratamento de correções de bugs.

chore: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção.

### Rotinas de passos

Se o terminal não indicar qual branch você está, digite esse comando:

```bash
git branch
```

E retornará a branch atual

mude para atualizar a branch, com o comando:

```bash 
git checkout main
```

```bash
git pull
```

### Mude para a branch de desenvolvimento, com o comando:
```bash
git checkout dev
```

### Crie sua branch de acordo com sua tarefa

Ex:
```bash
git checkout -b feat/seunome/suatarefa
```

### Finalizado a tarefa

```bash
git add .
```
```bash
git commit -m "feat: Descrição de sua tarefa"
```
```bash
git checkout dev
```
```bash
git merge feat/seunome/suatarefa
```
```bash
git push origin dev
```
