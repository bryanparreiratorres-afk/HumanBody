"""Generate the self-contained HTML from modular sources.
Scientific artwork remains linked to Commons, with attribution and error fallback."""
from pathlib import Path
from base64 import b64encode
ROOT=Path(__file__).resolve().parent
css=(ROOT/'css/style.css').read_text()
for name in ['vascular-background.svg','pulse-line.svg','hero-vasculature.svg']:
    code=b64encode((ROOT/'assets'/name).read_bytes()).decode()
    css=css.replace("url('../assets/"+name+"')", "url('data:image/svg+xml;base64,"+code+"')")
data=(ROOT/'js/data.js').read_text().replace('export const','const')
app=(ROOT/'js/app.js').read_text().replace("import {modules,imageAssets,labExperiments,references} from './data.js';",'')
favicon=b64encode((ROOT/'assets/favicon.svg').read_bytes()).decode()
html=f'''<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#180811"><meta name="description" content="HUMAN BODY Atlas da Vida: anatomia e fisiologia interativa."><title>HUMAN BODY — Atlas da Vida</title><link rel="icon" href="data:image/svg+xml;base64,{favicon}"><style>{css}</style></head><body><div id="app"></div><div id="modal-root"></div><div id="toast" role="status" aria-live="polite"></div><script>{data}\n{app}</script></body></html>'''
(ROOT/'HUMAN_BODY_ABRIR.html').write_text(html)
print(f'Portable HTML updated: {len(html):,} characters')
