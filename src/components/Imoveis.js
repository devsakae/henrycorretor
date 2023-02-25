import ShowcaseImovel from "./ShowcaseImovel"

const allImoveis = [
  {
    id: '001',
    title: 'Casa de alto padrão',
    tipo: 'Casa',
    description: 'Mansão na Lagoa da Conceição com área social integrada, 3 suítes, piscina, cantinho do churrasco. Localização excelente, logo após a descida do morro da Lagoa, próximo ao terminal urbano, supermercado, posto de gasolina e restaurantes.',
    bairro: 'Lagoa da Conceição',
    features: [],
  }, 
  {
    id: '002',
    title: 'Apartamento 5° andar',
    tipo: 'Apartamento',
    description: 'Excelente moradia no coração do Estreito, área continental de Florianópolis, com vista privilegiada para o mar e próximo a supermercado, posto de gasolina e restaurantes.',
    bairro: 'Estreito',
    features: [],
  }
]

export default function Imoveis() {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          { allImoveis.map((i) => (<ShowcaseImovel imovel={ i } />)) }
        </div>
      </div>
    </div>

  )
}
