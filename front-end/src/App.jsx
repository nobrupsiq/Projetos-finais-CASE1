import { Table, Container, Button } from "react-bootstrap";
import ContentsApi from "./api/ContentsApi";
import { useEffect, useState } from "react";
import CreateContentModal from "./components/CreateContentModal";
import UpdateContentModal from "./components/UpdateContentModal";

function App() {
  const [contents, setContents] = useState();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState();

  const handleCloseCreateModal = () => setIsCreateModalOpen(false);
  const handleShowCreateModal = () => setIsCreateModalOpen(true);

  const handleCloseUpdateModal = () => setIsUpdateModalOpen(false);
  const handleShowUpdateModal = () => setIsUpdateModalOpen(true);

  useEffect(() => {
    async function getData() {
      await ContentsApi()
        .getContents()
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setContents(data);
        });
    }

    getData();
  }, []);

  async function deleteContent(contentId) {
    try {
      await ContentsApi().deleteContent(contentId);

      const formattedContents = contents.filter((cont) => {
        if (cont.id !== contentId) {
          return cont;
        }
      });

      setContents(formattedContents);
    } catch (err) {
      throw err;
    }
  }

  async function createContent(event) {
    try {
      event.preventDefault();

      const req = event.currentTarget.elements;

      await ContentsApi()
        .createContent(
          req.produto.value,
          req.descricao.value,
          Number(req.Valor.value)
        )
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          setContents([
            ...contents,
            {
              id: res.contentId,
              produto: req.produto.value,
              descricao: req.descricao.value,
              Valor: Number(req.Valor.value),
            },
          ]);

          setIsCreateModalOpen(false);
        });
    } catch (err) {
      throw err;
    }
  }

  async function updateContent(event) {
    try {
      event.preventDefault();

      const req = event.currentTarget.elements;

      await ContentsApi().updateContent(
        selectedContent.id,
        req.produto.value,
        req.descricao.value,
        Number(req.Valor.value)
      );

      const formattedContents = contents.map((cont) => {
        if (cont.id === selectedContent.id) {
          return {
            id: selectedContent.id,
            produto: req.produto.value,
            descricao: req.descricao.value,
            Valor: Number(req.Valor.value),
          };
        }

        return cont;
      });

      setContents(formattedContents);

      setIsUpdateModalOpen(false);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Container
        className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
      >
        <Button
          className="mb-2"
          onClick={handleShowCreateModal}
          variant="outline-dark"
        >
          Registrar Produto 📦
        </Button>
        <Table striped bordered hover>
          <thead className="listaB">
            <tr>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {contents &&
              contents.map((cont) => (
                <tr key={cont.id}>
                  <td>{cont.produto}</td>
                  <td>{cont.descricao}</td>
                  <td>{cont.Valor}</td>
                  <td>
                    <Button
                      onClick={() => deleteContent(cont.id)}
                      variant="outline-danger"
                    >
                      Excluir
                    </Button>
                    <Button
                      onClick={() => {
                        handleShowUpdateModal();
                        setSelectedContent(cont);
                      }}
                      variant="outline-warning"
                      className="m-1"
                    >
                      Atualizar
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
      <CreateContentModal
        isModalOpen={isCreateModalOpen}
        handleClose={handleCloseCreateModal}
        createContent={createContent}
      />
      {selectedContent && (
        <UpdateContentModal
          isModalOpen={isUpdateModalOpen}
          handleClose={handleCloseUpdateModal}
          updateContent={updateContent}
          content={selectedContent}
        />
      )}
    </>
  );
}

export default App;
