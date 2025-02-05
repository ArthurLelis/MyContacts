import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import useContactForm from './useContactForm';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    handleSubmit,
    getErrorMessageByFieldName,
    name,
    handleNameChange,
    isSubmiting,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          placeholder="Nome *"
          $error={getErrorMessageByFieldName('name')}
          onChange={(event) => handleNameChange(event)}
          disabled={isSubmiting}
          autoComplete="new-password"
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          value={email}
          placeholder="E-mail"
          $error={getErrorMessageByFieldName('email')}
          onChange={(event) => handleEmailChange(event)}
          disabled={isSubmiting}
          autoComplete="new-password"
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          maxLength="15"
          placeholder="Telefone"
          onChange={(event) => handlePhoneChange(event)}
          disabled={isSubmiting}
          autoComplete="new-password"
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmiting}
        >
          <option value=""> Sem categoria </option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmiting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
