import styled from 'styled-components'
import { variaveis } from '../../styles'

export const Head = styled.header`
  background-color: ${variaveis.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;

  a {
    text-decoration: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LinksTitulo = styled.ul`
  margin-left: 40px;
  list-style: none;
  display: flex;

  li {
    margin-right: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`

export const CarrinhoContainer = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
`
