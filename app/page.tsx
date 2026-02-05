import { redirect } from 'next/navigation';

export default function Home() {
  // Esta función redirige al usuario automáticamente a /pokes
  redirect('/pokes');
}