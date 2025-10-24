import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { TrendCarousel } from '@/components/TrendCarousel'
import { ShoppableLookbook } from '@/components/ShoppableLookbook'
import { CategoryFilters } from '@/components/CategoryFilters'
import { SizeGuide } from '@/components/SizeGuide'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    loading,
    filteredProducts,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Trend Carousel */}
      <TrendCarousel />

      {/* Shoppable Lookbook */}
      <ShoppableLookbook />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="editorial-subheading mb-2">Shop the Edit</h2>
              <p className="text-muted-foreground">Curated pieces for the modern wardrobe</p>
            </div>
            <div className="flex items-center gap-4">
              <SizeGuide />
            </div>
          </div>

          {/* Category Filters */}
          <CategoryFilters />

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted/30 rounded-none h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products available at the moment
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Join Our Community
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Be the first to know about new arrivals, exclusive offers, and style inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  )
}