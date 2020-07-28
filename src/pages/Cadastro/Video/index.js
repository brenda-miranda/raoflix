import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';

function CadastroVideo() {
   return (
      <Layout>
         <h1>Cadastro de Vídeo</h1>

         <Link to="/cadastro/categoria">
            Cadastrar categoria
         </Link>
      </Layout>
   )
}

export default CadastroVideo;