### Padrões de commit semanticos seguidos pela equipe

feat: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.

fix: Para definir o tratamento de correções de bugs.

chore: Atualizações de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.

refactor: Utilizado em quaisquer mudanças no código, porém não alterem a funcionalidade final da tarefa impactada.

# Etapas via terminal entre branch e commit

Se o terminal não indicar qual branch você está, digite o comando:

```bash
git branch
```

E retornará a branch atual

### Mude para a branch de desenvolvimento e a atualize, com o comando:

```bash
git checkout dev
```

```bash
git pull
```

### Crie sua branch de acordo com sua tarefa

Exemplo de uma tarefa que será feita como feat:

```bash
git checkout -b feat/seunome/suatarefa
```

### Finalizado a tarefa

Num caso especifico, onde se necessita modificar apenas um terminado arquivo, digite tal comando como exemplo:

```bash
git status 
```

Ira trazer o arquivo necessita modificacao e digite o comando:

```bash
git add 'seu arquivo modificado' 
```

Verifique qual arquivos precisam ser atualizados, com o seguinte comando:

```bash
git status
```
# Em caso comum, siga essas etapas

Verificado os arquivos ou diretorios que precisam ser atualizados, dê sequencia aos proximos comandos:

```bash
git add .
```

```bash
git commit -m "[feat]: Descrição de sua tarefa"
```

```bash
git checkout dev
```

```bash
git pull
```

```bash
git merge feat/seunome/suatarefa
```

```bash
git push origin dev
```
