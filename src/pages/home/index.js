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
          <div className='app-titulo'>
            <img src='/assets/rosa.png' alt='flor' />
            <h1> Nova Flor </h1>
          </div>

          <div className='app-informacoes'>
            <select>
              <option>
                Selecione
              </option>
            </select>

            <input type='text' placeholder='Cor' />
            <input type='text' placeholder='Preço' />
            <input type='number' placeholder='Quantidade' />

            <button>SALVAR</button>
          </div>

        </section>

        <section className='app-listar'>
          <div className='app-titulo'>
            <img src='/assets/rosa.png' alt='flor' />
            <h1>Lista de Flores</h1>
          </div>

          <div className='app-buscar'>

              <input type='text' placeholder='Buscar por nome'/>
              <img src='/assets/lupa.png' alt='lupa' />
      
          </div>

          <div className='app-tabela'>
            <table>
              <tbody>
                <tr>
                  <th>Nome</th>
                  <th>Cor</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th></th>
                </tr>
              </tbody>

              <thead>
                <tr>

                </tr>
              </thead>
            </table>
          </div>
        </section>

      </header>
    </main>
  );
}

export default App;
