import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import Container from '@components/Container';
import Gallery from '@components/Gallery';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

import global from '@styles/global';
import theme from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <Gallery />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  min-height: auto;
`;

export default App;
