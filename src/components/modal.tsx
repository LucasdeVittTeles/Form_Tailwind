type Props = {
  isOpen?: boolean;
  setOpenModal: (isOpen: boolean) => void;
  title: string;
  description: string;
};

const Modal = ({ isOpen, setOpenModal, title, description }: Props) => {
  if (isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50">
        <div className="fixed top-1/2 left-1/2 translate-x-1/2 p-150 bg-white">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={() => setOpenModal(false)}>Fechar</button>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
