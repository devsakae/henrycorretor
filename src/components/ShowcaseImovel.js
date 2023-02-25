import Link from 'next/link'

export default function ShowcaseImovel({ imovel }) {
  return (
    <Link href={ `/imovel/${imovel.id}` } className="group-hover:opacity-80 transition-opacity duration-200">
    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img src={ `/imoveis/${imovel.id}/capa.webp` } alt={ imovel.description } class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>
    <h3 class="mt-4">{ imovel.title }</h3>
    <div className="flex flex-row gap-3 text-sm">
      <div>{ imovel.tipo }</div>
      <div>{ imovel.bairro }</div>
      { imovel.features.length > 0 && imovel.features.map((f) => (<div>{ f }</div>)) }
    </div>
    </Link>
  )
}