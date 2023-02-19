import db from "../infra/db.js";

class ContentsDAO {
  static listar() {
    const query = "SELECT * FROM produtos";
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      });
    });
  }

  static inserir(produtos) {
    const query =
      "INSERT INTO produtos (produto, descricao, valor) VALUES (?, ?, ?)";
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [produtos.produto, produtos.descricao, produtos.valor],
        function (err) {
          if (err) {
            reject({
              mensagem: "Erro ao inserir o produto",
              erro: err,
            });
          }

          resolve({
            mensagem: "Produto registrado com sucesso",
            contentId: this.lastID,
          });
        }
      );
    });
  }

  static deletar(id) {
    const query = "DELETE FROM produtos WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(query, [id], (err) => {
        if (err) {
          reject({
            mensagem: "Erro ao deletar o produto",
            erro: err,
          });
        }

        resolve({ mensagem: "Produto deletado com sucesso" });
      });
    });
  }

  static atualizar(id, produtos) {
    const query =
      "UPDATE produtos SET produto = ?, descricao = ?, valor = ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [produtos.produto, produtos.descricao, produtos.valor, id],
        (err) => {
          if (err) {
            reject({
              mensagem: "Erro ao atualizar o produto",
              erro: err,
            });
          }

          resolve({ mensagem: "Produto atualizado com sucesso" });
        }
      );
    });
  }
}

export default ContentsDAO;
