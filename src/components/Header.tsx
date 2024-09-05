import styled from '@emotion/styled';

import theme from '@styles/theme';

const Header = () => {
  return <HeaderContainer>TECHA MIYA</HeaderContainer>;
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 2.75rem;
  margin-bottom: 5.625rem;
  ${theme.fonts.headingLarge};
  color: #ffffff;
`;

export default Header;
