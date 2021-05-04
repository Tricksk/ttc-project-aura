import { TextField } from "@material-ui/core";
import React from "react";
import { Col, Form, Row } from "../../../../styles/global";

// import { Container } from './styles';

const NewRecord: React.FC = () => {
  return (
    <Form>
      <Row>
        <Col>
          <TextField onClick={() => {}} variant="outlined" label="Nome" />
        </Col>
      </Row>
    </Form>
  );
};

export default NewRecord;
