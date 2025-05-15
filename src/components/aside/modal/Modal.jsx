import styles from '../Modal.module.css';

const Modal = ({ children, title, onClose }) => {
  return (
    <div className={`${styles.modal} ${styles['modal--open']}`}>
      <div className={styles['modal-backdrop']} onClick={onClose} />
      <div className={styles['modal-container']}>
        <h2 className={`${styles['modal-title']} text-title`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
