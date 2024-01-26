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
      <div className="fixed top-0 bottom-0 left-0 right-0  bg-black opacity-60">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-10 rounded-md ">
          <h2 className="mb-10">{title}</h2>
          <p>{description}</p>
          <button onClick={() => setOpenModal(false)}>
            <CiCircleRemove size={30}></CiCircleRemove>
          </button>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
