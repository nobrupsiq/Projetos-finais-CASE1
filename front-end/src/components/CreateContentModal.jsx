import { Modal, Button, Form } from "react-bootstrap";
import "./style.css";
function CreateContentModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.isModalOpen}>
        <Form
          className="modalB"
          onSubmit={(event) => {
            props.createContent(event);
          }}
        >
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Adicionar Produto 🗂</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="produto">
              <Form.Label>Produto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="porcentagem">
              <Form.Label>Valor</Form.Label>
              <Form.Control type="text" placeholder="R$ 00,00" />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-dark" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="outline-success" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateContentModal;
