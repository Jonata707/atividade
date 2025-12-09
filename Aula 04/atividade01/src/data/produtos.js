const produtos = [
{
  id:2,
  img:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com br%2Fprodutos%2Ffotos%2F369658%2Ffonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_m.jpg&w=256&q=75",
  name:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F369658%2Ffonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_m.jpg&w=256&q=75",
  price: "319,99",
  description:"Arquitetura de 650W com PFC Ativo para performance superior Design de circuito DC para DC que funciona em tipos de sistemas variadosDesempenho ideal para aplicações de jogos, fornecendo energia estávelVentilador de 120mm com baixo ruído e recomendações de refrigeração eficientes Certificação 80 PLUS Bronze que oferece tecnologias especiais para menor consumo de energia.",
  emPromacao: "Certeza"
},
{
  id:2,
  img:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F621162%2Fssd-pcie-kingston-nv3-1-tb-m-2-2280-nvme-leitura-6000-mb-s-e-gravacao-4000-mb-s-snv3s-1000g_1726082185_m.jpg&w=256&q=75",
  name:"SSD Kingston NV3, 1 TB, M.2 2280, PCIe 4.0 x4, NVMe, Leitura: 6000 MB/s, Gravação: 4000 MB/s, Azul - SNV3S/1000G",
  price: "444,99",
  description:"Especificações Técnicas: Arquitetura NVMe PCIe 4.0 que proporciona frequência e características de alta performanceCompatibilidade: Compatível com slots M.2 2280, utilizando tecnologias avançadas em sistemas modernosPerformance e Benchmarks Desempenho com leitura de até 6.000 MB/s e gravação de até 4.000 MB/s, ideal para aplicações e tipos de uso que exigem alta velocidade  Refrigeração e Energia Projetado para operar entre 0°C e 70°C, e armazenamento seguro entre -40°C e 85°C.Recursos Avançados: Inclui resistência de 320 TBW Terabytes Gravados e MTBF de 2000000 de horas garantindo durabilidade e confiabilidade.",
  emPromacao: "Sempre"
},
{
  id:2,
  img:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F904276%2Fconsole-sony-playstation-5-slim-edicao-digital-ssd-1tb-controle-sem-fio-dualsense-2-jogos-digitais_1752754651_m.jpg&w=256&q=75",
  name:"Console Sony PlayStation 5 Slim, Edição Digital, SSD 1TB, Controle Sem Fio DualSense + 2 Jogos Digitais",
  price: " 3.616,77",
  description:"Sistema e Performance: Console equipado com um SSD de 1TB, proporcionando carregamentos rápidos e eficientes. Oferece retrocompatibilidade com jogos de PS4, incluindo o recurso Game Boost, que otimiza o desempenho dos jogos compatíveis para uma experiência aprimorada.Display e Visualização: Desfrute de gráficos 4K, que trazem mundos vibrantes e ricos em detalhes, além de uma jogabilidade fluida, garantindo uma experiência visual de alta qualidade e imersiva.: A tecnologia de Áudio 3D oferece uma imersão sonora completa, criando paisagens sonoras envolventes que elevam o realismo da sua experiência de jogo.Jogos Incluídos: Este pacote inclui ASTRO BOT, eleito o jogo do ano de 2024, e Gran Turismo 7, um simulador de corrida com mais de 400 carros e 90 pistas, proporcionando diversão imediata.Recursos Adicionais: Além dos jogos inclusos, o console é compatível com milhares de jogos do PS4, permitindo que você continue aproveitando seus títulos favoritos. Acesse a PlayStation Store para comprar e baixar jogos digitais, expandindo ainda mais sua biblioteca. O controle sem fio DualSense, com feedback tátil e gatilhos adaptáveis, oferece uma interação mais profunda e sensorial com osjogos",
  emPromacao: "Sim né"
},
{
  id:2,
  img:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages4.kabum.com.br%2Fprodutos%2Ffotos%2F115384%2Fmonitor-gamer-husky-storm-27-led-curvo-180hz-full-hd-1ms-displayport-e-hdmi-99-srgb-adaptive-sync-ajuste-de-angulo-hgmt001_1744638402_gg.jpg&w=640&q=75",
  name:"Monitor Gamer Husky Storm 27' LED, Curvo, 180Hz, Full HD, 1ms, DisplayPort e HDMI, 99% sRGB, Adaptive Sync, Ajuste de Ângulo - HGMT001",
  price: "999,99",
  description:"Design Gaming: Estilo curvo com curvatura de 1500R para maior imersão visual durante o jogo.Ergonomia e Conforto: Inclinação ajustável de 5° a 15° para otimizar o ângulo de visão e o conforto do usuário.Materiais e Resistência: Construção otimizada para durabilidade e estabilidade durante sessões de jogo intensas.Funcionalidades Especiais: Tecnologia Adaptive Sync para sincronização de quadros, eliminando input lag e tearing.Compatibilidade Setup: Ângulo de visão de 178° para visualização ampla e detalhada do jogo.",
  emPromacao: "Òvio"
},
{
  id:2,
  img:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F114586%2Fteclado-mecanico-gamer-husky-blizzard-60-rgb-switch-gateron-red-abnt2-preto-htg001ptvr_1739277955_m.jpg&w=256&q=75",
  name:"Teclado Mecânico Gamer Husky Blizzard, 60%, RGB, Switch Gateron Red, ABNT2, Preto - HTG001PTVR",
  price: " 289,90",
  description:"Tecnologia e Precisão: Equipado com Switch Gateron Red, o teclado oferece feedback tátil e audível, proporcionando uma experiência ideal tanto para jogos quanto para digitação prolongada.Design e Ergonomia: Com um formato 60% compacto, este teclado é perfeito para setups minimalistas, otimizando o espaço na sua mesa. O layout ABNT2 garante familiaridade e conforto para o uso diário.Conectividade: Acompanha um cabo USB-C destacável, que oferece maior praticidade e durabilidade, facilitando o transporte e a substituição quando necessário.Durabilidade e Qualidade: As teclas são projetadas para suportar até 50 milhões de toques, garantindo uma longa vida útil. Os switches removíveis permitem fácil manutenção e personalização, enquanto a proteção contra poeira assegura o desempenho contínuo do teclado.Recursos Especiais: O backlight RGB configurável via software oferece 12 opções de iluminação, permitindo personalizar a estética do seu teclado. A tecnologia 100% Anti-Ghosting garante que cada pressionamento de tecla seja registrado com precisão, mesmo durante sessões de jogos intensas.",
  emPromacao: "Claro"
}

]
export default produtos;