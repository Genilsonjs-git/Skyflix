import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
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
  create,
};
