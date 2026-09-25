const locations = [
  {
    id: 58,
    name: "Hochland von Mexico",
    map: "nordamerika.jpg",
    box: { x1: 36.3, x2: 48.3, y1: 67.9, y2: 79.9 },
    tip: "Zentrales Hochgebiet im Inneren von Mexiko."
  },
  {
    id: 59,
    name: "Große Antillen",
    map: "nordamerika.jpg",
    box: { x1: 74.3, x2: 94.3, y1: 70.5, y2: 82.7 },
    tip: "Inselgruppe in der Karibik, zu der unter anderem Kuba, Jamaika und Hispaniola gehören."
  },
  {
    id: 60,
    name: "St.-Lorenz-Strom",
    map: "nordamerika.jpg",
    box: { x1: 69.3, x2: 81.3, y1: 44.3, y2: 56.3 },
    tip: "Wichtige Wasserstraße, die die Großen Seen mit dem Atlantischen Ozean verbindet."
  },
  {
    id: 61,
    name: "Missouri",
    map: "nordamerika.jpg",
    box: { x1: 44.6, x2: 56.6, y1: 51.0, y2: 63.0 },
    tip: "Längster Nebenfluss des Mississippi in Nordamerika."
  },
  {
    id: 62,
    name: "Pampa",
    map: "suedamerika.jpg",
    box: { x1: 39.6, x2: 51.6, y1: 65.3, y2: 77.3 },
    tip: "Fruchtbare Graslandschaft im Süden Südamerikas."
  },
  {
    id: 63,
    name: "Feuerland",
    map: "suedamerika.jpg",
    box: { x1: 31.8, x2: 43.8, y1: 84.6, y2: 96.6 },
    tip: "Inselgruppe an der südlichsten Spitze Südamerikas."
  },
  {
    id: 64,
    name: "Paraguay",
    map: "suedamerika.jpg",
    box: { x1: 43.8, x2: 55.8, y1: 47.1, y2: 59.1 },
    tip: "Fluss und Binnenstaat im südlichen Zentrum Südamerikas."
  },
  {
    id: 65,
    name: "Colorado-Plateau",
    map: "nordamerika.jpg",
    box: { x1: 32.4, x2: 44.4, y1: 54.8, y2: 66.8 },
    tip: "Hochregion im Südwesten der USA, bekannt für tief eingeschnittene Canyons."
  },
  {
    id: 66,
    name: "Bergland von Guyana",
    map: "suedamerika.jpg",
    box: { x1: 39.1, x2: 51.1, y1: 10.7, y2: 22.7 },
    tip: "Südamerikanische Gebirgsregion im Norden des Kontinents."
  },
  {
    id: 67,
    name: "Mexico",
    map: "nordamerika.jpg",
    box: { x1: 45.4, x2: 57.4, y1: 75.0, y2: 87.0 },
    tip: "Staat in Nordamerika südlich der USA."
  },
  {
    id: 68,
    name: "Colorado",
    map: "nordamerika.jpg",
    box: { x1: 29.3, x2: 41.3, y1: 56.7, y2: 68.7 },
    tip: "Wichtiger Fluss im Südwesten der USA und US-Bundesstaat."
  },
  {
    id: 69,
    name: "Rio Grande",
    map: "nordamerika.jpg",
    box: { x1: 41.4, x2: 53.4, y1: 66.1, y2: 78.1 },
    tip: "Wichtiger Fluss, der stellenweise die Grenze zwischen den USA und Mexiko bildet."
  },
  {
    id: 70,
    name: "Amazonastiefland",
    map: "suedamerika.jpg",
    box: { x1: 60.0, x2: 72.0, y1: 39.2, y2: 51.2 },
    tip: "Großes Tiefland im nördlichen Südamerika, geprägt vom Amazonas und seinem Regenwald."
  },
  {
    id: 71,
    name: "Michigansee",
    map: "nordamerika.jpg",
    box: { x1: 55.4, x2: 67.4, y1: 48.9, y2: 60.9 },
    tip: "Einer der Fünf Großen Seen in Nordamerika und der einzige, der vollständig auf dem Gebiet der USA liegt."
  },
  {
    id: 72,
    name: "Baffinland",
    map: "nordamerika.jpg",
    box: { x1: 59.9, x2: 71.9, y1: 26.1, y2: 38.1 },
    tip: "Große Insel im Norden Kanadas im Territorium Nunavut."
  },
  {
    id: 73,
    name: "Chile",
    map: "suedamerika.jpg",
    box: { x1: 25.3, x2: 37.3, y1: 61.1, y2: 73.1 },
    tip: "Langgestrecktes Land an der südamerikanischen Pazifikküste."
  },
  {
    id: 74,
    name: "Brasilien",
    map: "suedamerika.jpg",
    box: { x1: 67.6, x2: 79.6, y1: 35.6, y2: 47.6 },
    tip: "Flächenmäßig größter Staat Südamerikas."
  },
  {
    id: 75,
    name: "Peru",
    map: "suedamerika.jpg",
    box: { x1: 11.1, x2: 23.1, y1: 33.2, y2: 45.2 },
    tip: "Staat im westlichen Südamerika am Pazifik, bekannt für die Anden und die Inka-Kultur."
  },
  {
    id: 76,
    name: "Rocky Mountains",
    map: "nordamerika.jpg",
    box: { x1: 22.2, x2: 43.6, y1: 34.1, y2: 65.1 },
    tip: "Umfangreiches Faltengebirge im Westen Nordamerikas."
  },
  {
    id: 77,
    name: "Sierra Nevada",
    map: "nordamerika.jpg",
    box: { x1: 19.1, x2: 31.1, y1: 55.2, y2: 67.2 },
    tip: "Hochgebirge im Westen der USA, hauptsächlich im US-Bundesstaat Kalifornien."
  },
  {
    id: 78,
    name: "Appalachen",
    map: "nordamerika.jpg",
    box: { x1: 66.5, x2: 78.5, y1: 51.4, y2: 63.4 },
    tip: "Uraltes bewaldetes Faltengebirge im Osten Nordamerikas."
  },
  {
    id: 79,
    name: "Amazonas",
    map: "suedamerika.jpg",
    box: { x1: 58.1, x2: 70.1, y1: 29.7, y2: 41.7 },
    tip: "Wasserreichster Fluss der Erde im nördlichen Südamerika."
  },
  {
    id: 80,
    name: "Oberer See",
    map: "nordamerika.jpg",
    box: { x1: 56.5, x2: 68.5, y1: 47.1, y2: 59.1 },
    tip: "Der flächenmäßig größte der Fünf Großen Seen in Nordamerika."
  },
  {
    id: 81,
    name: "Aleuten",
    map: "nordamerika.jpg",
    box: { x1: 0.6, x2: 12.6, y1: 23.8, y2: 35.8 },
    tip: "Inselkette im Nordpazifik, die sich von Alaska in Richtung Kamtschatka erstreckt."
  },
  {
    id: 82,
    name: "Anden",
    map: "suedamerika.jpg",
    box: { x1: 25.6, x2: 37.6, y1: 49.1, y2: 61.1 },
    tip: "Das längste überirdische Gebirgssystem der Erde an der Westküste Südamerikas."
  },
  {
    id: 83,
    name: "Karibik",
    map: "nordamerika.jpg",
    box: { x1: 70.6, x2: 94.6, y1: 69.8, y2: 82.6 },
    tip: "Inselwelt und tropisches Meer zwischen Nord- und Südamerika."
  },
  {
    id: 84,
    name: "Ontariosee",
    map: "nordamerika.jpg",
    box: { x1: 65.5, x2: 77.5, y1: 47.7, y2: 59.7 },
    tip: "Der östlichste und kleinste der Fünf Großen Seen in Nordamerika."
  },
  {
    id: 85,
    name: "Río de la Plata",
    map: "suedamerika.jpg",
    box: { x1: 52.3, x2: 64.3, y1: 57.9, y2: 69.9 },
    tip: "Mündungstrichter der Flüsse Paraná und Uruguay in den Atlantischen Ozean zwischen Argentinien und Uruguay."
  },
  {
    id: 86,
    name: "Paraná",
    map: "suedamerika.jpg",
    box: { x1: 41.1, x2: 53.1, y1: 55.9, y2: 67.9 },
    tip: "Zweitlängster Fluss Südamerikas, der durch Brasilien, Paraguay und Argentinien fließt."
  },
  {
    id: 87,
    name: "Bolivien",
    map: "suedamerika.jpg",
    box: { x1: 28.1, x2: 40.1, y1: 38.2, y2: 50.2 },
    tip: "Binnenstaat im westlich-zentralen Teil Südamerikas mit dem Regierungssitz La Paz."
  },
  {
    id: 88,
    name: "Kanadischer Schild",
    map: "nordamerika.jpg",
    box: { x1: 49.9, x2: 61.9, y1: 38.1, y2: 50.1 },
    tip: "Geologische Schildregion in Kanada, die einen großen Teil des nordöstlichen Nordamerikas ausmacht."
  },
  {
    id: 89,
    name: "Florida",
    map: "nordamerika.jpg",
    box: { x1: 66.6, x2: 78.6, y1: 63.8, y2: 75.8 },
    tip: "Südöstlichster US-Bundesstaat, bekannt als Halbinsel zwischen dem Golf von Mexico und dem Atlantischen Ozean."
  },
  {
    id: 90,
    name: "Labrador",
    map: "nordamerika.jpg",
    box: { x1: 74.0, x2: 86.0, y1: 33.5, y2: 45.5 },
    tip: "Große Halbinsel im Osten Kanadas, zugehörig zur Provinz Neufundland und Labrador."
  },
  {
    id: 91,
    name: "Kuba",
    map: "nordamerika.jpg",
    box: { x1: 72.0, x2: 84.0, y1: 70.1, y2: 82.1 },
    tip: "Größter Inselstaat in der Karibik."
  },
  {
    id: 92,
    name: "Atacamawüste",
    map: "suedamerika.jpg",
    box: { x1: 26.0, x2: 38.0, y1: 47.2, y2: 59.2 },
    tip: "Extrem trockene Wüste an der Pazifikküste Südamerikas, hauptsächlich in Chile."
  },
  {
    id: 93,
    name: "Kolumbien",
    map: "suedamerika.jpg",
    box: { x1: 16.6, x2: 28.6, y1: 13.5, y2: 25.5 },
    tip: "Staat im Nordwesten Südamerikas mit Küsten am Atlantik und Pazifik."
  },
  {
    id: 94,
    name: "Aconcagua",
    map: "suedamerika.jpg",
    box: { x1: 26.4, x2: 38.4, y1: 53.3, y2: 65.3 },
    tip: "Höchster Berg Südamerikas und der Anden in Argentinien."
  },
  {
    id: 95,
    name: "Niagarafälle",
    map: "nordamerika.jpg",
    box: { x1: 64.0, x2: 76.0, y1: 48.6, y2: 60.6 },
    tip: "Berühmte Wasserfälle an der Grenze zwischen den USA und Kanada."
  },
  {
    id: 96,
    name: "Golfküstenebene",
    map: "nordamerika.jpg",
    box: { x1: 66.0, x2: 78.0, y1: 60.8, y2: 72.8 },
    tip: "Flache Küstenregion im Süden der USA entlang des Golfs von Mexiko."
  },
  {
    id: 97,
    name: "Atacamagraben",
    map: "suedamerika.jpg",
    box: { x1: 15.0, x2: 27.0, y1: 46.2, y2: 58.2 },
    tip: "Tiefseerinne im östlichen Pazifischen Ozean vor der Küste Südamerikas."
  },
  {
    id: 98,
    name: "Venezuela",
    map: "suedamerika.jpg",
    box: { x1: 28.1, x2: 40.1, y1: 4.8, y2: 16.8 },
    tip: "Staat an der Nordküste Südamerikas am Karibischen Meer."
  },
  {
    id: 99,
    name: "Argentinien",
    map: "suedamerika.jpg",
    box: { x1: 44.7, x2: 56.7, y1: 61.6, y2: 73.6 },
    tip: "Zweitgrößter Staat Südamerikas im südlichen Teil des Kontinents."
  },
  {
    id: 100,
    name: "Bergland von Guyana",
    map: "suedamerika.jpg",
    box: { x1: 38.9, x2: 50.9, y1: 11.1, y2: 23.1 },
    tip: "Südamerikanische Gebirgsregion im Norden des Kontinents."
  },
  {
    id: 101,
    name: "Patagonien",
    map: "suedamerika.jpg",
    box: { x1: 30.3, x2: 42.3, y1: 73.5, y2: 85.5 },
    tip: "Historische Region im südlichen Teil Südamerikas, geteilt zwischen Argentinien und Chile."
  },
  {
    id: 102,
    name: "Mackenzie",
    map: "nordamerika.jpg",
    box: { x1: 24.8, x2: 36.8, y1: 23.1, y2: 35.1 },
    tip: "Längster Fluss Kanadas, der im Nordwesten in die Beaufortsee mündet."
  },
  {
    id: 103,
    name: "Denali",
    map: "nordamerika.jpg",
    box: { x1: 10.4, x2: 22.4, y1: 21.4, y2: 33.4 },
    tip: "Höchster Berg Nordamerikas in Alaska (früher Mount McKinley)."
  },
  {
    id: 104,
    name: "St.-Andreas-Linie",
    map: "nordamerika.jpg",
    box: { x1: 16.3, x2: 28.3, y1: 52.7, y2: 64.7 },
    tip: "Bekannte tektonische Verwerfungszone an der Westküste Nordamerikas (hauptsächlich in Kalifornien)."
  }
];

function checkAnswer(clickX, clickY, targetLocation, currentMap) {
  if (targetLocation.map !== currentMap) return false;

  const { x1, x2, y1, y2 } = targetLocation.box;
  return clickX >= x1 && clickX <= x2 && clickY >= y1 && clickY <= y2;
}