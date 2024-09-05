import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width);
  min-height: 100vh;
  border: 1px solid red;
`;

export default Container;
