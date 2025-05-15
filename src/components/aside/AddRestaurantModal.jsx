import styled from 'styled-components';
import { selectableCategories } from '../../constant/constant';
import Modal from './modal/Modal';
import { addNewRestaurant } from '../../api/api';

const AddRestaurantForm = styled.form``;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

const Label = styled.label`
  color: var(--grey-400);
  font-size: 14px;

  &::after {
    padding-left: 4px;
    color: var(--primary-color);
    content: '*';
  }
`;

const CategorySelect = styled.select`
  height: 44px;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  color: var(--grey-300);
`;

const RestaurantNameInput = styled.input`
  height: 44px;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
`;

const DescriptionTextarea = styled.textarea`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  resize: none;
`;

const DescriptionHelpText = styled.span`
  color: var(--grey-300);
  font-size: 14px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
`;

const AddRestaurantModal = ({
  onUpdateRestaurants,
  onCloseAddRestaurantModal,
}) => {
  const handleAddRestaurantModalClose = () => {
    onCloseAddRestaurantModal();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRestaurant = {
      id: e.target.name.value,
      category: e.target.category.value,
      name: e.target.name.value,
      description: e.target.description.value,
    };
    await addNewRestaurant(newRestaurant);
    onUpdateRestaurants();
    handleAddRestaurantModalClose();
  };

  return (
    <Modal title="새로운 음식점" onClose={handleAddRestaurantModalClose}>
      <AddRestaurantForm onSubmit={handleFormSubmit}>
        <FormItem>
          <Label htmlFor="category" required>
            카테고리
          </Label>
          <CategorySelect name="category" id="category" required>
            {selectableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </CategorySelect>
        </FormItem>

        <FormItem>
          <Label htmlFor="name" required>
            이름
          </Label>
          <RestaurantNameInput
            type="text"
            name="name"
            id="name"
            required
            pattern=".*\S.*"
          />
        </FormItem>

        <FormItem>
          <Label htmlFor="description">설명</Label>
          <DescriptionTextarea
            name="description"
            id="description"
            rows="5"
            required
          />
          <DescriptionHelpText>
            메뉴 등 추가 정보를 입력해 주세요.
          </DescriptionHelpText>
        </FormItem>

        <SubmitButtonContainer>
          <SubmitButton type="submit">추가하기</SubmitButton>
        </SubmitButtonContainer>
      </AddRestaurantForm>
    </Modal>
  );
};

export default AddRestaurantModal;
