import React, { useCallback, useEffect, useState } from "react";

import { Container, ListTop, NovoUsuarioBtn } from "./styles";
import Table from "../../../components/Table";
import SearchInput from "../../../components/SearchInput";
import { FiUserPlus } from "react-icons/fi";
import Api from "../../../shared/services/api";
import User from "../../../models/User";

const columns = [
  {
    field: "name",
    headerName: "Nome",
  },
  {
    field: "login",
    headerName: "Usuário",
  },
];

const Users: React.FC = () => {
  const [rows, setRows] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    const { data } = await Api.get<User[]>("users");

    setRows(
      data.map((x) => ({
        ...x,
      }))
    );
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      <ListTop>
        <h1>Usuários</h1>
        <SearchInput />

        <NovoUsuarioBtn>
          <FiUserPlus color="var(--white)" size={24} />
          Novo
        </NovoUsuarioBtn>
      </ListTop>
      <Table
        columns={columns}
        rows={rows}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    </Container>
  );
};

export default Users;
