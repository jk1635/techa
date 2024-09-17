import { MouseEvent } from 'react';

import styled from '@emotion/styled';

import Close from '@assets/icons/close.svg';
import theme from '@styles/theme';

interface DialogProps {
  name?: string;
  image?: string;
  isOpen: boolean;
  isClose: () => void;
}

const Dialog = ({ name, image, isOpen, isClose }: DialogProps) => {
  if (!isOpen || !image) return null;

  const handleBackgroundClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) isClose();
  };

  return (
    <BackgroundContainer onClick={handleBackgroundClick}>
      <DialogWrapper>
        <ImageWrapper>
          <Image src={image} alt="selected-image" />
        </ImageWrapper>
        <InfoWrapper>
          <Name>{name}</Name>
        </InfoWrapper>
        <CloseIcon src={Close} onClick={isClose} alt="close" />
      </DialogWrapper>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const DialogWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  display: flex;
  width: calc(100% - 3rem);
  max-width: 63.5rem;
  border-radius: 0.75rem;
  background-color: rgb(45, 8, 100);
  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled.div`
  width: 32rem;
  min-width: 32rem;
  height: 32rem;
  border-radius: 0.75rem 0 0 0.75rem;
  background-color: rgb(24, 13, 54);
`;

const Image = styled.img`
  height: 100%;
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2.5rem;
  width: 100%;
`;

const Name = styled.h4`
  margin-bottom: 2rem;
  ${theme.fonts.heading1Bold}
  text-align: center;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export default Dialog;
