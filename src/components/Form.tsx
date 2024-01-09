const Form = () => {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input type="text" placeholder="digite o seu nome" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="e-mail" placeholder="digite o seu melhor email" />
      </div>
      <div>
        <a href="">Leia os termos</a>
        <div>
          <input type="checkbox" />
          <label>Concordo com os termos</label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
