import React from 'react';

import { Container, ListTop } from './styles';
import Table from '../../../components/Table';
import SearchInput from '../../../components/SearchInput';

const columns = [
  {
    field: 'name',
    headerName: 'Nome',
  },
  {
    field: 'cellphone',
    headerName: 'Telefone',
  },
  {
    field: 'sex',
    headerName: 'Sexo',
  },
  {
    field: 'birthday',
    headerName: 'Date de Nascimento',
  },
  {
    field: 'lastService',
    headerName: 'Último Serviço',
  },
];

const Clients: React.FC = () => {
  const rows = [
    { name: 'Patrick Braga', cellphone: '(27) 99975-5002', sex: 'Masculino', birthday: '22/05/1998', lastService: '-' },
    { name: 'Ana Beatriz', cellphone: '(27) 99975-5002', sex: 'Feminino', birthday: '22/05/1998', lastService: '-' },
    { name: 'Patrick Braga', cellphone: '(27) 99975-5002', sex: 'Masculino', birthday: '22/05/1998', lastService: '-' },
    { name: 'Patrick Braga', cellphone: '(27) 99975-5002', sex: 'Masculino', birthday: '22/05/1998', lastService: '-' },
    { name: 'Patrick Braga', cellphone: '(27) 99975-5002', sex: 'Masculino', birthday: '22/05/1998', lastService: '-' }
  ]

  return (
    <Container>
      <ListTop>
        <h1>Clientes</h1>
        <SearchInput />
      </ListTop>
      <Table columns={columns} rows={rows} onDelete={() => { }} onEdit={() => { }} />
    </Container>
  );
}

export default Clients;