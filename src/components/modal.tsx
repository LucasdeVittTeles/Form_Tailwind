type Props = {
  isOpen?: boolean;
};

const Modal = ({ isOpen }: Props) => {
  if (isOpen) {
    return (
      <div className="fixed bg-white text-black w-1/2 h-1/3 flex items-center justify-center">
        Testando
      </div>
    );
  }
  return null;
};

export default Modal;
