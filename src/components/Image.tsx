import { useState } from 'react';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import styled from '@emotion/styled';

import theme from '@styles/theme';

interface ImageProps {
  item: {
    image: string;
    name: string;
  };
  onClick: () => void;
}

interface CardProps {
  inView: boolean;
  loaded: boolean;
}

const LazyLoadImage = React.memo(({ item, onClick }: ImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loaded, setLoaded] = useState(false);

  return (
    <Card ref={ref} onClick={onClick} inView={inView} loaded={loaded}>
      {loaded && <Skeleton />}
      {inView && <Image src={item.image} alt={`image-${item.name}`} onLoad={() => setLoaded(true)} />}
      <CardTitle>{item.name}</CardTitle>
    </Card>
  );
});

const Skeleton = styled.div`
  width: 100%;
  background-color: rgba(142, 138, 152, 0.3);
  border-radius: 0.75rem;
`;

const Card = styled.li<CardProps>`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 0.75rem;
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

export default LazyLoadImage;
