import { Link, useParams } from "react-router-dom";
import carros from "../mocks/listaCarros";
import { useState } from "react";

export default function Carrinho () {
    const { id } = useParams();

    const carro = carros.find((carro) => carro.id === Number(id));
    const listaCarros = carros.filter((carro) => carro.id !== Number(id));
    const [dias, setDias] = useState (0)
    const [resultado, setResultado] = useState(0)

    function calculoDiaria() {
        setResultado(carro.diaria * dias)
    }

    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center bg-white">
                <div className="w-[50%] h-[50%] flex justify-center mt-4">
                    <img className="w-[450px]" src={carro.foto} alt={carro.modelo} />
                </div>
                <div className="w-[600px] h-[400px] flex flex-col justify-between items-center mt-4">
                    <div className="flex gap-20">
                        <p className="font-bold">Modelo: </p><p>{carro.modelo}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold">Marca: </p><p>{carro.marca}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold">Categoria: </p><p>{carro.categoria}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold">Ano: </p><p>{carro.ano}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold">Diária: </p><p>{carro.diaria}</p>
                    </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <input onChange={(e) => setDias(e.target.value)}
                    className= " px-2 w-[200px] h-[40px] border-4 rounded-xl border-black bg-black text-white" type="text" placeholder="Dias Utilizados" />
                    <button onClick={calculoDiaria}
                    className="font-bold border-4 p-2 rounded-xl bg-black text-white border-black">
                        Calcular
                    </button>
                    <p><strong>Valor: {resultado} R$ </strong></p>
                </div>
                </div>    
            </div>
            <div className="flex justify-around w-[50%px] h-[217px]">
                {listaCarros.map(
                    (carro) => {
                        return (
                            <div className="flex justify-center items-center gap-5">
                                <div className="">
                                    <img className= "w-[200px]" src={carro.foto} alt={carro.modelo} />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-5">
                                    <p><strong>{carro.marca}</strong></p>
                                    <p><strong>R$: </strong>{carro.diaria}</p>
                                    <Link to={`/carro/${carro.id}`}>
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