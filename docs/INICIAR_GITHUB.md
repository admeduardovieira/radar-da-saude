# Como criar o repositório GitHub

Destino proposto: `admeduardovieira/radar-da-saude`  
Nome exibido: **Radar da Saúde**  
Descrição: `Transparência das contas, gastos, contratações e investimentos públicos na saúde brasileira.`

O arquivo ZIP é uma base local pronta; **o repositório remoto ainda precisa ser criado.**

## Opção A — Windows PowerShell e GitHub CLI (recomendado)

1. Extraia o ZIP e abra o PowerShell 7 na pasta `radar-da-saude`.
2. Confira as ferramentas: `git --version` e `gh --version`.
3. Caso não tenha a CLI: `winget install --id GitHub.cli -e`.
4. Autentique sua própria conta: `gh auth login`.
5. Execute `./scripts/publicar_github.ps1 -Visibilidade public` (ou `private`).
6. O script valida o catálogo, inicia um Git local, faz um commit e cria/publica o repositório remoto.
7. Confirme em `https://github.com/admeduardovieira/radar-da-saude`.

## Opção B — sem GitHub CLI

1. Abra `https://github.com/new`, selecione proprietário `admeduardovieira`, nome `radar-da-saude` e a visibilidade desejada.
2. **Não** marque a inicialização automática do README ou licença; os arquivos já estão no ZIP.
3. Crie o repositório vazio.
4. No PowerShell, na pasta extraída:

```powershell
git init -b main
git add .
git commit -m "chore: bootstrap Radar da Saúde documentation"
git remote add origin https://github.com/admeduardovieira/radar-da-saude.git
git push -u origin main
```

O Git poderá pedir login e/ou configurar seu nome e e-mail local. Nunca cole tokens em arquivos do repositório ou nesta conversa.

## Avisos

- Publicar o código como aberto não autoriza expor dados pessoais, documentos de pacientes ou credenciais.
- Nenhuma licença de software foi presumida; escolha uma licença apenas quando decidir os termos de reutilização.
- Nada será implantado na Vercel nesta fase.
