# HUMAN BODY — Atlas da Vida

Plataforma educacional de anatomia e fisiologia humana, com visual inspirado no tema de pesquisa hematológica enviado como referência (vinho, preto, bordas luminosas, estruturas vasculares decorativas).

## Abra o site facilmente

1. **Mais simples:** abra `HUMAN_BODY_ABRIR.html` com dois cliques. Funciona no Chrome, Edge, Safari ou Firefox sem instalar nada. Os recursos educacionais são executados no próprio navegador.
2. **Para publicar no GitHub Pages:** envie a estrutura do projeto para o repositório, mantendo `index.html`, `css/`, `js/` e `assets/` nos caminhos originais. Nas configurações do GitHub Pages, escolha `Deploy from branch` e a pasta raiz (`/`).
3. **Servidor local (opcional):** dentro desta pasta execute `python -m http.server 8000` e abra `http://localhost:8000`. Isso permite usar o `index.html` modular.

## O que está implementado

- 13 trilhas de estudo com 25 conceitos factuais cada (325 fatos / 325 perguntas-base), sequências, relações entre órgãos e explicações.
- Galeria/atlas com 16 registros de recursos anatômicos científicos de Wikimedia Commons, ampliação, seleção e fontes/atribuições.
- 13 experimentos com controles de tempo, etapas, velocidade e cenários ilustrativos quando pertinente.
- Exercícios aleatórios: seleção por módulo, de 5 a 100 itens, múltipla escolha, verdadeiro/falso e associação/lacuna em formato de seleção. Há estilos de treino conceituais inspirados em ENEM, vestibular, universidade, atlas e desafio — todos usam o mesmo banco factual, sem reproduzir provas oficiais.
- Simulados com navegação livre, marcação de revisão, gabarito ao entregar e estatísticas de sessão.
- Palácio Anatômico com caminhos sequenciais, associações personalizadas e construtor PAO.
- Flashcards com agenda simplificada de revisões, mapas conceituais e histórico de desempenho.
- Busca local de termos e tutor **local** baseado nos conceitos; **não é IA conversacional conectada**.
- Preferência para reduzir movimento; layout adaptável a celular, tablet e computador.

## Limitações importantes

- **Imagens científicas:** cada diagrama remete a um arquivo real e creditado do Wikimedia Commons. Por não ser possível incorporar os arquivos originais aos recursos locais nesta entrega, as imagens são carregadas da rede. Se a conexão falhar, o site mostra um aviso e um link para o arquivo-fonte. **O conteúdo textual, quizzes, laboratórios e memorização permanecem utilizáveis sem imagens.** Para uso totalmente offline com imagens, é necessário baixar os arquivos originais individualmente, respeitando suas licenças.
- **Atlas:** não apresenta segmentação 3D anatomicamente validada, camadas de órgãos precisas nem identificação por hotspots calibrados em imagens. A visualização é uma galeria 2D navegável.
- **Questões:** são 325 perguntas-base vinculadas a 325 fatos, com formatos de apresentação variados. Não foram implementados mecanismos de geração por IA, questões inéditas ilimitadas, correção automática de texto livre, ordenação com drag-and-drop, perguntas com imagens calibradas ou análise profunda de alternativas individualizadas.
- **Experimentos:** mostram fenômenos por etapas e algumas visualizações ilustrativas; não são modelos biofísicos quantitativos nem modelos clínicos.
- **Progresso:** é salvo no `localStorage` do browser e não sincroniza com outros aparelhos.
- **Conteúdo científico:** é um resumo original para estudo que necessita de atualização e revisão editorial especializada antes de utilização institucional. Não é recurso de diagnóstico médico.

## Estrutura

- `index.html`: entrada modular recomendada para hospedagem estática.
- `HUMAN_BODY_ABRIR.html`: entrada portátil pronta para abrir sem servidor.
- `js/data.js`: módulos, fatos, lista de imagens, referências e experimentos.
- `js/app.js`: roteador, interfaces e lógica de aprendizado.
- `css/style.css`: tema responsivo.
- `assets/`: identidade visual SVG gerada para o projeto (decorativa, não se apresenta como anatomia).
- `FONTES_E_LICENCAS.md`: catálogo de créditos com links.

## Privacidade e acessibilidade

Os dados pessoais de estudo não são enviados a servidores. O código não inclui analytics, contas ou trackers. Links científicos externos abrem a fonte em outra aba. Há etiquetas em inputs, foco visível, textos alternativos e opção de redução de animações.

## Materiais científicos sugeridos

- [OpenStax — Anatomy & Physiology 2e](https://openstax.org/details/books/anatomy-and-physiology-2e)
- [MedlinePlus](https://medlineplus.gov/healthtopics.html)
- [NIH / NIDDK](https://www.niddk.nih.gov/health-information)
- [Human body diagrams — Wikimedia Commons](https://commons.wikimedia.org/wiki/Human_body_diagrams)

## Créditos

Identidade visual de interface e explicações curtas organizadas para este projeto. Diagrama científico de terceiros: ver crédito e condições individuais na seção Biblioteca ou no arquivo `FONTES_E_LICENCAS.md`. As licenças e os autores são os apresentados na fonte original; consulte-as antes de redistribuir um arquivo de mídia.
