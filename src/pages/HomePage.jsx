import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      Welcome home
      <button type="button" onClick={() => navigate('/catalog')}>
        Start
      </button>
    </>
  );
};
