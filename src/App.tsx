import Form from './components/Form'

function App() {
  return (
    <div>
      <h1 className='text-red-600'>Inscreva-se</h1>
      <p>Assine nossa NewsLetter e mantenha-se informado</p>
      <div>
      <Form />
      </div>
      <p>Ao se inscrever, voce passara a receber nossos e-mails com as melhores dicas, novidades e ofertas.</p>
    </div>
  );
}

export default App;
