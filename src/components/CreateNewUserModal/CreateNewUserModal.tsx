import './CreateNewUserModal.scss';
import { CreateNewUserForm } from './CreateNewUserForm';

type Props = {
  onClose: () => void,
};

export const CreateNewUserModal = ({ onClose }: Props) => {
  const closeModal = () => {
    const modalWindow = document.querySelector('.modal');

    modalWindow?.classList.add('out');
    setTimeout(onClose, 2000);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />

      <div className="modal-content">
        <div className="box">
          <CreateNewUserForm onClose={onClose} />
        </div>
      </div>

      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  );
};
