import { useEffect } from 'react';
import propTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ largeImage, closeImage }) {
  const closePictureByClickEsc = e => {
    e.keyCode === 27 && closeImage();
  };

  const closeImageOnOverlay = e => {
    e.target === e.currentTarget && closeImage();
  };

  useEffect(() => {
    window.addEventListener('keyup', closePictureByClickEsc);
  });

  useEffect(() => {
    window.removeEventListener('keyup', closePictureByClickEsc);
  });

  return (
    <div className={s.Overlay}>
      <div className={s.Modal} onClick={closeImageOnOverlay}>
        <img src={largeImage} alt="pic" />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  closeImage: propTypes.func.isRequired,
  largeImage: propTypes.string.isRequired,
};
