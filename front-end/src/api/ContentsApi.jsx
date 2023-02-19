const ContentsApi = () => {
  const url = 'http://localhost:3000'

  return {
      getContents () {
          return fetch(`${url}/conteudo`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteContent (contentId) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createContent (produto, descricao, valor) {
        return fetch(`${url}/conteudo`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              produto: produto,
              descricao: descricao,
              valor: valor
            }
          )
       })
      },
      updateContent(contentId, produto, descricao, valor) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              produto: produto,
              descricao: descricao,
              valor: valor
            }
          )
       })
      },
  }
}

export default ContentsApi