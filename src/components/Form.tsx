import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validations";
import toast from "react-hot-toast";
import Modal from "./modal";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(null);
    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setName("");
    setEmail("");
    setAgree(false);

    toast.success("Cadastro realizado com sucesso.");
  };

  console.log(openModal);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Modal
        isOpen={openModal}
        setOpenModal={setOpenModal}
        title={"Termos de cadastro"}
        description={
          "A política de termos e condições tem, basicamente, um conjunto de disposições com as quais um cliente/usuário tem de concordar para usar um serviço. A política deve cobrir todos os aspectos da usabilidade do seu site/bens/serviços. Ter esta política faz com que o seu negócio pareça mais profissional e também pode responder a qualquer questão/dúvida que venham às mentes dos visitantes que passam em sua Loja Online. Para ajudá-lo a começar, criamos um modelo dos Termos e Condições que você pode usar, basta inserir os seus dados relevantes e publicá-lo no seu Site."
        }
      />
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          placeholder="digite o seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="e-mail">
          E-mail
        </label>
        <input
          type="e-mail"
          placeholder="digite o seu melhor email"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>
      <div className="flex flex-col">
        <a
          href=""
          className="text-xs underline mb-2"
          onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          Clique aqui para ler os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover: bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white "
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
