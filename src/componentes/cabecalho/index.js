import './index.scss';

export default function() {


    return(    
        <main className='pagina-cabecalho'>
            <header className='cabecalho'>
                <img id='logo' src='/assets/logotipo.png'/>

                <div className='caminhos'>
                    <p> Home </p>
                    <p> Controle de Flores </p>
                    <p> Controle de Estoque  </p>
                </div>

                <img id='conta' src='/assets/acconts.png'/>
            </header>
        </main>
    )
}