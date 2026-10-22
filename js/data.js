/* HUMAN BODY — conteúdo pedagógico original, com consulta bibliográfica em OpenStax e MedlinePlus.
   As descrições resumem mecanismos; não se destinam a diagnóstico. */
export const parseFacts = raw => raw.trim().split('\n').map((line,i) => {const [term,...desc]=line.split(' | ');return {term:term.trim(),def:desc.join(' | ').trim(),id:i+1}});
export const modules = [
{ id:'digestorio',name:'Sistema Digestório',short:'Digestão e absorção',tag:'NUTRIÇÃO',image:'digestive',color:'#e9a073',summary:'Transforma alimentos em moléculas absorvíveis e elimina resíduos não aproveitados.',focus:'Da ingestão ao aproveitamento dos nutrientes.',steps:['Boca: mastigação, saliva e formação do bolo alimentar','Faringe e esôfago: deglutição e peristaltismo','Estômago: mistura, ácido e digestão inicial de proteínas','Duodeno: bile e enzimas pancreáticas atuam no quimo','Jejuno e íleo: digestão final e absorção de nutrientes','Intestino grosso: absorção de água e formação das fezes','Reto e ânus: armazenamento e eliminação'],relations:['Pâncreas: enzimas e bicarbonato','Cardiovascular: transporte dos nutrientes absorvidos','Endócrino: regulação de motilidade e secreção'],facts:parseFacts(`Boca | Inicia digestão mecânica pela mastigação e mistura o alimento com saliva.
Língua | Manipula o alimento, participa da deglutição e contém papilas gustativas.
Dentes | Fragmentam mecanicamente os alimentos e ampliam a área de contato enzimático.
Glândulas salivares | Produzem saliva para lubrificação e início da digestão de amido.
Amilase salivar | Enzima que inicia a hidrólise de amido na cavidade oral.
Faringe | Via compartilhada que conduz o bolo alimentar da boca ao esôfago.
Esôfago | Transporta o bolo alimentar ao estômago mediante ondas peristálticas.
Peristaltismo | Contrações coordenadas que impulsionam material ao longo do tubo digestivo.
Estômago | Armazena e mistura alimento com suco gástrico, formando o quimo.
Ácido clorídrico | Contribui para desnaturação proteica e ambiente ácido no estômago.
Pepsina | Protease estomacal que participa do início da digestão de proteínas.
Quimo | Mistura semilíquida de alimento e secreções que sai do estômago.
Duodeno | Primeiro segmento do intestino delgado, recebe bile e suco pancreático.
Jejuno | Região do intestino delgado com intensa absorção de nutrientes.
Íleo | Segmento distal do intestino delgado que absorve, entre outros, vitamina B12 e sais biliares.
Intestino grosso | Reabsorve água e eletrólitos e participa da formação das fezes.
Reto | Armazena temporariamente fezes antes da eliminação.
Fígado | Produz bile e processa nutrientes provenientes da circulação portal.
Vesícula biliar | Concentra e armazena bile, liberando-a em resposta à refeição.
Bile | Favorece emulsificação de gorduras; não é uma enzima digestiva.
Pâncreas exócrino | Secreta enzimas e bicarbonato no duodeno.
Lipase pancreática | Hidrolisa triglicerídeos no intestino delgado.
Tripsina | Protease pancreática ativa no lúmen do intestino delgado.
Vilosidades intestinais | Pregas microscópicas que ampliam a superfície de absorção intestinal.
Microvilosidades | Projeções da membrana de enterócitos que expandem área absortiva e hospedam enzimas.`)},
{ id:'respiratorio',name:'Sistema Respiratório',short:'Vias aéreas e pulmões',tag:'OXIGENAÇÃO',image:'respiratory',color:'#8ebcd3',summary:'Conduz e condiciona o ar e oferece superfície extensa para trocas gasosas.',focus:'Da cavidade nasal aos alvéolos pulmonares.',steps:['Nariz e cavidade nasal filtram, aquecem e umidificam o ar','Faringe e laringe conduzem o fluxo respiratório','Traqueia distribui ar e remove partículas pelo sistema mucociliar','Brônquios se ramificam em bronquíolos','Alvéolos realizam trocas gasosas com capilares','Diafragma e músculos intercostais possibilitam ventilação'],relations:['Coração: perfusão pulmonar','Fisiologia respiratória: difusão alveolocapilar','Sangue: transporte de O₂ e CO₂'],facts:parseFacts(`Nariz | Principal porta de entrada do ar, com estruturas que ajudam a filtrar partículas.
Cavidade nasal | Aquece e umidifica o ar inspirado por meio de sua mucosa vascularizada.
Conchas nasais | Ampliam a superfície e promovem turbulência do ar na cavidade nasal.
Faringe | Canal compartilhado pelos sistemas respiratório e digestório.
Laringe | Abriga as pregas vocais e liga a faringe à traqueia.
Epiglote | Estrutura cartilaginosa que auxilia a proteção da via aérea durante a deglutição.
Traqueia | Tubo sustentado por cartilagens que transporta o ar até os brônquios.
Brônquios principais | Levam ar da traqueia aos pulmões direito e esquerdo.
Brônquios lobares | Distribuem ar aos lobos pulmonares.
Bronquíolos | Pequenas vias aéreas sem anéis cartilaginosos, com músculo liso.
Bronquíolos terminais | Último segmento da zona condutora antes da região respiratória.
Bronquíolos respiratórios | Início da região em que aparecem alvéolos e podem ocorrer trocas gasosas.
Ductos alveolares | Passagens da porção respiratória que levam aos sacos alveolares.
Alvéolos | Estruturas de parede fina onde ocorre difusão entre ar e sangue.
Pneumócitos tipo I | Células alveolares achatadas que compõem a maior parte da superfície de difusão.
Pneumócitos tipo II | Células alveolares que produzem surfactante pulmonar.
Surfactante pulmonar | Substância que reduz a tensão superficial e ajuda a evitar colapso alveolar.
Macrófagos alveolares | Células imunes que removem partículas e microrganismos no espaço alveolar.
Pulmão direito | Geralmente possui três lobos anatômicos.
Pulmão esquerdo | Geralmente apresenta dois lobos e incisura cardíaca.
Pleura visceral | Membrana serosa que reveste diretamente a superfície pulmonar.
Pleura parietal | Membrana serosa que reveste internamente a parede torácica.
Líquido pleural | Facilita deslizamento entre superfícies pleurais na ventilação.
Diafragma | Principal músculo inspiratório em repouso; contrai e desce durante a inspiração.
Músculos intercostais externos | Auxiliam a elevação da caixa torácica durante a inspiração.`)},
{ id:'fisiologia-respiracao',name:'Fisiologia da Respiração',short:'Ventilação e hematose',tag:'TROCAS GASOSAS',image:'alveoli',color:'#79cdda',summary:'Explica como mudanças de pressão movimentam ar e como gases atravessam a membrana alveolocapilar.',focus:'Pressões, volumes e difusão de O₂ e CO₂.',steps:['Diafragma contrai e o volume torácico aumenta','A pressão alveolar fica ligeiramente abaixo da atmosférica','Ar flui para os pulmões durante a inspiração','O₂ difunde do alvéolo ao sangue por gradiente de pressão parcial','CO₂ difunde do sangue ao alvéolo por gradiente de pressão parcial','Diafragma relaxa; na expiração passiva o ar sai'],relations:['Respiratório: anatomia dos alvéolos','Cardiovascular: transporte de gases','Coração: fluxo pela circulação pulmonar'],facts:parseFacts(`Ventilação pulmonar | Movimento de entrada e saída de ar entre atmosfera e alvéolos.
Inspiração | Entrada de ar quando a pressão alveolar cai abaixo da atmosférica.
Expiração tranquila | Saída passiva de ar após relaxamento dos músculos inspiratórios em repouso.
Contração diafragmática | Aumenta o volume da caixa torácica e favorece inspiração.
Lei de Boyle | Em condições comparáveis, pressão e volume de um gás variam inversamente.
Pressão atmosférica | Pressão do ar ao redor do organismo, referência para fluxo ventilatório.
Pressão alveolar | Pressão do gás no interior dos alvéolos, varia durante ventilação.
Pressão intrapleural | Pressão no espaço pleural, normalmente subatmosférica em repouso.
Complacência pulmonar | Medida da variação de volume pulmonar para dada variação de pressão.
Resistência de vias aéreas | Oposição ao fluxo de ar oferecida pelas vias respiratórias.
Volume corrente | Volume de ar mobilizado em uma respiração normal.
Frequência respiratória | Número de ciclos respiratórios em um minuto.
Ventilação-minuto | Produto do volume corrente pela frequência respiratória.
Espaço morto anatômico | Volume das vias de condução onde não ocorrem trocas gasosas.
Ventilação alveolar | Volume de ar fresco que alcança alvéolos por minuto, descontando espaço morto.
Capacidade vital | Volume máximo expirado após uma inspiração máxima.
Volume residual | Ar que permanece nos pulmões após expiração máxima.
Espirometria | Avalia volumes e fluxos mobilizáveis durante manobras respiratórias.
Hematose | Troca de O₂ e CO₂ entre o ar alveolar e o sangue dos capilares pulmonares.
Difusão gasosa | Deslocamento de moléculas seguindo diferenças de pressão parcial.
Pressão parcial de O₂ | Parcela da pressão total exercida pelo oxigênio em mistura gasosa.
Hemoglobina | Proteína das hemácias responsável pela maior parte do transporte de O₂ no sangue.
Transporte de CO₂ | Ocorre sobretudo como bicarbonato, além de forma dissolvida e ligada a proteínas.
Quimiorreceptores centrais | Respondem principalmente a alterações relacionadas ao CO₂ por meio do pH do líquido cerebral.
Quimiorreceptores periféricos | Detectam especialmente queda importante de O₂ arterial e mudanças em CO₂ e pH.`)},
{ id:'cardiovascular',name:'Sistema Cardiovascular',short:'Sangue e circulação',tag:'CIRCULAÇÃO',image:'circulation',color:'#f26f7c',summary:'Distribui oxigênio, nutrientes, hormônios e calor enquanto recolhe resíduos metabólicos.',focus:'Circulações pulmonar e sistêmica conectadas.',steps:['Sangue venoso chega às câmaras direitas do coração','Ventrículo direito bombeia sangue pelas artérias pulmonares','Nos capilares pulmonares ocorre hematose','Veias pulmonares retornam sangue ao átrio esquerdo','Ventrículo esquerdo envia sangue à aorta','Capilares sistêmicos realizam trocas com os tecidos','Veias sistêmicas devolvem sangue ao átrio direito'],relations:['Respiração: oxigenação do sangue','Urinário: volume e pressão arterial','Endócrino: hormônios circulantes'],facts:parseFacts(`Sistema cardiovascular | Rede de coração e vasos responsável por transporte e regulação sistêmica.
Sangue | Tecido conjuntivo fluido composto por plasma e elementos figurados.
Plasma | Fração líquida do sangue que transporta solutos e proteínas.
Hemácias | Células ricas em hemoglobina especializadas no transporte de gases.
Leucócitos | Células sanguíneas envolvidas em defesa imunológica.
Plaquetas | Fragmentos celulares que participam de hemostasia.
Hematócrito | Proporção do volume sanguíneo ocupada por hemácias.
Albumina | Proteína plasmática importante para pressão oncótica e transporte de substâncias.
Hemostasia | Conjunto de respostas que limita a perda de sangue após lesão vascular.
Circulação pulmonar | Leva sangue do coração direito aos pulmões e de volta ao coração esquerdo.
Circulação sistêmica | Leva sangue do coração esquerdo aos tecidos e retorna ao direito.
Artérias | Vasos que conduzem sangue para fora do coração, independentemente da oxigenação.
Veias | Vasos que conduzem sangue em direção ao coração.
Capilares | Vasos microscópicos que permitem trocas entre sangue e tecidos.
Pressão arterial | Força exercida pelo sangue contra paredes das artérias.
Pressão sistólica | Pressão arterial máxima típica durante ejeção ventricular.
Pressão diastólica | Pressão arterial mínima típica durante relaxamento ventricular.
Débito cardíaco | Volume de sangue bombeado por cada ventrículo em um minuto.
Volume sistólico | Volume ejetado por um ventrículo a cada batimento.
Frequência cardíaca | Quantidade de batimentos cardíacos por minuto.
Retorno venoso | Fluxo de sangue que regressa ao coração através das veias.
Resistência periférica | Oposição ao fluxo fornecida principalmente pelas arteríolas sistêmicas.
Homeostase | Manutenção dinâmica de variáveis fisiológicas dentro de faixas funcionais.
Perfusão tecidual | Fornecimento de sangue a um tecido e seus capilares.
Circulação portal hepática | Leva ao fígado sangue venoso rico em nutrientes do tubo digestório.`)},
{ id:'coracao',name:'Coração',short:'Anatomia e ciclo cardíaco',tag:'BOMBA CARDÍACA',image:'heart',color:'#ff6277',summary:'Bomba muscular de quatro câmaras que mantém fluxo unidirecional em circuitos pulmonares e sistêmicos.',focus:'Câmaras, valvas, condução elétrica e sístole.',steps:['Sangue chega aos átrios e atravessa as valvas atrioventriculares','Enchimento ventricular ocorre predominantemente na diástole','Nó sinoatrial inicia a atividade elétrica normal','Impulso percorre nó AV, feixe de His e fibras de Purkinje','Ventrículos contraem; valvas AV se fecham','Valvas semilunares abrem e ocorre ejeção','Ventrículos relaxam e o ciclo recomeça'],relations:['Cardiovascular: dois circuitos','Respiratório: capilares pulmonares','Endócrino: adrenalina modula batimentos'],facts:parseFacts(`Átrio direito | Recebe sangue venoso sistêmico das veias cavas e seio coronário.
Átrio esquerdo | Recebe sangue oxigenado das veias pulmonares.
Ventrículo direito | Bombeia sangue em direção ao tronco pulmonar.
Ventrículo esquerdo | Bombeia sangue para a aorta e circulação sistêmica.
Septo interventricular | Parede muscular que separa os ventrículos direito e esquerdo.
Valva tricúspide | Valva atrioventricular localizada entre átrio e ventrículo direitos.
Valva mitral | Valva atrioventricular localizada entre átrio e ventrículo esquerdos.
Valva pulmonar | Valva semilunar entre o ventrículo direito e o tronco pulmonar.
Valva aórtica | Valva semilunar entre o ventrículo esquerdo e a aorta.
Veias cavas | Grandes veias que trazem sangue da circulação sistêmica ao átrio direito.
Veias pulmonares | Transportam sangue dos pulmões ao átrio esquerdo.
Artérias pulmonares | Transportam sangue do ventrículo direito à circulação pulmonar.
Aorta | Maior artéria sistêmica, recebe ejeção do ventrículo esquerdo.
Coronárias | Artérias que irrigam o próprio músculo cardíaco.
Miocárdio | Camada muscular do coração responsável pela contração.
Endocárdio | Revestimento interno das câmaras cardíacas.
Pericárdio | Saco fibroseroso que envolve e protege o coração.
Sístole ventricular | Período em que ventrículos desenvolvem pressão e ejetam sangue.
Diástole ventricular | Período de relaxamento e enchimento ventricular.
Nó sinoatrial | Principal marcapasso fisiológico do coração.
Nó atrioventricular | Retarda brevemente a condução entre átrios e ventrículos.
Feixe de His | Via de condução que transmite impulsos do nó AV aos ramos ventriculares.
Fibras de Purkinje | Distribuem rapidamente o impulso elétrico pelo miocárdio ventricular.
Eletrocardiograma | Registro na superfície corporal da atividade elétrica cardíaca.
Onda P | Componente do eletrocardiograma associado à despolarização atrial.`)},
{ id:'vasos',name:'Vasos Sanguíneos',short:'Artérias, veias e capilares',tag:'HEMODINÂMICA',image:'vesselCompare',color:'#f38c9e',summary:'A arquitetura da parede vascular determina resistência, complacência e trocas com os tecidos.',focus:'Comparação das estruturas vasculares e da resistência ao fluxo.',steps:['Artérias elásticas amortecem pulsos de pressão','Artérias musculares distribuem fluxo entre órgãos','Arteríolas regulam resistência e perfusão locais','Capilares trocam gases e solutos com tecidos','Vênulas coletam sangue vindo dos capilares','Veias retornam sangue ao coração; muitas têm valvas'],relations:['Coração: bombeamento do sangue','Urinário: regulação de pressão','Respiratório: capilares pulmonares'],facts:parseFacts(`Artéria elástica | Grande artéria com elevada quantidade de elastina, como a aorta.
Artéria muscular | Artéria com túnica média rica em músculo liso que distribui fluxo.
Arteríola | Pequena artéria que regula resistência e fluxo de entrada nos capilares.
Capilar | Vaso microscópico de parede muito fina, especializado em trocas.
Vênula | Pequeno vaso que coleta sangue dos leitos capilares.
Veia | Vaso de retorno ao coração, geralmente com menor pressão que artérias.
Endotélio | Camada celular que reveste internamente vasos sanguíneos.
Túnica íntima | Camada mais interna da parede vascular, inclui endotélio.
Túnica média | Camada vascular que contém músculo liso e componentes elásticos.
Túnica adventícia | Camada externa de tecido conjuntivo que sustenta o vaso.
Músculo liso vascular | Tecido contrátil capaz de alterar o diâmetro de vasos.
Valvas venosas | Estruturas que limitam refluxo nas veias de membros.
Vasoconstrição | Redução do calibre vascular por contração do músculo liso.
Vasodilatação | Aumento do calibre vascular por relaxamento do músculo liso.
Resistência vascular | Dificuldade imposta ao fluxo sanguíneo ao longo do sistema vascular.
Raio vascular | Grandeza cujo aumento pode diminuir intensamente a resistência em modelo laminar.
Lei de Poiseuille | Aproximação que relaciona fluxo a gradiente de pressão, viscosidade, comprimento e quarta potência do raio.
Pressão hidrostática capilar | Pressão que tende a favorecer saída de fluido dos capilares.
Pressão oncótica plasmática | Pressão osmótica de proteínas plasmáticas que favorece retenção de água.
Difusão capilar | Principal mecanismo de troca de gases e muitos solutos através da parede capilar.
Capilar contínuo | Capilar com endotélio relativamente contínuo, comum em músculo e sistema nervoso.
Capilar fenestrado | Capilar com poros endoteliais, útil à filtração e secreção em alguns órgãos.
Capilar sinusoide | Vaso com luz ampla e endotélio descontínuo presente em órgãos como fígado.
Retorno venoso | Movimento de sangue venoso de volta ao coração.
Bomba muscular | Compressão de veias pelos músculos esqueléticos que ajuda o retorno venoso.`)},
{ id:'urinario',name:'Sistema Urinário',short:'Rins e néfrons',tag:'FILTRAÇÃO',image:'urinary',color:'#a9cfdd',summary:'Filtra plasma, ajusta a composição do meio interno e participa do controle da pressão arterial.',focus:'Filtração, reabsorção, secreção e excreção.',steps:['Sangue entra pelo glomérulo e parte do plasma é filtrada','Túbulo proximal recupera grande parte de água e solutos','Alça de Henle participa da criação de gradiente medular','Túbulo distal ajusta reabsorção e secreção','Ducto coletor responde a sinais hormonais, como ADH','Urina segue para pelve renal, ureter e bexiga','Uretra conduz a urina ao exterior'],relations:['Endócrino: ADH e aldosterona','Cardiovascular: controle da pressão','Sangue: equilíbrio ácido-base e eletrólitos'],facts:parseFacts(`Rim | Órgão que filtra plasma e regula água, eletrólitos e equilíbrio ácido-base.
Ureter | Conduz urina da pelve renal até a bexiga por peristaltismo.
Bexiga urinária | Armazena temporariamente urina antes da micção.
Uretra | Canal que conduz urina da bexiga ao exterior.
Néfron | Unidade funcional renal que filtra e modifica o fluido tubular.
Glomérulo | Rede de capilares onde ocorre parte da filtração do plasma.
Cápsula de Bowman | Estrutura que recebe o filtrado proveniente do glomérulo.
Barreira de filtração | Conjunto de endotélio, membrana basal e podócitos que seleciona componentes filtrados.
Túbulo proximal | Segmento que reabsorve a maior parte da água e do sódio filtrados.
Alça descendente fina | Trecho da alça de Henle com alta permeabilidade à água.
Alça ascendente espessa | Segmento que reabsorve sais e é pouco permeável à água.
Túbulo distal | Segmento responsável por ajustes adicionais do filtrado renal.
Ducto coletor | Controla parte da reabsorção de água em resposta ao ADH.
Córtex renal | Região externa renal que contém corpúsculos e túbulos renais.
Medula renal | Região interna organizada em pirâmides, importante à concentração urinária.
Filtração glomerular | Passagem de água e pequenos solutos do plasma para o espaço de Bowman.
Reabsorção tubular | Transferência de substâncias do fluido tubular de volta ao sangue.
Secreção tubular | Transferência de substâncias do sangue ou células tubulares ao lúmen.
Excreção urinária | Eliminação efetiva de substâncias na urina após filtração e transporte tubular.
ADH | Hormônio que favorece reabsorção de água no ducto coletor.
Aldosterona | Hormônio que favorece retenção de sódio e secreção de potássio em segmentos distais.
Renina | Enzima liberada por células renais que inicia ativação do sistema renina-angiotensina.
Eritropoietina | Hormônio produzido principalmente pelos rins que estimula eritropoiese.
Ureia | Produto nitrogenado do metabolismo proteico eliminado em parte pela urina.
Glicose filtrada | Em condições usuais é amplamente reabsorvida no túbulo proximal.`)},
{ id:'hormonios',name:'Hormônios',short:'Mensageiros químicos',tag:'SINALIZAÇÃO',image:'hormones',color:'#bc9ce2',summary:'Integra uma enciclopédia de sinais que conectam glândulas, receptores e órgãos-alvo.',focus:'22+ hormônios, receptores e retroalimentação.',steps:['Estímulo interno altera atividade da célula secretora','Glândula ou tecido libera mensageiro químico','Hormônio circula ou atua localmente','Receptor específico reconhece o mensageiro','Célula-alvo altera atividade fisiológica','Feedback ajusta a secreção hormonal'],relations:['Hipófise: eixos regulatórios','Tireoide: metabolismo','Pâncreas: glicemia'],facts:parseFacts(`Insulina | Hormônio das células beta pancreáticas que facilita redução da glicemia e armazenamento energético.
Glucagon | Hormônio das células alfa pancreáticas que favorece produção hepática de glicose.
Cortisol | Glicocorticoide do córtex suprarrenal ligado à resposta ao estresse e ao metabolismo.
Adrenalina | Catecolamina da medula suprarrenal que participa de resposta simpática aguda.
Noradrenalina | Catecolamina produzida por neurônios simpáticos e medula suprarrenal.
Aldosterona | Mineralocorticoide do córtex suprarrenal que regula sódio e potássio.
ADH | Vasopressina sintetizada no hipotálamo que favorece conservação renal de água.
Ocitocina | Hormônio hipotalâmico liberado pela neuro-hipófise, atua em contrações uterinas e ejeção do leite.
GH | Hormônio do crescimento da adeno-hipófise com ações de crescimento e metabolismo.
TSH | Hormônio adeno-hipofisário que estimula a tireoide a produzir hormônios tireoidianos.
ACTH | Hormônio adeno-hipofisário que estimula secreção de cortisol pelo córtex suprarrenal.
FSH | Gonadotrofina hipofisária envolvida na atividade folicular e função de células de Sertoli.
LH | Gonadotrofina hipofisária que participa da ovulação e estimula células de Leydig.
Prolactina | Hormônio da adeno-hipófise relacionado à produção de leite.
T3 | Triiodotironina, hormônio tireoidiano biologicamente muito ativo no metabolismo.
T4 | Tiroxina, principal hormônio secretado pela tireoide e convertido em parte em T3.
PTH | Hormônio das paratireoides que aumenta a disponibilidade de cálcio no sangue.
Calcitonina | Hormônio produzido por células C tireoidianas, com papel modesto no cálcio adulto.
Testosterona | Andrógeno produzido principalmente nos testículos, atua no desenvolvimento e função reprodutiva.
Estrógenos | Grupo de hormônios que participam da função reprodutiva e de outros tecidos.
Progesterona | Hormônio ovariano relacionado à manutenção e preparação do endométrio.
Receptor de membrana | Proteína que detecta sinais extracelulares, inclusive muitos hormônios peptídicos.
Receptor intracelular | Receptor dentro da célula para sinais lipossolúveis, como esteroides.
Feedback negativo | Resposta regulatória que reduz o estímulo original e ajuda a estabilizar a variável.
Ritmo circadiano | Oscilação biológica aproximada de 24 horas que modula diversas secreções.`)},
{ id:'endocrino',name:'Sistema Endócrino',short:'Glândulas em rede',tag:'HOMEOSTASE',image:'endocrine',color:'#b490d6',summary:'Coordena funções de longa e curta duração por sinais liberados na circulação.',focus:'Mapeie eixos hipotálamo-hipófise-glândulas.',steps:['Hipotálamo integra informações nervosas e humorais','Hipófise recebe sinais do hipotálamo','Hormônios tróficos alcançam glândulas periféricas','Glândulas secretam hormônios que agem em tecidos-alvo','Órgãos-alvo respondem ao sinal','Feedback negativo ajuda a manter equilíbrio'],relations:['Hipófise: controle de eixos','Pâncreas: balanço de glicose','Urinário: equilíbrio de água e sal'],facts:parseFacts(`Hipotálamo | Integra sinais nervosos e endócrinos para regular múltiplos eixos.
Hipófise | Glândula na base do encéfalo ligada ao hipotálamo.
Adeno-hipófise | Lobo anterior que sintetiza e secreta vários hormônios tróficos.
Neuro-hipófise | Lobo posterior que armazena e libera ADH e ocitocina produzidos no hipotálamo.
Tireoide | Glândula cervical que produz hormônios tireoidianos e calcitonina.
Paratireoides | Glândulas geralmente posteriores à tireoide responsáveis por PTH.
Suprarrenal cortical | Região externa suprarrenal que produz glicocorticoides, mineralocorticoides e andrógenos.
Suprarrenal medular | Região interna suprarrenal que secreta catecolaminas.
Pâncreas endócrino | Ilhotas pancreáticas que secretam insulina, glucagon e outros hormônios.
Ovários | Gônadas que produzem gametas e hormônios como estrógenos e progesterona.
Testículos | Gônadas que produzem espermatozoides e testosterona.
Pineal | Glândula cerebral que secreta melatonina e participa dos ritmos biológicos.
Melatonina | Hormônio da pineal envolvido em sincronização circadiana.
Glândula endócrina | Estrutura secretora que lança mensageiros na circulação, sem ducto excretor.
Órgão-alvo | Tecido cujas células possuem receptores adequados ao hormônio.
Eixo HPT | Circuito hipotálamo-hipófise-tireoide que regula produção de T3 e T4.
Eixo HPA | Circuito hipotálamo-hipófise-suprarrenal envolvido em secreção de cortisol.
Eixo HPG | Circuito hipotálamo-hipófise-gônadas que coordena função reprodutiva.
Feedback hormonal | Regulação da secreção pelo efeito dos hormônios sobre estruturas controladoras.
Metabolismo energético | Conjunto de transformações celulares modulado por diversos hormônios.
Regulação hídrica | Equilíbrio de água controlado em parte por ADH e sistema renina-angiotensina.
Glicemia | Concentração de glicose no sangue sob controle de múltiplos sinais.
Hormônio trófico | Sinal que regula a atividade de outra glândula endócrina.
Sinalização parácrina | Comunicação química dirigida a células próximas ao local da secreção.
Sinalização autócrina | Comunicação química na qual célula responde ao próprio mensageiro.`)},
{ id:'hipofise',name:'Hipófise',short:'Glândula reguladora',tag:'EIXOS',image:'pituitary',color:'#d8a1de',summary:'Conecta o hipotálamo ao controle de outras glândulas por vias nervosas e hormonais.',focus:'Adeno-hipófise, neuro-hipófise e controle trófico.',steps:['Hipotálamo detecta necessidades e secreta fatores reguladores','Sistema porta leva os fatores à adeno-hipófise','Adeno-hipófise libera hormônios tróficos','Hormônios estimulam glândulas-alvo','Hormônios periféricos exercem feedback negativo','Neuro-hipófise libera ADH e ocitocina sintetizados no hipotálamo'],relations:['Tireoide: TSH e T3/T4','Gônadas: FSH e LH','Suprarrenais: ACTH e cortisol'],facts:parseFacts(`Sela túrcica | Depressão óssea do esfenoide onde se situa a hipófise.
Infundíbulo | Haste que conecta anatomicamente o hipotálamo à hipófise.
Adeno-hipófise | Região glandular anterior que produz GH, TSH, ACTH, FSH, LH e prolactina.
Neuro-hipófise | Região posterior ligada a axônios hipotalâmicos, libera ADH e ocitocina.
Sistema porta hipofisário | Rede vascular que leva fatores hipotalâmicos à adeno-hipófise.
Hormônios liberadores | Sinais hipotalâmicos que estimulam liberação de hormônios da hipófise anterior.
Somatostatina hipotalâmica | Sinal que inibe liberação de GH e TSH em diferentes contextos.
Dopamina hipotalâmica | Principal controle inibitório da secreção de prolactina.
GH | Hormônio hipofisário envolvido no crescimento e metabolismo energético.
IGF-1 | Fator de crescimento produzido sobretudo no fígado em resposta ao GH.
TSH | Hormônio hipofisário que estimula síntese e liberação de T3 e T4.
ACTH | Hormônio que estimula secreção de cortisol pelo córtex suprarrenal.
FSH | Hormônio que atua em folículos ovarianos e células de Sertoli.
LH | Hormônio que induz ovulação e estimula células testiculares de Leydig.
Prolactina | Hormônio que promove a produção de leite nas glândulas mamárias.
ADH | Vasopressina produzida em neurônios hipotalâmicos e liberada pela neuro-hipófise.
Ocitocina | Mensageiro produzido no hipotálamo e liberado pela neuro-hipófise.
TRH | Hormônio liberador hipotalâmico que estimula TSH e pode estimular prolactina.
CRH | Fator hipotalâmico que promove secreção de ACTH.
GnRH | Hormônio hipotalâmico liberado em pulsos que controla FSH e LH.
GHRH | Fator hipotalâmico que estimula secreção de GH.
Células somatotróficas | Células da adeno-hipófise responsáveis pela secreção de GH.
Células tireotróficas | Células hipofisárias que secretam TSH.
Células corticotróficas | Células hipofisárias que produzem ACTH.
Feedback negativo endócrino | Hormônios das glândulas periféricas reduzem sinais hipotalâmicos e hipofisários.`)},
{ id:'tireoide',name:'Glândula Tireoide',short:'T3, T4 e metabolismo',tag:'METABOLISMO',image:'thyroid',color:'#d98fce',summary:'Produz hormônios importantes para metabolismo, termogênese e desenvolvimento.',focus:'Folículos, iodo e regulação TRH–TSH–T3/T4.',steps:['Hipotálamo secreta TRH','Adeno-hipófise libera TSH','Tireoide capta iodeto e sintetiza hormônios em folículos','T4 e T3 alcançam tecidos-alvo','T3 modula transcrição gênica e metabolismo','Hormônios tireoidianos exercem feedback negativo sobre TRH e TSH'],relations:['Hipófise: TSH','Hormônios: receptores intracelulares','Paratireoides: controle separado do cálcio'],facts:parseFacts(`Tireoide | Glândula anterior do pescoço, próxima à traqueia e abaixo da laringe.
Lobo direito | Metade direita da glândula tireoide, ligada ao lobo esquerdo pelo istmo.
Lobo esquerdo | Metade esquerda da glândula tireoide, unida à direita pelo istmo.
Istmo tireoidiano | Ponte de tecido que conecta os dois lobos da tireoide.
Folículo tireoidiano | Unidade esférica revestida por células foliculares que contém coloide.
Coloide | Material folicular rico em tireoglobulina usado na síntese hormonal.
Tireoglobulina | Proteína que fornece a estrutura para formação de T3 e T4.
Célula folicular | Célula que capta iodo e produz hormônios tireoidianos.
Célula parafolicular | Célula C da tireoide responsável pela secreção de calcitonina.
Iodeto | Forma de iodo captada pela glândula como matéria-prima de T3 e T4.
Tireoperoxidase | Enzima envolvida em iodação e acoplamento para síntese de T3 e T4.
T3 | Triiodotironina com três átomos de iodo e forte atividade hormonal.
T4 | Tiroxina com quatro átomos de iodo, convertida em T3 em vários tecidos.
TRH | Fator hipotalâmico que estimula a secreção de TSH.
TSH | Hormônio da hipófise anterior que estimula a atividade tireoidiana.
Receptor de TSH | Receptor tireoidiano que responde ao TSH e estimula síntese hormonal.
Deiodinase | Enzima que converte iodotironinas, incluindo T4 em T3.
Termogênese | Produção corporal de calor influenciada pelos hormônios tireoidianos.
Taxa metabólica basal | Gasto energético em condições padronizadas, sensível à atividade tireoidiana.
Crescimento e desenvolvimento | Processos que dependem de níveis adequados de hormônios tireoidianos.
Feedback tireoidiano | T3/T4 elevados tendem a reduzir TRH e TSH.
Calcitonina | Hormônio secretado pelas células C com efeito hipocalcemiante modesto no adulto.
Paratireoides | Glândulas distintas da tireoide, principais secretoras de PTH.
Hipotireoidismo | Estado de ação insuficiente dos hormônios tireoidianos no organismo.
Hipertireoidismo | Estado de produção excessiva de hormônios tireoidianos pela glândula.`)},
{ id:'gonadas',name:'Gônadas',short:'Ovários e testículos',tag:'REPRODUÇÃO',image:'gonads',color:'#b89de5',summary:'Produzem gametas e hormônios que regulam desenvolvimento e reprodução.',focus:'Controle por GnRH, FSH, LH e esteroides gonadais.',steps:['Hipotálamo libera GnRH de maneira pulsátil','Hipófise anterior secreta FSH e LH','Gônadas respondem com produção gamética e hormonal','Hormônios gonadais exercem retroalimentação','Em ciclos ovarianos, elevação sustentada de estradiol pode desencadear pico de LH','Mudanças ovarianas acompanham mudanças endometriais'],relations:['Hipófise: FSH e LH','Hormônios: esteroides sexuais','Endócrino: eixo HPG'],facts:parseFacts(`Gônadas | Órgãos que formam gametas e secretam hormônios sexuais.
Testículos | Gônadas produtoras de espermatozoides e testosterona.
Túbulos seminíferos | Estruturas testiculares nas quais ocorre espermatogênese.
Células de Sertoli | Células testiculares que sustentam a formação de espermatozoides.
Células de Leydig | Células intersticiais que produzem testosterona sob estímulo de LH.
Espermatogênese | Processo de formação e amadurecimento de gametas masculinos.
Testosterona | Andrógeno importante na função reprodutiva e no desenvolvimento puberal.
Ovários | Gônadas produtoras de oócitos e hormônios ovarianos.
Folículo ovariano | Estrutura que abriga oócito em desenvolvimento e células de suporte.
Células da granulosa | Células foliculares ovarianas que participam da produção de estrógenos.
Células da teca | Células foliculares que produzem precursores androgênicos sob influência de LH.
Estradiol | Principal estrogênio durante boa parte da fase reprodutiva ovariana.
Progesterona | Hormônio secretado em maior quantidade pelo corpo lúteo após ovulação.
Ovulação | Liberação de um oócito secundário pelo folículo ovariano maduro.
Corpo lúteo | Estrutura formada após a ovulação que secreta progesterona e estrogênios.
Fase folicular | Parte do ciclo ovariano caracterizada por crescimento de folículos.
Fase lútea | Parte do ciclo ovariano após ovulação, marcada pela atividade do corpo lúteo.
Fase menstrual | Período de descamação de parte do endométrio no ciclo uterino.
Fase proliferativa | Período de crescimento endometrial influenciado por estrógenos.
Fase secretora | Período de preparação glandular endometrial influenciado por progesterona.
GnRH | Mensageiro hipotalâmico pulsátil que estimula liberação de FSH e LH.
FSH | Hormônio hipofisário que atua em folículos ovarianos e células de Sertoli.
LH | Hormônio hipofisário relacionado à ovulação e produção testicular de testosterona.
Feedback negativo gonadal | Esteroides e inibina contribuem para controle da atividade hipotalâmico-hipofisária.
Pico de LH | Aumento abrupto de LH associado à ovulação em ciclos ovulatórios.`)},
{ id:'pancreas',name:'Pâncreas',short:'Enzimas e glicemia',tag:'REGULAÇÃO',image:'pancreas',color:'#e5b777',summary:'Combina função exócrina digestiva e função endócrina essencial ao controle metabólico.',focus:'Ilhotas pancreáticas, insulina e glucagon.',steps:['Após refeição, a glicemia tende a subir','Células beta percebem aumento de glicose e secretam insulina','Insulina favorece captação e armazenamento em tecidos responsivos','Entre refeições, a queda de glicose favorece secreção de glucagon','Glucagon estimula liberação de glicose pelo fígado','Feedback ajuda a manter a glicemia em faixa fisiológica'],relations:['Digestório: suco pancreático','Endócrino: insulina e glucagon','Fígado: glicogenólise e glicogênese'],facts:parseFacts(`Pâncreas | Órgão com tecidos exócrinos digestivos e ilhotas endócrinas.
Cabeça pancreática | Porção do pâncreas adjacente ao duodeno.
Corpo pancreático | Segmento intermediário entre cabeça e cauda do pâncreas.
Cauda pancreática | Porção distal do pâncreas próxima ao baço.
Ácinos pancreáticos | Unidades exócrinas que secretam precursores e enzimas digestivas.
Ducto pancreático | Canal que transporta secreção exócrina até o duodeno.
Bicarbonato pancreático | Íon secretado que ajuda a neutralizar acidez do quimo no duodeno.
Amilase pancreática | Enzima digestiva que hidrolisa amido no intestino delgado.
Lipase pancreática | Enzima que atua na digestão de triglicerídeos.
Tripsinogênio | Precursor inativo de tripsina secretado pelo pâncreas exócrino.
Ilhotas pancreáticas | Conjuntos celulares endócrinos dispersos pelo pâncreas.
Células alfa | Células de ilhotas que secretam glucagon.
Células beta | Células de ilhotas que secretam insulina.
Células delta | Células de ilhotas que secretam somatostatina.
Insulina | Hormônio que sinaliza estado de abundância energética e reduz glicemia.
Glucagon | Hormônio que eleva oferta hepática de glicose entre refeições.
Somatostatina | Hormônio que inibe localmente diversas secreções endócrinas e digestivas.
Glicemia | Concentração sanguínea de glicose ajustada por ação de múltiplos hormônios.
Glicogênio | Polímero de glicose armazenado especialmente em fígado e músculos.
Glicogênese | Formação de glicogênio a partir de moléculas de glicose.
Glicogenólise | Quebra de glicogênio para obtenção de unidades de glicose.
Gliconeogênese | Síntese de glicose a partir de precursores não carboidratos, principalmente no fígado.
GLUT4 | Transportador de glicose cuja translocação aumenta sob estímulo de insulina em músculo e tecido adiposo.
Fígado | Órgão que armazena ou libera glicose conforme estado metabólico.
Feedback glicêmico | Ajuste coordenado de secreção hormonal diante de alterações da glicose.`)}
];
export const imageAssets = {
 body: {file:'202403_human_anatomy_organs.svg',creator:'DataBase Center for Life Science (DBCLS)',license:'CC BY 4.0',description:'Órgãos do corpo humano',source:'https://commons.wikimedia.org/wiki/File:202403_human_anatomy_organs.svg'},
 internal: {file:'Internal_organs.svg',creator:'Mikael Häggström',license:'Domínio público / CC0',description:'Órgãos internos',source:'https://commons.wikimedia.org/wiki/File:Internal_organs.svg'},
 digestive: {file:'Digestive_system_diagram_en.svg',creator:'LadyofHats',license:'Domínio público (conforme página do arquivo)',description:'Sistema digestório',source:'https://commons.wikimedia.org/wiki/File:Digestive_system_diagram_en.svg'},
 respiratory: {file:'Respiratory_system_complete_en.svg',creator:'LadyofHats, Jmarchn',license:'Domínio público',description:'Sistema respiratório',source:'https://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'},
 heart: {file:'Heart_diagram_(en).svg',creator:'ZooFari, Rehua',license:'Creative Commons — confira condições na fonte',description:'Coração e câmaras',source:'https://commons.wikimedia.org/wiki/File:Heart_diagram_(en).svg'},
 urinary: {file:'Urinary_system.svg',creator:'Autores da Wikimedia Commons (consulte a página)',license:'Consulte os termos do arquivo',description:'Sistema urinário',source:'https://commons.wikimedia.org/wiki/File:Urinary_system.svg'},
 endocrine: {file:'Endocrine_System.svg',creator:'A. Spielhoff',license:'CC BY 4.0',description:'Sistema endócrino',source:'https://commons.wikimedia.org/wiki/File:Endocrine_System.svg'},
 vascular: {file:'Internal_organs.svg',creator:'Mikael Häggström',license:'Domínio público / CC0',description:'Órgãos e vasos internos',source:'https://commons.wikimedia.org/wiki/File:Internal_organs.svg'},
  alveoli: {file:'Alveolus_diagram-pt.svg',creator:'Autores do diagrama alveolar (ver arquivo)',license:'Conferir termos no arquivo original',description:'Alvéolo pulmonar e capilares',source:'https://commons.wikimedia.org/wiki/File:Alveolus_diagram-pt.svg'},
  circulation: {file:'Arterial_vs_Venous_Systems.svg',creator:'Colagem educacional baseada em OpenStax/KVDP',license:'Conferir atribuições na página do arquivo',description:'Circulação arterial e venosa',source:'https://commons.wikimedia.org/wiki/File:Arterial_vs_Venous_Systems.svg'},
  vesselCompare: {file:'Artery_Vein_Capillary_Comparison.png',creator:'Christinelmiller',license:'CC BY-SA 4.0',description:'Comparação entre artéria, veia e capilar',source:'https://commons.wikimedia.org/wiki/File:Artery_Vein_Capillary_Comparison.png'},
  hormones: {file:'Endocrine_glands.png',creator:'TheBartgry',license:'CC BY-SA (ver versão na fonte)',description:'Principais glândulas hormonais',source:'https://commons.wikimedia.org/wiki/File:Endocrine_glands.png'},
  pituitary: {file:'Pituitary_Gland.png',creator:'Bnulrich',license:'CC BY-SA 4.0',description:'Adeno-hipófise e neuro-hipófise',source:'https://commons.wikimedia.org/wiki/File:Pituitary_Gland.png'},
  thyroid: {file:'Thyroid_gland_&_thyroid_cartilage.svg',creator:'RWhitwam',license:'Conferir atribuição na fonte',description:'Anatomia da glândula tireoide',source:'https://commons.wikimedia.org/wiki/File:Thyroid_gland_%26_thyroid_cartilage.svg'},
  gonads: {file:'Male_and_female_genital_organs.svg',creator:'Autores do arquivo científico (ver Commons)',license:'CC BY 4.0',description:'Sistema reprodutor comparativo',source:'https://commons.wikimedia.org/wiki/File:Male_and_female_genital_organs.svg'},
  pancreas: {file:'Human_Pancreas_(NIH_BioArt_239).svg',creator:'NIAID, Ryan Kissinger',license:'Domínio público nos EUA (NIH)',description:'Ilustração científica do pâncreas',source:'https://commons.wikimedia.org/wiki/File:Human_Pancreas_(NIH_BioArt_239).svg'}
};
export const labExperiments = [
{key:'digest',title:'Jornada do alimento',module:'digestorio',note:'Percurso simplificado: segmentos anatômicos e secreções não estão em escala.'},
{key:'enzymes',title:'Enzimas digestivas',module:'digestorio',note:'Cada enzima tem substratos preferenciais; pH e atividade foram simplificados.'},
{key:'ventilate',title:'Inspiração e expiração',module:'fisiologia-respiracao',note:'Modelo qualitativo: não representa pressões intrapleurais numéricas.'},
{key:'hematosis',title:'Hematose alveolar',module:'fisiologia-respiracao',note:'Setas mostram direção líquida dos gases seguindo gradientes de pressão parcial.'},
{key:'oxygen',title:'Transporte por hemoglobina',module:'fisiologia-respiracao',note:'Ligação de O₂ é dinâmica; modelo não representa curva de dissociação completa.'},
{key:'circulation',title:'Dupla circulação',module:'cardiovascular',note:'Sangue venoso não é azul: cor azul é uma convenção pedagógica.'},
{key:'heartbeat',title:'Ciclo cardíaco',module:'coracao',note:'Sequência qualitativa de enchimento, condução e ejeção.'},
{key:'electric',title:'Condução elétrica',module:'coracao',note:'Ordem de ativação simplificada sem tempos reais de condução.'},
{key:'flow',title:'Fluxo e resistência vascular',module:'vasos',note:'Modelo de Poiseuille pressupõe fluido newtoniano e fluxo laminar em tubo ideal.'},
{key:'nephron',title:'Filtração no néfron',module:'urinario',note:'Frações reabsorvidas diferem conforme segmento, soluto e condição fisiológica.'},
{key:'communication',title:'Comunicação hormonal',module:'hormonios',note:'As respostas dependem de receptores, concentrações e contexto tecidual.'},
{key:'feedback',title:'Feedback endócrino',module:'tireoide',note:'Eixo simplificado TRH → TSH → T3/T4 com feedback negativo.'},
{key:'glycemia',title:'Controle da glicemia',module:'pancreas',note:'Curvas ilustrativas: não representam previsão individual nem valores clínicos.'}
];
export const references=[
 {title:'OpenStax — Anatomy & Physiology 2e',url:'https://openstax.org/details/books/anatomy-and-physiology-2e',desc:'Livro de anatomia e fisiologia, base conceitual para aprofundamento.'},
 {title:'MedlinePlus — Health Topics',url:'https://medlineplus.gov/healthtopics.html',desc:'Material educativo de referência mantido pela National Library of Medicine.'},
 {title:'Wikimedia Commons — Human body diagrams',url:'https://commons.wikimedia.org/wiki/Human_body_diagrams',desc:'Acervo de ilustrações anatômicas com informações individuais de licença.'},
 {title:'NIH — NIDDK',url:'https://www.niddk.nih.gov/health-information',desc:'Informações sobre sistemas digestivo, renal, endócrino e metabólico.'}
];
