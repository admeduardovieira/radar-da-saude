import sys
import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
from validar_fundacao import validate

class FoundationTests(unittest.TestCase):
    def test_sources_catalog(self):
        r=validate()
        self.assertEqual(r['status'],'PASS')
        self.assertGreaterEqual(r['sources'],10)

    def test_all_federative_units_pending(self):
        self.assertEqual(validate()['uf'],27)

    def test_no_production_data_in_starter(self):
        self.assertFalse((ROOT/'dados/hospitais.json').exists())
        self.assertFalse((ROOT/'dados/pagamentos.json').exists())

    def test_no_vercel_files(self):
        self.assertFalse((ROOT/'vercel.json').exists())
        self.assertFalse((ROOT/'.vercel').exists())

if __name__=='__main__':unittest.main()
