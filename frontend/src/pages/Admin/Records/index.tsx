import React, { useCallback, useEffect, useState } from "react";

import { Container, ListTop, NovoUsuarioBtn } from "./styles";
import Table from "../../../components/Table";
import SearchInput from "../../../components/SearchInput";
import { FiFilePlus, FiSave, FiTerminal, FiX, FiXCircle } from "react-icons/fi";
import Api from "../../../shared/services/api";
import Record from "../../../models/Record";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import NewRecord from "./NewRecord";
import { useModalStyles } from "../../../styles/modal";

const columns = [
  {
    field: "name",
    headerName: "Nome",
  },
];

const Records: React.FC = () => {
  const classes = useModalStyles();
  const [rows, setRows] = useState<Record[]>([]);
  const [modalState, setModalState] = useState<boolean>(false);

  const getRecords = useCallback(async () => {
    const { data } = await Api.get<any[]>("records");

    setRows(
      data.map((x) => ({
        ...x,
      }))
    );
  }, []);

  useEffect(() => {
    getRecords();
  }, [getRecords]);

  const handleChangeModalState = useCallback(() => {
    setModalState((modal) => !modal);
  }, [setModalState]);

  const handleSaveNewRecord = useCallback(() => {}, []);

  return (
    <>
      <Container>
        <ListTop>
          <h1>Fixas</h1>
          <SearchInput />

          <NovoUsuarioBtn onClick={handleChangeModalState}>
            <FiFilePlus color="var(--white)" size={24} />
            Novo
          </NovoUsuarioBtn>
        </ListTop>
        <Table
          columns={columns}
          rows={rows}
          onDelete={() => {}}
          onEdit={() => {}}
        />

        <ListTop style={{ marginTop: 50 }}>
          <h1>Campos</h1>
          <SearchInput />

          <NovoUsuarioBtn onClick={handleChangeModalState}>
            <FiTerminal color="var(--white)" size={24} />
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

      <Dialog
        open={modalState}
        onClose={handleChangeModalState}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle style={{ position: "relative" }}>
          Novo Agedamento
          <IconButton
            style={{ position: "absolute", right: 10, top: 10 }}
            onClick={handleChangeModalState}
          >
            <FiX size={20} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <NewRecord />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSaveNewRecord}
            className={classes.buttonPrimary}
          >
            <FiSave size={20} style={{ marginRight: 20 }} /> Salvar
          </Button>
          <Button
            onClick={handleChangeModalState}
            className={classes.buttonCancel}
          >
            <FiXCircle size={20} style={{ marginRight: 20 }} /> Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Records;
