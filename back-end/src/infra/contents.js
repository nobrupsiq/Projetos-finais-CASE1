/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

//==== Conteúdos
const CONTENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "produtos" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "produto" text,
    "descricao" text,
    "valor" text
  );`;

function createTableContents() {
  db.run(CONTENTS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de produtos");
  });
}

db.serialize(() => {
  createTableContents();
});
