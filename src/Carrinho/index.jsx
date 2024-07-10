import { useParams } from "react-router-dom";
import carros from "../mocks/listaCarros";

export default function Carrinho () {
    const { id } = useParams();

    const carro = carros.find((carro) => carro.id === Number(id));
    const listaCarros = carros.filter((carro) => carro.id !== Number(id));

    
    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center bg-neutral-900">
                <div className="w-[50%] h-[50%] flex justify-center mt-4">
                    <img className="w-[450px]" src={carro.foto} alt={carro.modelo} />
                </div>
                <div className="w-[600px] h-[400px] flex flex-col justify-between items-center mt-4">
                    <div className="flex gap-20">
                        <p className="font-bold text-white">Modelo: </p><p className="text-white">{carro.modelo}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold text-white">Marca: </p><p className="text-white">{carro.marca}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold text-white">Categoria: </p><p className="text-white">{carro.categoria}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold text-white">Ano: </p><p className="text-white">{carro.ano}</p>
                    </div>
                    <div className="flex gap-20">
                        <p className="font-bold text-white">Diária: </p><p className="text-white">{carro.diaria}</p>
                    </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <input className= " px-2 w-[200px] h-[40px] border-4 rounded-xl border-white bg-white text-black" type="text" placeholder="Dias Utilizados"  />
                    <button className=" font-bold border-4 p-2 rounded-xl bg-white text-black border-white">
                        Calcular
                    </button>
                    <p className="font-bold text-white">Valor: </p>
                </div>
                </div>    
            </div>
            <div className="flex justify-around w-[50%px] h-[217px] bg-neutral-900">
                {listaCarros.map(
                    (carro) => {
                        return (
                            <div className="flex justify-center items-center gap-5">
                                <div className="">
                                    <img className= "w-[200px]" src={carro.foto} alt={carro.modelo} />
                                </div>
                                <div className="text-white flex flex-col justify-center items-center gap-5">
                                    <p><strong>{carro.marca}</strong></p>
                                    <p><strong>R$: </strong>{carro.diaria}</p>
                                    <button className=" w-[150px] font-bold border-4 p-2 rounded-xl bg-white text-black border-white"
                                    >Alugar
                                    </button>
                                </div>
                            </div>
                        )
                    }
                )}    
            </div>            
        </div>        
    )
}