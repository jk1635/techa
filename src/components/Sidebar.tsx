import { ChangeEvent, useState } from 'react';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { filterState, initialFilterState, searchState } from '@stores/atoms';

import Options from '@/data/techamiya_traits.json';
import ArrowDown from '@assets/icons/arrow-down.svg';
import ArrowUp from '@assets/icons/arrow-up.svg';
import Refresh from '@assets/icons/refresh.svg';
import theme from '@styles/theme.ts';

const Sidebar = () => {
  const [filters, setFilters] = useRecoilState(filterState);
  const [, setSearchId] = useRecoilState(searchState);
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});
  const [animate, setAnimate] = useState<boolean>(false);

  const handleFilterChange = (traitType: string, value: string, e: ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[traitType];
      const updatedValues = e.target.checked ? [...currentValues, value] : currentValues.filter(v => v !== value);

      return { ...prevFilters, [traitType]: updatedValues };
    });
  };

  const toggleDropdown = (traitType: string) => {
    setIsOpen(prev => ({ ...prev, [traitType]: !prev[traitType] }));
  };

  const handleClear = () => {
    setAnimate(true);
    setFilters(initialFilterState);
    setIsOpen({});
    setSearchId('');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <Navbar>
      <FilterWrapper>
        <Title>Filter</Title>
        <RefreshIcon onClick={handleClear} src={Refresh} animate={animate} alt="refresh" />
      </FilterWrapper>

      {Object.entries(Options).map(([traitType, values]) => (
        <div key={traitType}>
          <TraitTypeHeader onClick={() => toggleDropdown(traitType)}>
            <h3>{traitType}</h3>
            <DropdownIcon src={isOpen[traitType] ? ArrowUp : ArrowDown} alt="dropdown" />
          </TraitTypeHeader>
          {isOpen[traitType] && (
            <>
              {values.map(value => {
                return (
                  <SelectBox key={value}>
                    <Checkbox
                      type="checkbox"
                      checked={filters[traitType].includes(value)}
                      onChange={e => handleFilterChange(traitType, value, e)}
                    />
                    <Label>{value}</Label>
                  </SelectBox>
                );
              })}
            </>
          )}
        </div>
      ))}
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

const Title = styled.h2`
  ${theme.fonts.heading2Bold}
`;

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RefreshIcon = styled.img<{ animate: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${rotateRight} 0.6s linear;
      animation-iteration-count: 1;
    `}
`;

const TraitTypeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;
  ${theme.fonts.body2Medium};
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const DropdownIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.5;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.875rem 0;
  ${theme.fonts.bodyLight};
`;

const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const Label = styled.span`
  margin-left: 1rem;
`;

export default Sidebar;
