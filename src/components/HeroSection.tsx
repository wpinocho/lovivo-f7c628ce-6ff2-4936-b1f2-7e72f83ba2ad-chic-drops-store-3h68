import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
          alt="New Drops Collection"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
        <div className="fade-in">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
            Spring/Summer 2024
          </p>
          <h1 className="editorial-heading mb-6 max-w-4xl">
            New Drops
          </h1>
          <p className="editorial-body text-white/90 mb-8 max-w-xl">
            Discover the latest arrivals. Curated pieces that define modern elegance 
            and timeless sophistication.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-base px-8 py-6 group"
          >
            Shop New Arrivals
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}