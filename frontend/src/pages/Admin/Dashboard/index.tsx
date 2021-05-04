import React, { useCallback,  useState } from "react";
import DayPicker, { DayModifiers, Modifier } from "react-day-picker";
import {
  Button as ButtonUI,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";

import "react-day-picker/lib/style.css";
import Button from "../../../components/Button";

import { FiCalendar, FiSave, FiX, FiXCircle } from "react-icons/fi";
import Appointment from "./Appointment";
import NextAppointment from "./NextAppointment";

import {
  Container,
  Columns,
  Column,
  Title,
  InfoDate,
  SubTitle,
  Wrapper,
  DashboardHeader,
  Calendar,
  DatePicker,
} from "./styles";
import NewAppointment from "./NewAppointment";
import { CreateAppointment } from "../../../models/CreateAppointment";
import Api from "../../../shared/services/api";
import { useModalStyles } from "../../../styles/modal";

export const configDayPicker: Modifier[] = [
  { before: new Date() },
  { daysOfWeek: [0, 6] },
];

export const dayPickerConfig = {
  fromMonth: new Date(),
  weekdaysShort: ["D", "S", "T", "Q", "Q", "S", "S"],
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  modifiers: {
    available: {
      daysOfWeek: [1, 2, 3, 4, 5],
    },
  },
};

const Dashboard: React.FC = () => {
  const classes = useModalStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const [newAppointment, setNewAppointment] = useState<CreateAppointment>();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [, setCurrentMonth] = useState<number>(selectedDate.getMonth());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) setSelectedDate(day);
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month.getMonth());
  }, []);

  const handleSaveNewAppointment = useCallback(async () => {
    await Api.post("/appointments", newAppointment);

    setNewAppointment(undefined);
    setModalOpen(false);
  }, [newAppointment]);

  const handleOpenModal = useCallback(() => setModalOpen(true), []);
  const handleCloseModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Container>
        <DashboardHeader>
          <Title>Horários Agendados</Title>
          <InfoDate>Hoje | Dia 09 | Terça-feira</InfoDate>
          <Button onClick={handleOpenModal}>
            <FiCalendar size={20} color="var(--white)" />
            <p>Novo Agendamento</p>
          </Button>
        </DashboardHeader>

        <Columns>
          <Column>
            <Wrapper>
              <SubTitle>Próximo atendimento</SubTitle>
              <NextAppointment />
            </Wrapper>

            <Wrapper>
              <SubTitle border>Manhã</SubTitle>
              <Appointment />
              <Appointment />
            </Wrapper>

            <Wrapper>
              <SubTitle border>Tarde</SubTitle>
              <Appointment />
              <Appointment />
            </Wrapper>
          </Column>

          <Column>
            <Calendar>
              <DatePicker>
                <DayPicker
                  disabledDays={configDayPicker}
                  onDayClick={handleDateChange}
                  onMonthChange={handleMonthChange}
                  selectedDays={selectedDate}
                  {...dayPickerConfig}
                />
              </DatePicker>
            </Calendar>
          </Column>
        </Columns>
      </Container>

      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle style={{ position: "relative" }}>
          Novo Agedamento
          <IconButton
            style={{ position: "absolute", right: 10, top: 10 }}
            onClick={handleCloseModal}
          >
            <FiX size={20} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <NewAppointment setNewAppointment={setNewAppointment} />
        </DialogContent>
        <DialogActions>
          <ButtonUI
            onClick={handleSaveNewAppointment}
            className={classes.buttonPrimary}
          >
            <FiSave size={20} style={{ marginRight: 20 }} /> Salvar
          </ButtonUI>
          <ButtonUI onClick={handleCloseModal} className={classes.buttonCancel}>
            <FiXCircle size={20} style={{ marginRight: 20 }} /> Cancelar
          </ButtonUI>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dashboard;
