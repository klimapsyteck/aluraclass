import React from 'react';
import Menu from './componente/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componente/BannerMain';
import Carousel from './componente/Carousel';
import Footer from './componente/Footer';


function App() {
  return (
    <div >
      <Menu />

      <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"o que é Front-end"}>
      </BannerMain>

      <Carousel   
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]} 
       />

       <Carousel   
          category={dadosIniciais.categorias[1]} 
       />

       <Carousel   
          category={dadosIniciais.categorias[2]} 
       />  

       <Carousel   
          category={dadosIniciais.categorias[3]} 
       />  

       <Carousel   
          category={dadosIniciais.categorias[4]} 
       /> 

       <Carousel   
          category={dadosIniciais.categorias[5]} 
       />

    </div>
  );
}

export default App;
