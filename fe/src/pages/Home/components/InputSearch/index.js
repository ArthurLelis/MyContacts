import PropTypes from 'prop-types';

import { Conatiner } from './styles';

export default function InputSearch({ value, onChange }) {
  return (
    <Conatiner>
      <input
        type="text"
        value={value}
        placeholder="Pesquisar contato"
        onChange={onChange}
      />
    </Conatiner>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
