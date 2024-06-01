// Vytvořte komponentu Joke, která zobrazuje jeden vtip. Tato komponenta bude sídlit ve vlastní složce se všemi potřebnými CSS styly a obrázky. Komponenta Joke nechť má pět props: userAvatar, userName, text, likes, dislikes.
import './style.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);

  const addLike = () => {
    setUpLikes(upLikes + 1);
  };
  const addDisLike = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={addLike}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {upLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={addDisLike}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {downLikes}
        </span>
      </div>
    </div>
  );
};
