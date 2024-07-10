import motos from '../mocks/listaMotos';
import './style4.css';

export default function Moto() {
    return (
      <div className='container-moto'>
        {motos.map(
          (moto) => {
              return (
                  <div className="card-moto">
                      <div className="img-moto">
                          <img src={moto.foto} alt={moto.modelo} />
                      </div>
                      <div className="detalhes">
                          <div className="info">
                              <p>Modelo: </p>
                              <p> {moto.modelo}</p>
                          </div>
                          <div className="info">
                              <p>Marca: </p>
                              <p> {moto.marca}</p>
                          </div>
                          <div className="info">
                              <p>Categoria: </p>
                              <p> {moto.categoria}</p>
                          </div>
                          <div className="info">
                              <p>Ano: </p>
                              <p> {moto.ano}</p>
                          </div>
                          <div className="info">
                              <p>Diária: </p>
                              <p> {moto.diaria}</p>
                          </div>
                                <button>Alugar</button>
                      </div>
                  </div>
              )
          }
        )}
      </div>
    );
  }