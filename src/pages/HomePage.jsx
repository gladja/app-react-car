import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      Want to find the car you want when you need it? Do you want to discover
      the best cars for you?
      <button type="button" onClick={() => navigate('/catalog')}>
        Discover
      </button>
    </>
  );
};
