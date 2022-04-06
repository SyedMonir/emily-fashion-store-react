import { HashLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className=" position-absolute top-50 start-50">
      <HashLoader size={80} color={'#f74c70'} />
    </div>
  );
};

export default Spinner;
