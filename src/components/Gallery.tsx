import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { useAtom } from 'jotai';

import Dialog from '@components/Dialog';
import LazyLoadImage from '@components/Image';
import { filterState, searchState } from '@stores/atoms';

import { Techa } from '@/types';
import Search from '@assets/icons/search.svg';
import theme from '@styles/theme';

interface GalleryProps {
  data: Techa[];
}

const Gallery = ({ data }: GalleryProps) => {
  const [searchId, setSearchId] = useAtom(searchState);
  const [filters] = useAtom(filterState);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{ name: string; image: string }>({ name: '', image: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 4);
    setSearchId(formattedValue);
  };

  const filterAttributes = useCallback(
    (item: Techa) => {
      return Object.entries(filters).every(([key, selectedValues]) => {
        if (selectedValues.length === 0) {
          return true;
        } else {
          const attribute = item.attributes.find(
            attr => attr.trait_type === key && selectedValues.includes(attr.value)
          );
          return !!attribute;
        }
      });
    },
    [filters]
  );

  const filteredData: Techa[] = useMemo(
    () =>
      data.filter(item => {
        if (!item.name.includes(searchId)) return false;
        return filterAttributes(item);
      }),
    [data, searchId, filterAttributes]
  );

  const handleImageClick = (item: Techa) => {
    setIsOpen(true);
    setSelectedItem({ name: item.name, image: item.image });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <GalleryContainer>
      <TopArea>
        <SearchWrapper>
          <Searchbar type="text" placeholder="Number" value={searchId} onChange={handleInputChange} />
          <SearchIcon src={Search} alt="search-icon" />
        </SearchWrapper>
      </TopArea>

      <CardList>
        {filteredData &&
          filteredData.map((item, index) => (
            <LazyLoadImage key={index} item={item} onClick={() => handleImageClick(item)} />
          ))}
      </CardList>

      <Dialog isClose={handleClose} isOpen={isOpen} name={selectedItem?.name} image={selectedItem?.image} />
    </GalleryContainer>
  );
};

const GalleryContainer = styled.section`
  margin-left: 3rem;
  width: 100%;
  max-width: 56.5rem;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 13.125rem;
  height: 2.5rem;
`;

const Searchbar = styled.input`
  padding-left: 1rem;
  width: 100%;
  height: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background-color: transparent;
  color: #ffffff;
  ${theme.fonts.body2Medium};
  caret-color: rgb(190, 117, 255);
  transition: 0.25s;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(-50%);
`;

const CardList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
`;

export default Gallery;
