import { ThemeProvider } from 'styled-components'

import { Theme } from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div></div>
    </ThemeProvider>
  )
}

export default App
