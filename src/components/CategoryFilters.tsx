import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface FilterOption {
  id: string
  label: string
  count: number
}

const categories: FilterOption[] = [
  { id: 'all', label: 'All', count: 48 },
  { id: 'new', label: 'New Arrivals', count: 12 },
  { id: 'dresses', label: 'Dresses', count: 15 },
  { id: 'tops', label: 'Tops & Blouses', count: 18 },
  { id: 'bottoms', label: 'Bottoms', count: 14 },
  { id: 'outerwear', label: 'Outerwear', count: 9 }
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'Newest' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' }
]

interface CategoryFiltersProps {
  onCategoryChange?: (category: string) => void
  onSortChange?: (sort: string) => void
}

export const CategoryFilters = ({ onCategoryChange, onSortChange }: CategoryFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSort, setActiveSort] = useState('featured')
  const [showSort, setShowSort] = useState(false)

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  const handleSortClick = (sortId: string) => {
    setActiveSort(sortId)
    setShowSort(false)
    onSortChange?.(sortId)
  }

  return (
    <div className="border-y border-border bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleCategoryClick(category.id)}
                className="whitespace-nowrap"
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSort(!showSort)}
              className="gap-2"
            >
              Sort: {sortOptions.find(s => s.id === activeSort)?.label}
              <ChevronDown className={`h-4 w-4 transition-transform ${showSort ? 'rotate-180' : ''}`} />
            </Button>

            {showSort && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-border shadow-lg rounded-md overflow-hidden z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSortClick(option.id)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-muted/30 transition-colors ${
                      activeSort === option.id ? 'bg-muted/50 font-medium' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}