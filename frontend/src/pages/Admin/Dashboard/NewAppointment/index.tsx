import React, { useCallback, useEffect, useState } from "react";
import DayPicker from "react-day-picker";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { configDayPicker, dayPickerConfig } from "..";
import { Calendar, DatePicker } from "../styles";
import Api from "../../../../shared/services/api";
import Client from "../../../../models/Client";
import Service from "../../../../models/Service";
import { CreateAppointment } from "../../../../models/CreateAppointment";
import { Button } from "@material-ui/core";
import { useModalStyles } from "../../../../styles/modal";
import { Col, Form, Row } from "../../../../styles/global";

interface INewAppointment {
  setNewAppointment: any;
}

const morning = ["08:00", "09:00", "10:00", "11:00"];
const afternoon = ["13:00", "14:00", "15:00", "16:00", "17:00"];

const NewAppointment: React.FC<INewAppointment> = ({ setNewAppointment }) => {
  const styles = useModalStyles();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedHour, setSelectedHour] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    (async () => {
      const { data: dataClient } = await Api.get<Client[]>("clients");
      const { data: dataService } = await Api.get<Service[]>("services");

      setClients(dataClient);
      setServices(dataService);
    })();
  }, []);

  const handleDayClick = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      setNewAppointment((old: any) => {
        return {
          ...old,
          selectedDate: date.toISOString(),
        } as CreateAppointment;
      });
    },
    [setSelectedDate, setNewAppointment]
  );

  return (
    <Form>
      <Row>
        <Col>
          <Autocomplete
            size="small"
            autoHighlight
            options={clients}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) =>
              setNewAppointment((old: any) => {
                return { ...old, clientId: value?.id } as CreateAppointment;
              })
            }
            renderInput={(params) => (
              <TextField {...params} label="Cliente" variant="outlined" />
            )}
          />
        </Col>
        <Col>
          <Autocomplete
            size="small"
            autoHighlight
            options={services}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) =>
              setNewAppointment((old: any) => {
                return { ...old, serviceId: value?.id } as CreateAppointment;
              })
            }
            renderInput={(params) => (
              <TextField {...params} label="Serviço" variant="outlined" />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Calendar style={{ color: "var(--white)" }}>
            <DatePicker>
              <DayPicker
                selectedDays={selectedDate}
                onDayClick={handleDayClick}
                disabledDays={configDayPicker}
                {...dayPickerConfig}
              />
            </DatePicker>
          </Calendar>
        </Col>
        {selectedDate && (
          <Col>
            <strong>Manhã</strong>
            <Row style={{ justifyContent: "flex-start" }}>
              {morning.map((hour) => (
                <Button
                  key={hour}
                  onClick={() => setSelectedHour(hour)}
                  className={[
                    styles.button,
                    selectedHour === hour ? styles.buttonSelected : "",
                  ].join(" ")}
                >
                  {hour}
                </Button>
              ))}
            </Row>
            <strong style={{ marginTop: 50 }}>Tarde</strong>
            <Row style={{ justifyContent: "flex-start" }}>
              {afternoon.map((hour) => (
                <Button
                  key={hour}
                  onClick={() => setSelectedHour(hour)}
                  className={[
                    styles.button,
                    selectedHour === hour ? styles.buttonSelected : "",
                  ].join(" ")}
                >
                  {hour}
                </Button>
              ))}
            </Row>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default NewAppointment;
