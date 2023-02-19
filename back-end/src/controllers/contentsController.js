import ContentsDAO from "../DAO/ContentsDAO.js";

class contentsController {
  static rotas(app) {
    app.get("/produtos", contentsController.listar);
    app.post("/produtos", contentsController.inserir);
    app.delete("/produtos/:id", contentsController.deletar);
    app.put("/produtos/:id", contentsController.atualizar);
  }

  static async listar(req, res) {
    const produtos = await ContentsDAO.listar();

    res.send(produtos);
  }

  static async inserir(req, res) {
    const produtos = {
      produto: req.body.produto,
      descricao: req.body.descricao,
      valor: req.body.valor,
    };

    const result = await ContentsDAO.inserir(produtos);

    if (result.erro) {
      res.status(500).send(result);
    }

    res.send(result);
  }

  static async deletar(req, res) {
    const produtos = await ContentsDAO.deletar(req.params.id);

    if (produtos.erro) {
      res.status(500).send("Erro ao deletar o produto");
    }

    res.send({ mensagem: "Produto removido com sucesso" });
  }

  static async atualizar(req, res) {
    const produtos = {
      produto: req.body.produto,
      descricao: req.body.descricao,
      valor: req.body.valor,
    };

    const result = await ContentsDAO.atualizar(req.params.id, produtos);

    if (result.erro) {
      res.status(500).send("Erro ao atualizar o produto");
    }

    res.send({ mensagem: "Produto alterado com sucesso" });
  }
}

export default contentsController;
