import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Trend {
  id: string
  title: string
  description: string
  image: string
  tag: string
}

const trends: Trend[] = [
  {
    id: '1',
    title: 'Power Suiting',
    description: 'Tailored blazers and structured silhouettes',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop',
    tag: 'Trending'
  },
  {
    id: '2',
    title: 'Minimalist Luxe',
    description: 'Clean lines and premium fabrics',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    tag: 'Editor\'s Pick'
  },
  {
    id: '3',
    title: 'Monochrome Magic',
    description: 'Head-to-toe tonal dressing',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop',
    tag: 'New'
  },
  {
    id: '4',
    title: 'Soft Tailoring',
    description: 'Relaxed fits with refined details',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
    tag: 'Trending'
  }
]

export const TrendCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % trends.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + trends.length) % trends.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="editorial-subheading mb-2">Trending Now</h2>
            <p className="text-muted-foreground">Curated styles defining the season</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {trends.map((trend) => (
              <div key={trend.id} className="min-w-full px-2">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <img 
                      src={trend.image}
                      alt={trend.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white text-xs px-3 py-1 tracking-wider">
                        {trend.tag}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6 px-4 md:px-8">
                    <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                      {trend.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {trend.description}
                    </p>
                    <Button variant="outline" size="lg" className="mt-4">
                      Explore Trend
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {trends.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-black' : 'w-1 bg-black/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}