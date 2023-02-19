import { Modal, Button, Form } from "react-bootstrap";
function UpdateContentModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.isModalOpen}>
        <Form
          onSubmit={(event) => {
            props.updateContent(event);
          }}
        >
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Atualizar Produto</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="produto">
              <Form.Label>Produto</Form.Label>
              <Form.Control defaultValue={props.content.produto} type="text" />
            </Form.Group>

            <Form.Group controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                defaultValue={props.content.descricao}
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="valor">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                defaultValue={props.content.valor}
                type="text"
                placeholder="R$ 00,00"
              />
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

export default UpdateContentModal;
