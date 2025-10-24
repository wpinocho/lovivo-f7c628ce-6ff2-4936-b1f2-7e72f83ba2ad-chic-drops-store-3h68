import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { UseAboutLogicReturn } from '@/components/headless/HeadlessAbout'

interface AboutUIProps {
  logic: UseAboutLogicReturn
}

export const AboutUI = ({ logic }: AboutUIProps) => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop"
            alt="Fashion atelier"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80">
              Crafting timeless elegance since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe fashion is more than clothing—it's a form of self-expression, 
              an art form that empowers women to embrace their unique style and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-light mb-4">Quality First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece in our collection is carefully curated and crafted with 
                attention to detail, using premium materials that stand the test of time.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-4">Sustainable Fashion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to ethical production practices and sustainable materials, 
                ensuring our fashion choices contribute to a better future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-4">Timeless Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our designs transcend fleeting trends, offering versatile pieces that 
                remain relevant season after season.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-4">Empowering Women</h3>
              <p className="text-muted-foreground leading-relaxed">
                We celebrate individuality and empower women to express themselves 
                through fashion that makes them feel confident and beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop"
                alt="Fashion design studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=400&h=300&fit=crop"
                alt="Fabric selection"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop"
                alt="Fashion sketches"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Passionate individuals dedicated to bringing you exceptional fashion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                  alt="Creative Director"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-2">Sarah Mitchell</h3>
              <p className="text-muted-foreground mb-2">Creative Director</p>
              <p className="text-sm text-muted-foreground">
                15 years of experience in haute couture
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                  alt="Head Designer"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-2">Emma Thompson</h3>
              <p className="text-muted-foreground mb-2">Head Designer</p>
              <p className="text-sm text-muted-foreground">
                Award-winning fashion designer
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop"
                  alt="Sustainability Director"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-2">Olivia Chen</h3>
              <p className="text-muted-foreground mb-2">Sustainability Director</p>
              <p className="text-sm text-muted-foreground">
                Expert in ethical fashion practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-light mb-2">Excellence</h3>
              <p className="text-white/70 text-sm">
                Uncompromising quality in every detail
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-light mb-2">Sustainability</h3>
              <p className="text-white/70 text-sm">
                Responsible fashion for our planet
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-lg font-light mb-2">Authenticity</h3>
              <p className="text-white/70 text-sm">
                True to our vision and values
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-light mb-2">Community</h3>
              <p className="text-white/70 text-sm">
                Building connections through fashion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover our latest collection and become part of our story
          </p>
          <Link to="/">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </EcommerceTemplate>
  )
}