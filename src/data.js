// import house images
import House1 from './assets/img/houses/house1.png';
import House1Lg from './assets/img/houses/house1lg.png';

import House2 from './assets/img/houses/house2.png';
import House2Lg from './assets/img/houses/house2lg.png';

import House3 from './assets/img/houses/house3.png';
import House3Lg from './assets/img/houses/house3lg.png';

import Henry from './assets/img/agents/henrysimon.png';

export const housesData = [
  {
    id: 1,
    type: 'Casa',
    name: 'Mansão na Lagoa',
    description:
      'Casa grande, de dois pisos, em conceito aberto, localizado no coração da Lagoa da Conceição, ao lado do Terminal Urbano e próximo ao centrinho. Espaço gourmet, cozinha com utensílios profissionais, piscina, churrasqueira, garagem para dois veículos, esta residência vai fazer você se apaixonar ainda mais por Floranópolis',
    image: House1,
    imageLg: House1Lg,
    bairro: 'Lagoa da Conceição',
    address: 'Condomínio Lagoa',
    comodos: 3,
    banheiros: 3,
    area: 720,
    price: 5000000,
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 2,
    type: 'Casa',
    name: 'Residência nos Ingleses',
    description:
      'Residência localizada a 200 metros da praia, possui um estilo vintage por ter sido fabricada na década de 70/80. O quintal desta residência possui diversas árvores frutíferas, além de possuir churrasqueira, rancho e espaço para mais de 4 carros na garagem.',
    image: House2,
    imageLg: House2Lg,
    bairro: 'Ingleses',
    address: 'Rua Osvaldo Clímaco, 160',
    comodos: 3,
    banheiros: 3,
    area: 1000,
    price: 900000,
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 3,
    type: 'Apartamento',
    name: 'Residencial Central Park',
    description:
      'Apartamento semimobiliado, localizado no sexto andar do bloco B (equivalente ao oitavo andar do bloco A), possui vista para o Parque São Jorge. Condomínio com piscina, salão de festas, salão de jogos, mercado pague-por-uso, portaria remota 24 horas. Vaga de garagem localizada defronte ao hall. Localização próxima a Fiesc, restaurante, posto de gasolina e parques, do lado da subida do morro da Lagoa da Conceição.',
    image: House3,
    imageLg: House3Lg,
    bairro: 'Itacorubi',
    address: 'Rua Salvatina Feliciana dos Santos, 260',
    comodos: 3,
    banheiros: 3,
    area: 78,
    price: 580000,
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
];
