import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componente/PageDefault';
import FormField from '../../../componente/FormField';
import Button from '../../../componente/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const {handleChange, values, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  

  
  // feito pela imersão com minha alteração
  // useEffect(() => {
  //   if (window.location.href.includes('localhost')) {
  //     const URL =  'http://localhost:8080/categorias';
  //     fetch(URL)
  //       .then(async (respostaDoServer) => {
  //         if (respostaDoServer.ok) {
  //           const resposta = await respostaDoServer.json();
  //           setCategorias(resposta);
  //           return;
  //         }
  //         throw new Error('Não foi possível pegar os dados');
  //       });
  //   }else {
  //     const URL = 'https://aluraclass.herokuapp.com/categorias';
  //     fetch(URL)
  //       .then(async (respostaDoServer) => {
  //         if (respostaDoServer.ok) {
  //           const resposta = await respostaDoServer.json();
  //           setCategorias(resposta);
  //           return;
  //         }
  //         throw new Error('Não foi possível pegar os dados');
  //       });
  //   }
    
  // }, []);
  // feito na aula gravada
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://aluraclass.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
    });
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.nome}  </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }} >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>       

      </form>
    
    {/* Jogando a lista de categorias cadastradas na tela */}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
