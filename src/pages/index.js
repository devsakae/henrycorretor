import Hero from '@/components/Hero'
import Imoveis from '@/components/Imoveis'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Henry Simon - Corretor imobiliário</title>
        <meta name="description" content="Imóveis de excelente custo benefício na região de Florianópolis (ilha e continente)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Imoveis />
      </div>
    </div>
  )
}
