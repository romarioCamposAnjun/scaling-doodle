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

# Esse projeto necessita que os ambientes de produção e desenvolvimento estejam paralelamente atualizados

### Primeiramente mude para a branch de produção, com o seguinte comando:

```bash
git checkout main
```

```bash
git pull
```

### Depois mude para a branch de desenvolvimento, com o seguinte comando:

```bash
git checkout dev
```

```bash
git pull
```

### Crie sua branch de acordo com sua tarefa, seguindo os padrões de commit semânticos

Exemplo de uma tarefa que será feita como feat:

```bash
git checkout -b feat/seunome/suatarefa
```

### Finalizado a tarefa, siga as sequências

```bash
git add .
```

```bash
git commit -m "[feat]: Descrição de sua tarefa"
```

### Passe sua tarefa primeiramente para dev

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

### Feito isso é precisar deixar a branch de produção paralela com desenvolvimento

```bash
git checkout main
```

```bash
git pull
```

```bash
git merge dev
```

```bash
git push origin main
```
