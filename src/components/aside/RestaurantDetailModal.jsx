import styled from 'styled-components';
import Modal from './modal/Modal';
import { useContext } from 'react';
import {
  SelectedRestaurantValueContext,
  SelectedRestaurantActionContext,
} from '../../contexts/RestaurantContext';
import {
  RestaurantDetailModalValueContext,
  RestaurantDetailModalActionContext,
} from '../../contexts/ModalContext';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const RestaurantDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const CloseButtonContainer = styled.div`
  display: flex;
`;

const CloseButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey100};

  font-size: 14px;
  line-height: 20px;
`;

const RestaurantDetailModal = () => {
  const isRestaurantDetailModalOpen = useContext(
    RestaurantDetailModalValueContext
  );
  const { closeRestaurantDetailModal } = useContext(
    RestaurantDetailModalActionContext
  );
  const selectedRestaurant = useContext(SelectedRestaurantValueContext);
  const setSelectedRestaurant = useContext(SelectedRestaurantActionContext);

  const handleRestaurantDetailModalClose = () => {
    closeRestaurantDetailModal();
    setSelectedRestaurant(null);
  };
  return (
    <Modal
      title={selectedRestaurant?.name}
      onClose={handleRestaurantDetailModalClose}
      isOpen={isRestaurantDetailModalOpen}
    >
      <RestaurantInfo>
        <RestaurantDescription>
          {selectedRestaurant?.description}
        </RestaurantDescription>
      </RestaurantInfo>
      <CloseButtonContainer>
        <CloseButton type="button" onClick={handleRestaurantDetailModalClose}>
          닫기
        </CloseButton>
      </CloseButtonContainer>
    </Modal>
  );
};

export default RestaurantDetailModal;
