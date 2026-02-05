import Image from "next/image";
import Link from "next/link"; 

const ids = [1, 2, 3, 4, 5]; 

export default function PokemonesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen"> 
      {/* MENU LATERAL / SUPERIOR */}
      <div className="bg-slate-100 p-4 w-full lg:w-64 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:h-screen border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4 hidden lg:block">Pokédex</h2>
        {ids.map((id) => (
            <Link 
              href={`/pokes/${id}`} 
              key={id}
              className="p-2 bg-white rounded-lg shadow hover:bg-blue-100 transition-all flex items-center justify-center min-w-[80px]"
            >
              <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                alt={`Pokemon ${id}`} 
                width={50} 
                height={50} 
              />
            </Link>
        ))}
      </div>

      {/* ÁREA DE CONTENIDO (Aquí se renderiza el page.tsx) */}
      <div className="flex-1 p-8 bg-white">
        {children}
      </div>
    </div>
  );
}