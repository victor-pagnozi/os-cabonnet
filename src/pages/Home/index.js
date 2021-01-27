import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  Container,
} from "reactstrap";

const Home = (props) => {
  return (
    <Container>
      <Form>
        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label for="servico">Serviço a ser verificado</Label>
              <Input type="select" name="servico" id="servico">
                <option>Rompimento</option>
                <option>Acompanhamento de energia</option>
                <option>Lançamento de Cordoalha</option>
                <option>Lançamento de Cabo</option>
                <option>Montagem de CEO</option>
                <option>Montagem de CTO</option>
                <option>Outros</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label for="logradouro-servico">Local do servico</Label>
              <Input
                type="text"
                name="logradouro-servico"
                id="logradouro-servico"
                placeholder="Inisira aqui qual o endereço do serviço a ser executado"
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Home;
