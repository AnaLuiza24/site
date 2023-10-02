import './index.scss';
import Cabecalho from '../../componentes/cabecalho';


function App() {
  return (
    <main className='pagina-app'>

      <Cabecalho />

      <header className='pagina-app-principal'>
        <div className='app-titulos'>
          <h5> ÁREA ADMINISTRATIVA </h5>
          <h1> Controle de Flores </h1>
        </div>
        
        <section className='app-adicionar'>
            <div className='titu'>
              <img src='/assets/rosa.png'/>
              <h1> Nova Flor </h1>
            </div>

            <div className='app-informacoes'>
              <select> <option>  </option> </select>
            </div>

        </section>

      </header>
    </main>
  );
}

export default App;
