import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Ruler } from 'lucide-react'

const sizeData = [
  { size: 'XS', bust: '32-33', waist: '24-25', hips: '35-36', uk: '6', us: '2', eu: '34' },
  { size: 'S', bust: '34-35', waist: '26-27', hips: '37-38', uk: '8', us: '4', eu: '36' },
  { size: 'M', bust: '36-37', waist: '28-29', hips: '39-40', uk: '10', us: '6', eu: '38' },
  { size: 'L', bust: '38-40', waist: '30-32', hips: '41-43', uk: '12', us: '8', eu: '40' },
  { size: 'XL', bust: '41-43', waist: '33-35', hips: '44-46', uk: '14', us: '10', eu: '42' }
]

export const SizeGuide = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit. All measurements are in inches.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Size Chart */}
          <div>
            <h3 className="text-lg font-light mb-4">Women's Clothing</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Size</th>
                    <th className="text-left py-3 px-4 font-medium">Bust</th>
                    <th className="text-left py-3 px-4 font-medium">Waist</th>
                    <th className="text-left py-3 px-4 font-medium">Hips</th>
                    <th className="text-left py-3 px-4 font-medium">UK</th>
                    <th className="text-left py-3 px-4 font-medium">US</th>
                    <th className="text-left py-3 px-4 font-medium">EU</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row) => (
                    <tr key={row.size} className="border-b hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{row.size}</td>
                      <td className="py-3 px-4">{row.bust}"</td>
                      <td className="py-3 px-4">{row.waist}"</td>
                      <td className="py-3 px-4">{row.hips}"</td>
                      <td className="py-3 px-4">{row.uk}</td>
                      <td className="py-3 px-4">{row.us}</td>
                      <td className="py-3 px-4">{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Measure */}
          <div className="bg-muted/30 p-6 rounded">
            <h3 className="text-lg font-light mb-4">How to Measure</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">Bust</h4>
                <p className="text-muted-foreground">
                  Measure around the fullest part of your bust, keeping the tape parallel to the floor.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Waist</h4>
                <p className="text-muted-foreground">
                  Measure around your natural waistline, keeping the tape comfortably loose.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Hips</h4>
                <p className="text-muted-foreground">
                  Measure around the fullest part of your hips, approximately 8" below your waist.
                </p>
              </div>
            </div>
          </div>

          {/* Fit Guide */}
          <div>
            <h3 className="text-lg font-light mb-4">Fit Guide</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-4">
                <span className="font-medium min-w-[100px]">Relaxed Fit:</span>
                <span className="text-muted-foreground">Loose and comfortable with extra room</span>
              </div>
              <div className="flex gap-4">
                <span className="font-medium min-w-[100px]">Regular Fit:</span>
                <span className="text-muted-foreground">True to size with comfortable ease</span>
              </div>
              <div className="flex gap-4">
                <span className="font-medium min-w-[100px]">Slim Fit:</span>
                <span className="text-muted-foreground">Close to body with minimal ease</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}