import { Modal, Button, Form } from "react-bootstrap";
function UpdateContentModal(props) {
  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal show={props.isModalOpen}>
        <Form
          className="modalb"
          onSubmit={(event) => {
            props.updateContent(event);
          }}
        >
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Atualizar Produto</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="titulo">
              <Form.Label>Produto</Form.Label>
              <Form.Control defaultValue={props.content.titulo} type="text" />
            </Form.Group>

            <Form.Group controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control defaultValue={props.content.descricao} type="text" />
            </Form.Group>

            <Form.Group controlId="porcentagem">
              <Form.Label>Valor</Form.Label>
              <Form.Control defaultValue={props.content.porcentagem} type="text" />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-dark" onClick={props.handleClose}>
              Fechar
            </Button>
            <Button variant="outline-success" type="submit">
              Atualizar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default UpdateContentModal;
