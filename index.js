import blocos from './modules/blocos';
import deputados from './modules/deputados';
import eventos from './modules/eventos';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...eventos,
};

export default CamaraAPI;
