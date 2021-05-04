import React, { useCallback, useEffect, useState } from "react";

import { Container, ListTop, NovoUsuarioBtn } from "./styles";
import Table from "../../../components/Table";
import SearchInput from "../../../components/SearchInput";
import { FiUserPlus } from "react-icons/fi";
import Api from "../../../shared/services/api";
import Client from "../../../models/Client";

const columns = [
  {
    field: "name",
    headerName: "Nome",
  },
  {
    field: "record_name",
    headerName: "Ficha",
  },
  {
    field: "duration",
    headerName: "Duração (min)",
  },
];

const Services: React.FC = () => {
  const [rows, setRows] = useState<Client[]>([]);

  const getServices = useCallback(async () => {
    const { data } = await Api.get<Client[]>("services");

    setRows(
      data.map((x) => ({
        ...x,
        record_name: "-",
      }))
    );
  }, []);

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <Container>
      <ListTop>
        <h1>Serviços</h1>
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

export default Services;
