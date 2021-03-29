import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <input placeholder="Pesquisar..." type="text" />
      <FiSearch size={20} color="var(--gray)" />
    </Container>
  );
}

export default SearchInput;