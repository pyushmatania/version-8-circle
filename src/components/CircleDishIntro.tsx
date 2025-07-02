import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CircleDish {
  id: string;
  name: string;
  image: string;
}

const dishes: CircleDish[] = [
  {
    id: 'pathaan-circle',
    name: 'Pathaan',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 'ar-rahman-circle',
    name: 'A.R. Rahman',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 'rrr-circle',
    name: 'RRR',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 'spider-man-circle',
    name: 'Spider-Man',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 'taylor-swift-circle',
    name: 'Swifties',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 'stranger-things-circle',
    name: 'Hawkins',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
  }
];

type Props = {
  onSelect: (id: string) => void;
};

const CircleDishIntro: React.FC<Props> = ({ onSelect }) => {
  const [openDish, setOpenDish] = useState<string | null>(null);

  useEffect(() => {
    const masks = gsap.utils.toArray<HTMLElement>('.dish-mask');
    masks.forEach((mask) => {
      gsap.fromTo(
        mask,
        { y: '0%' },
        {
          y: '-100%',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mask,
            start: 'top 80%',
            end: 'top 30%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mb-12">
      {dishes.map((dish) => (
        <div key={dish.id} className="relative w-32 h-32 mx-auto">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full rounded-full object-cover"
          />
          <div className="dish-mask absolute inset-0 bg-purple-700 rounded-full" />
          <button
            type="button"
            onClick={() => setOpenDish(openDish === dish.id ? null : dish.id)}
            className="absolute inset-0 rounded-full focus:outline-none"
          />
          {openDish === dish.id && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/70 rounded-full space-y-2">
              <button
                className="px-2 py-1 text-xs bg-purple-600 rounded"
                onClick={() => onSelect(dish.id)}
              >
                Enter Circle
              </button>
              <button
                className="px-2 py-1 text-xs bg-purple-600 rounded"
                onClick={() => setOpenDish(null)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CircleDishIntro;

