// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';

// import agents images
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
    bedrooms: '3',
    bathrooms: '3',
    surface: '720 m2',
    year: '2020',
    price: '5000000',
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
    bedrooms: '4',
    bathrooms: '2',
    surface: '800 m2',
    year: '1981',
    price: '1200000',
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
    bedrooms: '2',
    bathrooms: '2',
    surface: '78 m2',
    year: '2012',
    price: '580000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 4,
    type: 'Casa',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    bairro: 'Centro',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 5,
    type: 'Casa',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    bairro: 'Estreito',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 6,
    type: 'Casa',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    bairro: 'Centro',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 7,
    type: 'Apartamento',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    bairro: 'Centro',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '260000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 8,
    type: 'Apartamento',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    bairro: 'Estreito',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '300000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 9,
    type: 'Apartamento',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    bairro: 'Estreito',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '535000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 10,
    type: 'Casa',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    bairro: 'Centro',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '850000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 11,
    type: 'Casa',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    bairro: 'Centro',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '230000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
  {
    id: 12,
    type: 'Casa',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    bairro: 'Estreito',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '980000',
    agent: {
      image: Henry,
      name: 'Henry Simon',
      phone: '+55 (48) 99630-0018',
    },
  },
];
