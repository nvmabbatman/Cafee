import { Coffee, Leaf } from 'lucide-react';

export default function BackgroundArt() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] mix-blend-multiply">
      <Coffee size={400} className="absolute top-[5%] -left-[5%] -rotate-12 text-cafe-text" strokeWidth={0.5} />
      <Leaf size={500} className="absolute top-[35%] -right-[10%] rotate-45 text-cafe-text" strokeWidth={0.5} />
      <Coffee size={350} className="absolute bottom-[10%] left-[15%] rotate-12 text-cafe-text" strokeWidth={0.5} />
      <Leaf size={450} className="absolute -bottom-[5%] right-[5%] -rotate-12 text-cafe-text" strokeWidth={0.5} />
    </div>
  );
}
