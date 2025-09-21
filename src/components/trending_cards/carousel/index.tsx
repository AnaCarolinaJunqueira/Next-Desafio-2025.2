'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import TrendingCardsCarouselCard from './card';


type SlideType = {
  title: string;
  price: string;
  src: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    //Cards do carrossel
    <div className="relative max-w-xl mx-auto py-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] flex justify-center">
              <TrendingCardsCarouselCard title={slide.title} price={slide.price} src={slide.src} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Botões de navegação */}
      <button 
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-white hover:bg-gray-300 z-10 ${prevBtnDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-light-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-white hover:bg-gray-300 z-10 ${nextBtnDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-light-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default EmblaCarousel;