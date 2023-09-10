import { ThemeProvider } from 'styled-components'

import PageRouter from './service/PageRouter'
import { Theme } from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <PageRouter />
    </ThemeProvider>
  )
}

export default App
