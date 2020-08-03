import config from '../config';

    const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

    function create(objetoDaCategoria){
      // console.log(config.URL_BACKEND_TOP);

     return fetch(`${URL_CATEGORIES}?_embed=videos`, {
         method: 'POST',  
         headers: {
              'Content-type': 'application/json',
         },  
         body: JSON.stringify(objetoDaCategoria),
     })
          .then(async (respostaDoServidor) => {
              if (respostaDoServidor.ok){
                  const resposta = await respostaDoServidor.json();
                  return resposta;
              }

            throw new Error('Não foi possível cadastrar os dados :( ')

          });       
  }

    // End my function to create a category

    function getAll() {
        return fetch(`${URL_CATEGORIES}`)
          .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              const resposta = await respostaDoServidor.json();
              return resposta;
            }
      
            throw new Error('Não foi possível pegar os dados :(');
          });
      }

    function getAllWithVideos(){
        // console.log(config.URL_BACKEND_TOP);

       return fetch(`${URL_CATEGORIES}?_embed=videos`)
            .then(async (respostaDoServidor) => {
                if (respostaDoServidor.ok){
                    const resposta = await respostaDoServidor.json();
                    return resposta;
                }

              throw new Error('Não foi possível pegar os dados :( ')

            });       
    }

    export default{
        getAllWithVideos,
        getAll,
        create,
    };