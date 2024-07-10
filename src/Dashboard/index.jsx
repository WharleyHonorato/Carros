import carros from '../mocks/listaCarros';
import { Link } from 'react-router-dom';
import './style3.css';

export default function Dashboard() {
  return (
    <div className='container-carro'>
      {carros.map(
        (carro) => {
            return (
                <div className="card-carro">
                    <div className="img-car">
                        <img src={carro.foto} alt={carro.modelo} />
                    </div>
                    <div className="detalhes">
                        <div className="info">
                            <p>Modelo: </p>
                            <p> {carro.modelo}</p>
                        </div>
                        <div className="info">
                            <p>Marca: </p>
                            <p> {carro.marca}</p>
                        </div>
                        <div className="info">
                            <p>Categoria: </p>
                            <p> {carro.categoria}</p>
                        </div>
                        <div className="info">
                            <p>Ano: </p>
                            <p> {carro.ano}</p>
                        </div>
                        <div className="info">
                            <p>Diária: </p>
                            <p> {carro.diaria}</p>
                        </div>
                        <Link to={`/carro/${carro.id}`}>
                        <button>Alugar</button>
                        </Link>
                    </div>
                </div>
            )
        }
      )}
    </div>
  );
}