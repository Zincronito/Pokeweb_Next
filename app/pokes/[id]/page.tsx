import React from 'react';
import PokeCardModern from '@/src/components/PokeCardModernProps'; 

interface PokeDetalleProps {
  params: Promise<{ id: string }>;
}

export default async function PokeDetallePage({ params }: PokeDetalleProps) {
  const { id } = await params;
  
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) return <div className="text-center p-10">Pokemon no encontrado</div>;
  const data = await res.json();

 
  const typeNames = data.types.map((t: any) => t.type.name);
  const abilityNames = data.abilities.map((a: any) => a.ability.name.replace('-', ' '));

  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-50">
        
     
        <div className="w-full bg-white shadow-sm py-4 mb-4 text-center">
             <h1 className="text-xl font-bold text-slate-800">Detalle de Pokémon</h1>
        </div>

    
        <PokeCardModern 
            id={data.id}
            name={data.name}
            image={data.sprites.other['official-artwork'].front_default || data.sprites.front_default}
            types={typeNames}
            abilities={abilityNames}
            base_experience={data.base_experience}
            height={data.height}
            weight={data.weight}
        />

    </div>
  );
}