import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface LookbookItem {
  id: string
  image: string
  title: string
  products: Array<{
    name: string
    price: number
    x: number
    y: number
  }>
}

const lookbookItems: LookbookItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop',
    title: 'The Power Edit',
    products: [
      { name: 'Tailored Blazer', price: 189, x: 45, y: 35 },
      { name: 'Wide Leg Trousers', price: 145, x: 50, y: 65 }
    ]
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
    title: 'Evening Elegance',
    products: [
      { name: 'Silk Slip Dress', price: 165, x: 50, y: 50 }
    ]
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop',
    title: 'Casual Luxe',
    products: [
      { name: 'Oversized Shirt', price: 98, x: 48, y: 40 },
      { name: 'Leather Skirt', price: 225, x: 52, y: 70 }
    ]
  }
]

export const ShoppableLookbook = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="editorial-subheading mb-4">Shoppable Lookbook</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click the hotspots to discover the pieces that complete each look
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {lookbookItems.map((item) => (
            <div 
              key={item.id}
              className="relative group overflow-hidden"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Product Hotspots */}
                {item.products.map((product, index) => (
                  <button
                    key={index}
                    className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    style={{ 
                      left: `${product.x}%`, 
                      top: `${product.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    aria-label={`View ${product.name}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                ))}

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  activeItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                    <div className="space-y-2 mb-6">
                      {item.products.map((product, index) => (
                        <div key={index} className="text-sm">
                          <span className="font-light">{product.name}</span>
                          <span className="mx-2">·</span>
                          <span>${product.price}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="bg-white text-black hover:bg-white/90">
                      Shop This Look
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-light">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.products.length} {item.products.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}