interface SliderDotsProps {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
  className?: string
}

/** Pagination dots for the testimonial slider. */
export function SliderDots({ count, activeIndex, onSelect, className = '' }: SliderDotsProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex}
          onClick={() => onSelect(index)}
          className="cursor-pointer"
        >
          <span
            className={`m-[5px_7px] block h-[15px] w-[15px] rounded-[30px] transition-opacity duration-200 max-md:m-[5px] max-md:h-[10px] max-md:w-[10px] ${
              index === activeIndex ? 'bg-primary' : 'bg-[#D6D6D6] hover:bg-[#869791]'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
