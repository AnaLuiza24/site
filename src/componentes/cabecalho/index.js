import './index.scss';

export default function Cabecalho() {


    return(    
        <main className='pagina-cabecalho'>
            <header className='cabecalho'>
                <img id='logo' src='/assets/logotipo.png' alt='logo'/>

                <div className='caminhos'>
                    <p> Home </p>
                    <p id='flores'> Controle de Flores </p>
                    <p> Controle de Estoque  </p>
                </div>

                <img id='conta' src='/assets/acconts.png' alt='conta'/>
            </header>
        </main>
    )
}