import { Imagem, Texto, TextoPreco } from './styles'

const Banner = () => (
  <Imagem>
    <div className="container">
      <Texto>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Texto>
      <TextoPreco>
        <span>De R$ 250,00</span>
        <br /> por apenas R$ 99,90
      </TextoPreco>
    </div>
  </Imagem>
)

export default Banner
