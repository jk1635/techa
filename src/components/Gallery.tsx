import styled from '@emotion/styled';

import SearchIcon from '@assets/icons/search.svg';
import theme from '@styles/theme';

const Gallery = () => {
  return (
    <GalleryContainer>
      <SearchWrapper>
        <Search>
          <Searchbar type="number" placeholder="Number" onChange={handleInputChange} />
          <SearchIcon className="search-icon" />
        </Search>
      </SearchWrapper>
      <CardList>
        {data &&
          data.map((item, index) => (
            <Card key={index}>
              <Image src={item.image} alt={item.name} />
              <CardTitle>{item.name}</CardTitle>
            </Card>
          ))}
      </CardList>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.section`
  margin-left: 3rem;
  width: 100%;
  max-width: 56.5rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const Search = styled.div`
  position: relative;
  width: 13.125rem;
  height: 2.5rem;

  & > .search-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Searchbar = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background-color: transparent;
  padding-left: 1rem;
  color: #ffffff;
  ${theme.fonts.body2Medium};
  caret-color: rgb(190, 117, 255);
  transition: 0.25s;
`;

const CardList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
`;

const Card = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: rgba(142, 138, 152, 0.15);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardTitle = styled.span`
  padding: 0.875rem 1.5rem;
  ${theme.fonts.headingMedium};
  color: #ffffff;
`;

export default Gallery;

// // pages/index.js
// import { useEffect, useState } from 'react';
// import { fetchNFTs } from './api/fetchNFTs';
//
// export default function Home() {
//   const [nfts, setNfts] = useState([]);
//
//   useEffect(() => {
//     fetchNFTs(0, 10).then(data => {
//       setNfts(data.filter(nft => nft != null));
//     });
//   }, []);
//
//   return (
//     <div className="gallery">
//       {nfts.map((nft, index) => (
//         nft && <img key={index} src={nft.image} alt={nft.name} />
//       ))}
//     </div>
//   );
// }

// // pages/api/fetchNFTs.js
// import axios from 'axios';
//
// async function fetchNFTData(tokenId) {
//   const url = `https://planet-miya.sunmiya.club/techa/${tokenId}.json`;
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error(`Failed to fetch data for token #${tokenId}:`, error);
//     return null;
//   }
// }
//
// export async function fetchNFTs(start, end) {
//   const requests = [];
//   for (let i = start; i <= end; i++) {
//     requests.push(fetchNFTData(i));
//   }
//   return Promise.all(requests);
// }
