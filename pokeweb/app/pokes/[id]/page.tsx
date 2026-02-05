import React from 'react'
import Image from "next/image";

interface pokeInterface {
  params: Promise<{ id: string }> 
} 

export default async function PokeDetallePage({ params }: pokeInterface) {
  const { id } = await params; 
  
 
  const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
  const data = await datos.json();

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold capitalize mb-4 text-blue-600">
            {data.forms[0].name} #{id}
        </h1>
        
       
        <div className="bg-gray-100 rounded-full p-8 mb-6">
            <Image 
                src={data.sprites.other.dream_world.front_default} 
                alt={data.name} 
                width={200} 
                height={200}
            />
        </div>

       
        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-slate-50 p-4 rounded shadow">
                <p className="font-bold text-gray-500">Peso</p>
                <p>{data.weight / 10} kg</p>
            </div>
            <div className="bg-slate-50 p-4 rounded shadow">
                <p className="font-bold text-gray-500">Altura</p>
                <p>{data.height / 10} m</p>
            </div>
        </div>
    </div>
  )
}