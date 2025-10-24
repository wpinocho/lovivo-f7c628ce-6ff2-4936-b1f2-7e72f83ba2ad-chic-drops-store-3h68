import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-0 shadow-none group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-[3/4] bg-muted/30 overflow-hidden relative mb-4">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-black text-white text-xs px-3 py-1 tracking-wider font-light">
                      -{logic.discountPercentage}% OFF
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-accent text-black text-xs px-3 py-1 tracking-wider font-light">
                      NEW
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-muted text-foreground text-xs px-3 py-1 tracking-wider font-light">
                      SOLD OUT
                    </span>
                  )}
                </div>
              </div>
            </Link>

            <div className="space-y-3">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity line-clamp-2">
                  {logic.product.title}
                </h3>
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs text-muted-foreground mb-1.5 tracking-wide">
                        {opt.name}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-6 w-6 border-2 transition-all ${
                                  isSelected ? 'border-black scale-110' : 'border-border'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border px-2.5 py-1 text-xs tracking-wide transition-all ${
                                isSelected 
                                  ? 'border-black bg-black text-white' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-border bg-white text-foreground opacity-40'
                                    : 'border-border bg-white text-foreground hover:border-black'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-col">
                  <span className="text-base font-light">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-muted-foreground text-xs line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="border-black text-black hover:bg-black hover:text-white disabled:opacity-30 transition-all"
                >
                  {logic.inStock ? 'Add to Cart' : 'Sold Out'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}