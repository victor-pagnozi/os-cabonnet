import React, { Component } from "react";
import './styles.css';
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
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <Label for="logradouro-servico">Local do servico</Label>
            <Input
              type="text"
              name="logradouro-servico"
              id="logradouro-servico"
              placeholder="Inisira aqui qual o endereço do serviço a ser executado"
            />
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <Label for="descricao-servico">Descrição do Serviço</Label>
            <Input
              type="textarea"
              name="text"
              id="descricao-servico"
              row="10"
            />
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <Label for="anexo">Anexo</Label>
            <Input type="file" name="anexo" id="anexo" />
            <FormText color="muted">
              Insira aqui um anexo para facilitar o entendimento do serviço a
              ser realizado
            </FormText>
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <Label for="equipe">Equipe</Label>
            <Input type="select" name="equipe" id="equipe">
              <option>Equipe Fulano</option>
              <option>Equipe ciclano</option>
              <option>Equipe beltrano</option>
              <option>Outros</option>
            </Input>
          </Col>
        </Row>

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
