import { HashLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className=" position-absolute top-50 start-50">
      <HashLoader size={80} />
      <span style={{ marginLeft: '50px', color: '#f74c70' }}>
        Please Wait, Processing...
      </span>
    </div>
  );
};

export default Spinner;
