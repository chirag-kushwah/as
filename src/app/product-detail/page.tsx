"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, ZoomIn, Check , Calendar } from "lucide-react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // default styles
import DeliveryDateSelector from "@/components/Calendar"



interface ProductImage {
  id: string
  src: string
  alt: string
}

interface Product {
  id: string
  title: string
  price: number
  comparePrice?: number
  rating: number
  reviewCount: number
  images: ProductImage[]
  description: string
  features: string[]
  careInstructions: string[]
  deliveryInfo: string
}

interface RelatedProduct {
  id: string
  title: string
  price: number
  image: string
}

const sampleProduct: Product = {
  id: "1",
  title: "Premium Wireless Headphones",
  price: 299.99,
  comparePrice: 399.99,
  rating: 4.8,
  reviewCount: 1247,
  images: [
    { id: "1", src: "./sideView.jpg", alt: "Headphones main view" },
    { id: "2", src: "./sideView1.jpg", alt: "Headphones side view" },
    { id: "3", src: "./sideView2.jpg", alt: "Headphones back view" },
    { id: "4", src: "./sideView3.jpg", alt: "Headphones with case" },
    { id: "5", src: "./sideView4.jpg", alt: "Headphones with case" },
  ],
  description:
    "Experience premium sound quality with our latest wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Premium comfort padding",
    "Bluetooth 5.0 connectivity",
    "Quick charge technology",
  ],
  careInstructions: [
    "Clean with a soft, dry cloth",
    "Avoid exposure to moisture",
    "Store in provided case when not in use",
    "Charge regularly to maintain battery health",
  ],
  deliveryInfo:
    "Free standard delivery on orders over $50. Express delivery available for $9.99. Same-day delivery available in select areas.",
}

const relatedProducts: RelatedProduct[] = [
  { id: "2", title: "Wireless Earbuds Pro", price: 199.99, image: "./sideView.jpg" },
  { id: "3", title: "Gaming Headset Elite", price: 249.99, image: "./sideView.jpg" },
  { id: "4", title: "Studio Monitor Headphones", price: 349.99, image: "./sideView.jpg" },
  { id: "5", title: "Bluetooth Speaker Max", price: 179.99, image: "./sideView.jpg" },
]

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(sampleProduct.images[0])
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${sampleProduct.title} added to your cart.`,
    })
  }

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${sampleProduct.title} added to your wishlist.`,
    })
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto  py-8">
          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image with Dialog for zoom */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="aspect-square overflow-hidden rounded-lg border bg-card cursor-pointer group relative">
                    <img
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <Carousel className="w-full">
                <CarouselContent>
                  {sampleProduct.images.map((image) => (
                    <CarouselItem key={image.id} className="basis-1/4">
                      <button
                        onClick={() => setSelectedImage(image)}
                        className={`w-full aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                          selectedImage.id === image.id ? "border-primary" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                 <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100" />
  <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100" />
              </Carousel>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Product Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{sampleProduct.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(sampleProduct.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {sampleProduct.rating} ({sampleProduct.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">₹{sampleProduct.price}</span>
                {sampleProduct.comparePrice && (
                  <span className="text-xl text-muted-foreground line-through">₹{sampleProduct.comparePrice}</span>
                )}
                {sampleProduct.comparePrice && (
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Save ₹{(sampleProduct.comparePrice - sampleProduct.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              {/* Gift Receiver Location */}

              {/* Delivery Date & Time */}
              <div className="space-y-6">
      {/* Gift Receiver Location */}
      <div>
        <label className="block text-sm font-semibold mb-1">Gift Receiver's Location</label>
        <div className="flex items-center border rounded-lg overflow-hidden w-full">
          {/* Country Selector */}
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-100">
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-medium">IND</span>
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Address Input */}
          <input
            type="text"
            placeholder="474001, Gwalior, Madhya Pradesh"
            className="flex-1 px-3 py-2 focus:outline-none"
          />

          {/* Clear Button */}
          <button className="px-3 py-2 text-gray-400 hover:text-gray-600">×</button>
        </div>
      </div>

      {/* Delivery Date & Time Slot */}
    
<DeliveryDateSelector/>

  
                
              </div>

              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-accent-foreground mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Special Offers
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Truck className="w-8 h-8 text-green-600" />
                      Free shipping on orders over ₹50
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-8 h-8 text-blue-600" />
                      30-day money-back guarantee
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <RotateCcw className="w-8 h-8 text-purple-600" />
                      Extended warranty available
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Label htmlFor="quantity">Quantity:</Label>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
                      -
                    </Button>
                    <span className="px-3 py-1 min-w-[3rem] text-center">{quantity}</span>
                    <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)} className="h-8 w-8 p-0">
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add {quantity} item(s) to your cart</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="lg" onClick={handleAddToWishlist}>
                        <Heart className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to wishlist</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <Button variant="secondary" className="w-full bg-[var(--greenBackground)] text-white hover:bg-green-900" size="lg">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Product Information</h2>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="care">Care Instructions</TabsTrigger>
                <TabsTrigger value="delivery">Delivery Info</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className=" leading-relaxed mb-6">{sampleProduct.description}</p>
                    <Separator className="my-4" />
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {sampleProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="care" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Care Instructions</h4>
                    <ul className="space-y-3">
                      {sampleProduct.careInstructions.map((instruction, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="delivery" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Delivery Information</h4>
                    <p className="leading-relaxed">{sampleProduct.deliveryInfo}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square overflow-hidden rounded-md mb-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
            
                    <h3 className="font-semibold text-sm mb-2 text-balance">{product.title}</h3>
                    <div className="flex gap-1">
<p className="text-primary font-bold">₹{product.price}</p>
                    <span className=" text-muted-foreground line-through">₹ 499.00</span>
                    </div>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )};
