import { ChangeEvent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import Dialog from '@components/Dialog.tsx';
import { filterState, searchState } from '@stores/atoms.ts';

import { Attribute, Techa } from '@/types';
import Search from '@assets/icons/search.svg';
import theme from '@styles/theme';

const Gallery = ({ data }) => {
  const [searchId, setSearchId] = useRecoilState(searchState);
  const [filters] = useRecoilState(filterState);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{ name: string; image: string }>({ name: '', image: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 4);
    setSearchId(formattedValue);
  };

  const filteredData: Techa[] = data.filter(item => {
    if (!item.name.includes(searchId)) return false;

    const isAttributeMatch = Object.entries(filters).every(([key, selectedValues]) => {
      if (selectedValues.length === 0) {
        return true;
      } else {
        const attribute: Attribute = item.attributes.find(
          attr => attr.trait_type === key && selectedValues.includes(attr.value)
        );
        return !!attribute;
      }
    });

    return isAttributeMatch;
  });

  const handleImageClick = item => {
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
          <Searchbar type="text" maxlength="4" placeholder="Number" value={searchId} onChange={handleInputChange} />
          <SearchIcon src={Search} />
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

const LazyLoadImage = ({ item, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loaded, setLoaded] = useState(false);

  return (
    <Card ref={ref} onClick={onClick} inView={inView} loaded={loaded}>
      {loaded && <Skeleton />}
      {inView && <Image src={item.image} alt={item.name} onLoad={() => setLoaded(true)} />}
      <CardTitle>{item.name}</CardTitle>
    </Card>
  );
};

const Skeleton = styled.div`
  width: 100%;
  background-color: rgba(142, 138, 152, 0.3);
  border-radius: 8px;
`;

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

const Card = styled.li`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background-color: rgba(142, 138, 152, 0.15);
  cursor: pointer;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity 1s ease-out;

  :hover {
    box-sizing: border-box;
    transition: border 0.3s;
    border: 3px solid rgb(190, 117, 255);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardTitle = styled.span`
  padding: 0.875rem 1.5rem;
  ${theme.fonts.heading2Bold};
  color: #ffffff;
`;

export default Gallery;
