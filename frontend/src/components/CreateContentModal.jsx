import { Modal, Button, Form } from "react-bootstrap";
import "../../public/index.css";

function CreateContentModal(props) {
  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal show={props.isModalOpen}>
        <Form
          className="modalb"
          onSubmit={(event) => {
            props.createContent(event);
          }}
        >
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Adicionar produto</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="titulo">
              <Form.Label>Produto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="porcentagem">
              <Form.Label>Valor</Form.Label>
              <Form.Control type="text" placeholder="00,00" />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-dark" onClick={props.handleClose}>
              Fechar
            </Button>
            <Button variant="outline-success" type="submit">
              Adicionar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateContentModal;
