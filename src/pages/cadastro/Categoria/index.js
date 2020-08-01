import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  // utilizando o custom hooks useForm
  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  // ============

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://sky-flix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([...resposta]);
      });
  }, []);

  // useEffect(() => {
  //   if (window.location.href.includes('localhost')) {
  //     const URL = 'http://localhost:8080/categorias';
  //     fetch(URL)
  //       .then(async (respostaDoServer) => {
  //         if (respostaDoServer.ok) {
  //           const resposta = await respostaDoServer.json();
  //           setCategorias(resposta);
  //           console.log(resposta);
  //           return;
  //         }
  //         throw new Error('Não foi possível pegar os dados');
  //       });
  //   }
  // }, []);
  // console.log(categorias);
  // console.log(values);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          setCategorias([...categorias, values]);
          // Para iniciar sempre com um valor nulo
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
