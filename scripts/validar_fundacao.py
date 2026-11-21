#!/usr/bin/env python3
"""Validação mínima da fundação documental; não importa dados financeiros."""
import csv
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
UFS = {'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'}
CATEGORIES = {'cadastro_hospitalar','financas','transferencias','contratacoes','legislativo','emendas'}

def validate():
    d=json.loads((ROOT/'dados/fontes_oficiais.json').read_text(encoding='utf-8'))
    assert d['project']=='radar-da-saude'
    assert d['status']=='catalogo_documental_sem_ingestao'
    assert re.fullmatch(r'\d{4}-\d{2}-\d{2}',d['checked_at'])
    sources=d['sources']
    assert len(sources)>=10
    ids=[s['id'] for s in sources]
    assert len(ids)==len(set(ids)), 'IDs de fontes duplicados'
    for source in sources:
        assert source['integration_status']=='nao_integrada', 'Não declarar integração inexistente'
        assert source['category'] in CATEGORIES
        parsed=urlsplit(source['official_url'])
        assert parsed.scheme=='https' and parsed.netloc and parsed.username is None
        assert source['name'] and source['limitation']
    with (ROOT/'docs/MATRIZ_COBERTURA.csv').open(encoding='utf-8',newline='') as f:
        rows=list(csv.DictReader(f))
    assert len(rows)==27, 'A matriz deve conter 27 UFs'
    assert {row['uf'] for row in rows}==UFS
    assert all(row['fonte_estadual_verificada']=='não' for row in rows)
    for row in rows:
        for key in ('cadastro_hospitalar','orcamento','pagamentos','contratacoes','gestores','assembleia'):
            assert row[key]=='pendente', 'Matriz não pode declarar cobertura não importada'
    assert (ROOT/'schema/001_base.sql').exists()
    assert (ROOT/'docs/METODOLOGIA.md').exists()
    return {'sources':len(sources),'uf':len(rows),'status':'PASS'}

if __name__=='__main__':
    print(json.dumps(validate(),ensure_ascii=False))
