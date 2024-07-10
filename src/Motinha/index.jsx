import { useParams } from "react-router-dom";
import motos from "../mocks/listaMotos";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Motinha () {
    const { id } = useParams();

    const moto = motos.find((moto) => moto.id === Number(id));
    const listaMotos = motos.filter((moto) => moto.id !== Number(id));
    const [dias, setDias] = useState (0)
    const [resultado, setResultado] = useState(0)

    function calculoDiaria() {
        setResultado(moto.diaria * dias)
    }

    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center bg-white">
                <div className="w-[50%] h-[50%] flex justify-center mt-4">
                    <img className="w-[450px]" src={moto.foto} alt={moto.modelo} />
                </div>
                <div className="w-[600px] h-[400px] flex flex-col justify-between items-center mt-4">
                    <div className="flex gap-20">
                        <p className="font-bold"><strong>Modelo: </strong></p><p>{moto.modelo}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold"><strong>Marca: </strong></p><p>{moto.marca}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold"><strong>Categoria: </strong></p><p>{moto.categoria}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold"><strong>Ano: </strong></p><p>{moto.ano}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold"><strong>Diária: </strong></p><p>{moto.diaria}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <input onChange={(e) => setDias(e.target.value)} 
                        className= " px-2 w-[200px] h-[40px] border-4 rounded-xl border-black bg-black text-white" type="text" placeholder="Dias Utilizados" />
                        <button onClick={calculoDiaria}
                        className=" font-bold border-4 p-2 rounded-xl bg-black text-white border-black"
                        >Calcular</button>
                        <p><strong>Valor: {resultado} R$ </strong></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-[50%px] h-[217px]">
                {listaMotos.map(
                    (moto) => {
                        return (
                            <div className="flex justify-center items-center gap-5">
                                <div className="">
                                    <img className= "w-[200px]" src={moto.foto} alt={moto.modelo} />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-5">
                                    <p><strong>{moto.marca}</strong></p>
                                    <p><strong>R$: </strong>{moto.diaria}</p>
                                    <Link to={`/moto/${moto.id}`}>
                                    <button className=" w-[150px] font-bold border-4 p-2 rounded-xl bg-black text-white border-black"
                                    >Alugar
                                    </button> 
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )

}