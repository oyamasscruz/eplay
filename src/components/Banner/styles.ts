import styled from 'styled-components'
import bannerImagem from '../../assets/images/banner-homem-aranha.png'

export const Imagem = styled.section`
  margin-top: 80px;
  background-image: url(${bannerImagem});
  background-size: cover;
  height: 560px;
  font-weight: bold;
  padding-top: 340px;
`
export const Texto = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
`
export const TextoPreco = styled.p`
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
