import { Head, HeaderContainer, LinksTitulo, CarrinhoContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <Head>
      <HeaderContainer>
        <img src={logo} alt="logo" />
        <nav>
          <LinksTitulo>
            <li>
              <a>Categorias</a>
            </li>
            <li>
              <a>Novidades</a>
            </li>
            <li>
              <a>Promoção</a>
            </li>
          </LinksTitulo>
        </nav>
      </HeaderContainer>
      <CarrinhoContainer>
        0 - produto(s)
        <img src={carrinho} />
      </CarrinhoContainer>
    </Head>
  )
}

export default Header
