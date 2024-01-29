import { CiCircleRemove } from "react-icons/ci";

type Props = {
  isOpen?: boolean;
  setOpenModal: (isOpen: boolean) => void;
  title: string;
  description: string;
};

const Modal = ({ isOpen, setOpenModal, title, description }: Props) => {
  if (isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-10 rounded-md flex flex-col min-h-96 min-w-96">
        <button onClick={() => setOpenModal(false)} className="fixed top-4 right-4">
            <CiCircleRemove size={30}></CiCircleRemove>
          </button>
          <h2 className="mt-8 mb-8 text-xl">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
