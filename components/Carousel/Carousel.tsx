"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: carouselImageType[];
  options?: EmblaOptionsType;
};
type carouselImageType = {
  src: string;
  text: string;
  desc: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container top-5">
          {slides.map((image, index) => (
            <div
              className="embla__slide h-[80vh] flex justify-center content-end bottom-0"
              key={index}
            >
              <div className="w-full h-[80vh] relative">
                <Image
                  src={image.src}
                  alt={image.text}
                  layout="fill"
                  objectFit="cover"
                  className="h-[80vh]"
                />
                <div className="absolute w-full h-[80vh] z-10 tranparent-black-bg pl-16 pr-16 bottom-0 flex flex-col justify-end pb-20">
                  <p className="text-white text-3xl font-bold pb-3">
                    {image.text}
                  </p>
                  <p className="text-white">{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-full h-full z-10 flex justify-between items-center top-0">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="flex justify-center items-center top-2">
        <div className="flex justify-center items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
