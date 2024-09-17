import styled from '@emotion/styled';
import useFetchData from '@hooks/useFetchData';

import Gallery from '@components/Gallery';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

const Home = () => {
  const { data, isLoading } = useFetchData();

  if (isLoading) return <Loading />;

  if (!data) return <span>데이터를 불러올 수 없습니다.</span>;

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Gallery data={data} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 76rem;
`;

const Content = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: auto;
`;

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export default Home;
