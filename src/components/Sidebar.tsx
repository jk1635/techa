import styled from '@emotion/styled';

import Refresh from '@assets/icons/refresh.svg';

const Sidebar = () => {
  return (
    <Navbar>
      <FilterWrapper>
        <span>Filter</span>
        <button>
          <Refresh />
        </button>
      </FilterWrapper>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  max-width: 16.5rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.875rem;
  border-bottom: 1px solid #ffffff;
`;

export default Sidebar;
