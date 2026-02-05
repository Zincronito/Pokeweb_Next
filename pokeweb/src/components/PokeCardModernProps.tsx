import Image from 'next/image';
import Link from 'next/link';

interface PokeCardModernProps {
  id: number;
  name: string;
  image: string;
  types: string[]; // Array de tipos (fuego, agua...)
  abilities: string[]; // Habilidades
  base_experience: number; // Usaremos esto como "Score"
  height: number;
  weight: number;
}

export default function PokeCardModern({ 
  id, 
  name, 
  image, 
  types, 
  abilities, 
  base_experience,
  height,
  weight
}: PokeCardModernProps) {
  
  return (
    <div className='flex items-center justify-center py-10'>
      <div className='mx-auto bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden max-w-[300px]'>
        
    
        <div className="bg-slate-100 flex justify-center items-center h-64 relative group overflow-hidden">
          
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent" />
             
             <Image
                src={image}
                className="object-contain z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                alt={name}
            />
        </div>

    
        <div className="group px-6 py-4 grid z-10 gap-2">
     
            <div>
                <h2 className="group-hover:text-cyan-700 font-bold text-2xl capitalize">
                    {name}
                </h2>
                <div className="flex gap-2 mt-1">
                    {types.map((t) => (
                        <span key={t} className="text-slate-500 font-semibold text-sm uppercase tracking-wide bg-slate-100 px-2 py-0.5 rounded">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

     
            <div className="h-20 overflow-hidden">
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    <strong className="text-black">Habilidades:</strong> {abilities.join(', ')}. 
                    <br />
                    Este Pokémon mide {height/10}m y pesa {weight/10}kg. Es un compañero formidable para cualquier entrenador.
                </p>
            </div>

       
            <div className="grid grid-cols-2 flex items-end justify-between mt-2 pt-4 border-t border-slate-100">
                
           
                <div className="font-black flex flex-col">
                    <span className="text-yellow-500 text-xs tracking-wider">BASE EXP</span>
                    <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600 transition-colors">
                        {base_experience}
             
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#eab308" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                    </span>
                </div>

         
                <div className="flex flex-col items-end">
                    <span className="text-4xl font-bold text-slate-200 select-none">
                        #{id}
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}