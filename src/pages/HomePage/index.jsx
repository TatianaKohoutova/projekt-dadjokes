import './style.css';
import { Joke } from '../../components/Joke';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJoke(data.data);
    };

    fetchJoke();
  }, []);

  return (
    <>
      <div className="container">
        {!joke ? (
          <p>Loading...</p>
        ) : (
          joke.map((selectedJoke) => (
            <Joke
              key={selectedJoke.id}
              userAvatar={selectedJoke.avatar}
              userName={selectedJoke.name}
              text={selectedJoke.text}
              likes={selectedJoke.likes}
              dislikes={selectedJoke.dislikes}
            />
          ))
        )}
      </div>

      <script src="index.js"></script>
    </>
  );
};
