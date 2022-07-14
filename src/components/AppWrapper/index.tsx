import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React from 'react';
import { ComposedProviders } from '../../store/composeProviders';
import DescriptionModalProvider from '../../store/descriptionModal/descriptionModalProvider/descriptionModalProvider';
import useDogsNft from '../../store/dogs/useDogs/useDogs';
import Drawer from '../Drawer';

const AppWrapper: React.FC = ({ children }) => {
  const { fetchDogsNft } = useDogsNft();
  //const { fetchToWatchAnimes } = useToWatch();
  
  React.useEffect(() => {
    fetchDogsNft({ dogName: 'Mell' });
    //fetchToWatchAnimes();

  }, [])

  return (
    <div style={{ display: "flex" }}>
      <Drawer />
      <DescriptionModalProvider>
        <div style={{ padding: "30px 60px", width: "100%" }}>
          {children}
        </div>
      </DescriptionModalProvider>
    </div>
  );
}

// função que executa no lado do servidor do next que serve pra verificar se o usuario está
// autenticado com um token nos cookies antes que ele possa ver qualquer conteudo na pagina
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { animes_token: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        statusCode: 401,
      }
    }
  }

  return {
    props: {}
  }
}

export default AppWrapper;