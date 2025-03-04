import React, { useCallback, useEffect, useState } from "react";

import { Container, ListTop, NovoUsuarioBtn } from "./styles";
import Table from "../../../components/Table";
import SearchInput from "../../../components/SearchInput";
import { FiUserPlus } from "react-icons/fi";
import Api from "../../../shared/services/api";
import Client from "../../../models/Client";
import { format } from "date-fns";

const columns = [
  {
    field: "name",
    headerName: "Nome",
  },
  {
    field: "cellphone",
    headerName: "Telefone",
  },
  {
    field: "sexText",
    headerName: "Sexo",
  },
  {
    field: "formatBirthday",
    headerName: "Date de Nascimento",
  },
  {
    field: "lastService",
    headerName: "Último Serviço",
  },
];

const Clients: React.FC = () => {
  const [rows, setRows] = useState<Client[]>([]);

  const getClients = useCallback(async () => {
    const { data } = await Api.get<Client[]>("clients");

    setRows(
      data.map((x) => ({
        ...x,
        formatBirthday: format(new Date(x.birthday), "dd/MM/yyyy"),
        sexText: x.sex === "M" ? "Masculino" : "Feminino",
        lastService: x.lastService || '-'
      }))
    );
  }, []);

  useEffect(() => {
    getClients();
  }, [getClients]);

  return (
    <Container>
      <ListTop>
        <h1>Clientes</h1>
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

export default Clients;
