import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Search, Menu } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-6 border-b border-border bg-white ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-sm tracking-wide hover:opacity-70 transition-opacity"
            >
              NEW ARRIVALS
            </Link>
            <Link 
              to="/" 
              className="text-sm tracking-wide hover:opacity-70 transition-opacity"
            >
              CLOTHING
            </Link>
            <Link 
              to="/" 
              className="text-sm tracking-wide hover:opacity-70 transition-opacity"
            >
              ACCESSORIES
            </Link>
            <Link 
              to="/about" 
              className="text-sm tracking-wide hover:opacity-70 transition-opacity"
            >
              ABOUT US
            </Link>
            <Link 
              to="/blog" 
              className="text-sm tracking-wide hover:opacity-70 transition-opacity"
            >
              EDITORIAL
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-light rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-light tracking-tight">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-black text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <BrandLogoLeft />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Curating timeless pieces for the modern woman. 
              Discover editorial-inspired fashion that transcends trends.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm tracking-wider mb-4 font-light">SHOP</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white/70 hover:text-white text-sm transition-colors">
                New Arrivals
              </Link>
              <Link to="/" className="block text-white/70 hover:text-white text-sm transition-colors">
                Clothing
              </Link>
              <Link to="/" className="block text-white/70 hover:text-white text-sm transition-colors">
                Accessories
              </Link>
              <Link to="/blog" className="block text-white/70 hover:text-white text-sm transition-colors">
                Editorial
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm tracking-wider mb-4 font-light">CUSTOMER CARE</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-white/70 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <a href="#" className="block text-white/70 hover:text-white text-sm transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-white/70 hover:text-white text-sm transition-colors">
                Shipping & Returns
              </a>
              <a href="#" className="block text-white/70 hover:text-white text-sm transition-colors">
                Size Guide
              </a>
              <a href="#" className="block text-white/70 hover:text-white text-sm transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2024 OnlineStore. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}