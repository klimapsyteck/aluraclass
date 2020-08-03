import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import PageDefault from '../../../componente/PageDefault';
import FormField from '../../../componente/FormField';
import Button from '../../../componente/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';


function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
    url: '',
  };

  // const {handleChange, values, clearForm} = useForm(valoresIniciais);
  const {handleChange, values, clearForm} = useForm({
    nome: '',
    descricao: '',
    cor: '',
    url: '',
});

  const [categorias, setCategorias] = useState([]);  


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
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.nome}  </h1>

      <form onSubmit={(infosDoEvento) => {
        infosDoEvento.preventDefault();
        categoriasRepository.create({
          titulo: values.nome,
          cor: values.cor,
          link_extra: {
            "text": values.descricao, 
             "url": values.url,
          },
      })
      .then(() => {
          console.log('Não sie');
          history.push('/');
      });
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

        <FormField
          label="URL da categoria: "
          type="text"
          name="url"
          value={values.url}
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
