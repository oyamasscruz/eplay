import styled, { createGlobalStyle } from 'styled-components'

export const variaveis = {
  branco: '#eee',
  cinza: '#333',
  preto: '#111',
  verde: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  *{
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${variaveis.preto};
  color: ${variaveis.branco};
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
