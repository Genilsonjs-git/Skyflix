import config from '../config';

const URL_CATEGORIAS = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
      //   setCategorias([...resposta]);  -> vai embora e passa a funcionar no then
      //    que fica no lado de onde esta função for chamada.
      // ************************  validação de erros nessa área *************************
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
      //   setCategorias([...resposta]);  -> vai embora e passa a funcionar no then
      //    que fica no lado de onde esta função for chamada.
      // ************************  validação de erros nessa área *************************
    });
}

export default {
  getAllWithVideos,
  getAll,
};
