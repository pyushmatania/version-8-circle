import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.pexels.com/photos/1739748/pexels-photo-1739748.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1436905/pexels-photo-1436905.jpeg?auto=compress&cs=tinysrgb&w=800'
];

const Exp: React.FC = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.image-mask').forEach((mask) => {
      gsap.fromTo(
        mask,
        { y: '0%' },
        {
          y: '-100%',
          ease: 'power3.out',
          duration: 1,
          scrollTrigger: {
            trigger: mask,
            start: 'top 80%',
            end: 'top 30%'
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    const button = document.querySelector('.menu-button');
    const menuLinks = document.querySelector('.menu-links') as HTMLElement;
    const menuLinkItems = document.querySelectorAll('.menu-link');
    const menuButtonIcon = document.querySelector('.menu-button_icon');
    const menuButtonLineCenter = document.querySelector('.menu-button_line.is-center');
    const menuButtonLineTop = document.querySelector('.menu-button_line.is-top');
    const menuButtonLineBottom = document.querySelector('.menu-button_line.is-bottom');
    const menuButtonText = document.querySelector('.menu-button_text');

    if (!button || !menuLinks || !menuButtonIcon || !menuButtonLineCenter || !menuButtonLineTop || !menuButtonLineBottom || !menuButtonText) {
      return;
    }

    gsap.set(menuLinks, { width: 0 });
    gsap.set(menuLinkItems, { y: '8em' });
    gsap.set(menuButtonLineCenter, { width: '1.25em' });
    gsap.set(menuButtonText, { y: 0 });
    gsap.set(menuButtonIcon, { x: 0 });

    const openMenuTL = gsap.timeline({ paused: true });
    openMenuTL
      .to(menuButtonIcon, { borderRadius: '3em', duration: 0.8, ease: 'power2.out' }, 0)
      .to(menuButtonLineCenter, { width: 0, duration: 0.6, ease: 'back.out(1.7)' }, 0)
      .to(menuButtonLineTop, { rotation: 45, y: 0, duration: 0.7, ease: 'back.out(1.7)' }, 0)
      .to(menuButtonLineBottom, { rotation: -45, y: 0, duration: 0.7, ease: 'back.out(1.7)' }, 0)
      .to(menuButtonText, { y: '200%', duration: 0.6, ease: 'back.out(1.7)' }, 0)
      .to(menuLinks, { width: 'auto', duration: 0.6, ease: 'power2.out' }, 0)
      .to(menuLinkItems, { y: 0, duration: 0.6, stagger: { amount: 0.3 }, ease: 'back.out(1.7)' }, '<');

    let isOpen = false;
    const handleClick = () => {
      isOpen = !isOpen;
      if (isOpen) {
        openMenuTL.play();
      } else {
        openMenuTL.reverse();
      }
    };
    button.addEventListener('click', handleClick);
    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white z-50 shadow">
        <div className="font-bold text-xl">Exp Demo</div>
        <button className="menu-button flex items-center gap-2">
          <span className="menu-button_icon relative flex items-center justify-center w-8 h-8 border rounded-full">
            <span className="menu-button_line is-top absolute top-2 w-4 h-0.5 bg-black" />
            <span className="menu-button_line is-center absolute w-6 h-0.5 bg-black" />
            <span className="menu-button_line is-bottom absolute bottom-2 w-4 h-0.5 bg-black" />
          </span>
          <span className="menu-button_text">Menu</span>
        </button>
        <nav className="menu-links fixed top-16 right-4 bg-white shadow rounded overflow-hidden p-4 flex flex-col gap-2">
          <a href="#" className="menu-link opacity-0">Home</a>
          <a href="#" className="menu-link opacity-0">Shop</a>
          <a href="#" className="menu-link opacity-0">Contact</a>
        </nav>
      </header>
      <main className="pt-24 space-y-16 p-4">
        {images.map((src, i) => (
          <div key={i} className="relative overflow-hidden max-w-3xl mx-auto">
            <img src={src} alt="demo" className="w-full h-96 object-cover" />
            <div className="image-mask absolute inset-0 bg-gray-200" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Exp;
