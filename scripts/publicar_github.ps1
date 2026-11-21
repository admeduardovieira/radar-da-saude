param(
  [ValidateSet('public','private')]
  [string]$Visibilidade = 'public'
)
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$repo = 'admeduardovieira/radar-da-saude'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

foreach ($command in @('git','gh','python')) {
  if (-not (Get-Command $command -ErrorAction SilentlyContinue)) {
    throw "Ferramenta ausente: $command. Consulte docs/INICIAR_GITHUB.md."
  }
}
python scripts/validar_fundacao.py
if ($LASTEXITCODE -ne 0) { throw 'A validação documental falhou.' }
python -m unittest discover -s tests -v
if ($LASTEXITCODE -ne 0) { throw 'Os testes falharam.' }

gh auth status
if ($LASTEXITCODE -ne 0) { throw 'Autentique com: gh auth login' }
$existing = & gh repo view $repo --json name 2>$null
if ($LASTEXITCODE -eq 0) {
  throw "O repositório $repo já existe. O script não altera repositórios existentes."
}

if (-not (Test-Path (Join-Path $root '.git'))) {
  git init -b main
  if ($LASTEXITCODE -ne 0) { throw 'Falha ao iniciar git.' }
}
git add .
if ($LASTEXITCODE -ne 0) { throw 'Falha em git add.' }
$staged = git diff --cached --name-only
if ($LASTEXITCODE -ne 0) { throw 'Falha ao inspecionar staging.' }
if ($staged) {
  git commit -m 'chore: fundacao documental Radar da Saude'
  if ($LASTEXITCODE -ne 0) { throw 'Configure o nome e email do Git e tente novamente.' }
}
$desc = 'Transparência das contas, gastos, contratações e investimentos públicos na saúde brasileira.'
if ($Visibilidade -eq 'public') {
  gh repo create $repo --public --source . --remote origin --push --description $desc
} else {
  gh repo create $repo --private --source . --remote origin --push --description $desc
}
if ($LASTEXITCODE -ne 0) { throw 'Criação ou publicação falhou. Confira seu login e a conta de destino.' }
Write-Output "Repositório publicado: https://github.com/$repo"
