"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Camera, 
  Users, 
  Heart, 
  BookOpen, 
  Droplets, 
  Globe, 
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Download,
  Share2,
  Plus,
  Trash2,
  Settings,
  Upload
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

const galleryData = [
  {
    id: 1,
    title: "Science Awareness Mela - Group Photo",
    category: "events",
    image: "/WhatsApp Image 2025-08-17 at 15.13.44_da6cad57.jpg",
    description: "Group photo with students and organizers at the Science Awareness Mela",
    icon: <Users className="h-4 w-4" />,
    featured: false
  },
  {
    id: 2,
    title: "Science Awareness Mela - Ceremonial Lighting",
    category: "events",
    image: "/WhatsApp Image 2025-08-17 at 15.14.43_5c2ff7c1.jpg",
    description: "Traditional lamp lighting ceremony with dignitaries",
    icon: <Globe className="h-4 w-4" />,
    featured: false
  },
  {
    id: 3,
    title: "Science Awareness Mela - Award Presentation",
    category: "events",
    image: "/WhatsApp Image 2025-08-17 at 15.14.43_daf7eb35.jpg",
    description: "Certificate presentation ceremony at the Science Awareness Mela",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  },
  {
    id: 4,
    title: "Healthcare Outreach",
    category: "healthcare",
    image: "/program-healthcare.jpg",
    description: "Medical camps and health awareness programs",
    icon: <Heart className="h-4 w-4" />,
    featured: false
  },
  {
    id: 5,
    title: "Water Conservation",
    category: "environment",
    image: "/program-water.jpg",
    description: "Clean water access and conservation projects",
    icon: <Droplets className="h-4 w-4" />,
    featured: false
  },
  {
    id: 6,
    title: "School Children Activities",
    category: "education",
    image: "/school-children.jpg",
    description: "Engaging educational activities for school children",
    icon: <Users className="h-4 w-4" />,
    featured: false
  },
  {
    id: 7,
    title: "Community Engagement",
    category: "community",
    image: "/children-community.jpg",
    description: "Building strong community bonds through activities",
    icon: <Users className="h-4 w-4" />,
    featured: false
  },
  {
    id: 8,
    title: "Environmental Awareness",
    category: "environment",
    image: "/children-smiling.jpg",
    description: "Teaching children about environmental conservation",
    icon: <Globe className="h-4 w-4" />,
    featured: false
  },
  {
    id: 9,
    title: "Medical Camp",
    category: "healthcare",
    image: "/gallery-1.jpg",
    description: "Free medical check-ups and health services",
    icon: <Heart className="h-4 w-4" />,
    featured: false
  },
  {
    id: 10,
    title: "School Supply Distribution",
    category: "education",
    image: "/gallery-2.jpg",
    description: "Providing essential school supplies to students",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  },
  {
    id: 11,
    title: "Plantation Drive",
    category: "environment",
    image: "/gallery-3.jpg",
    description: "Community plantation and environmental initiatives",
    icon: <Globe className="h-4 w-4" />,
    featured: false
  },

  {
    id: 12,
    title: "Art & Creativity Workshop",
    category: "education",
    image: "/gallery-6.jpg",
    description: "Fostering creativity and artistic expression in children",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  },
  {
    id: 13,
    title: "Environmental Conservation",
    category: "environment",
    image: "/gallery-7.jpg",
    description: "Teaching sustainable practices and conservation",
    icon: <Globe className="h-4 w-4" />,
    featured: false
  },
  {
    id: 14,
    title: "Community Meeting",
    category: "community",
    image: "/gallery-8.jpg",
    description: "Building strong community relationships and dialogue",
    icon: <Users className="h-4 w-4" />,
    featured: false
  },
  {
    id: 15,
    title: "Skill Development Program",
    category: "education",
    image: "/gallery-9.jpg",
    description: "Empowering youth with essential life skills",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  },
  {
    id: 16,
    title: "Distribution Program",
    category: "food",
    image: "/gallery-10.jpg",
    description: "Reaching remote communities with essential supplies",
    icon: <Heart className="h-4 w-4" />,
    featured: false
  },
  {
    id: 17,
    title: "Children's Joy & Learning",
    category: "education",
    image: "/gallery-11.jpg",
    description: "Creating moments of happiness and learning",
    icon: <Users className="h-4 w-4" />,
    featured: false
  },
  {
    id: 18,
    title: "Educational Support",
    category: "education",
    image: "/gallery-12.jpg",
    description: "Providing comprehensive educational resources",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  },
  {
    id: 19,
    title: "School Meal Distribution",
    category: "food",
    image: "/gallery-13.jpg",
    description: "Organized meal distribution program for school children",
    icon: <Heart className="h-4 w-4" />,
    featured: false
  },
  {
    id: 20,
    title: "Children with Supplies",
    category: "education",
    image: "/gallery-14.jpg",
    description: "Children receiving essential school supplies and materials",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  },
  {
    id: 21,
    title: "Community Distribution",
    category: "community",
    image: "/gallery-15.jpg",
    description: "Community-wide distribution of essential items and supplies",
    icon: <Users className="h-4 w-4" />,
    featured: false
  },
  {
    id: 22,
    title: "Children's Learning Activities",
    category: "education",
    image: "/gallery-16.jpg",
    description: "Interactive learning activities and educational workshops",
    icon: <BookOpen className="h-4 w-4" />,
    featured: false
  }
];

const categories = [
  { id: "all", name: "All", icon: <Camera className="h-4 w-4" /> },
  { id: "events", name: "Events", icon: <Globe className="h-4 w-4" /> },
  { id: "education", name: "Education", icon: <BookOpen className="h-4 w-4" /> },
  { id: "healthcare", name: "Healthcare", icon: <Heart className="h-4 w-4" /> },
  { id: "environment", name: "Environment", icon: <Globe className="h-4 w-4" /> },
  { id: "food", name: "Food", icon: <Heart className="h-4 w-4" /> },
  { id: "community", name: "Community", icon: <Users className="h-4 w-4" /> }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // Helper function to get icon for category
  const getIconForCategory = (category: string) => {
    const iconMap = {
      events: <Globe className="h-4 w-4" />,
      education: <BookOpen className="h-4 w-4" />,
      healthcare: <Heart className="h-4 w-4" />,
      environment: <Globe className="h-4 w-4" />,
      food: <Heart className="h-4 w-4" />,
      community: <Users className="h-4 w-4" />
    };
    return iconMap[category as keyof typeof iconMap] || <Globe className="h-4 w-4" />;
  };

  const [galleryItems, setGalleryItems] = useState(galleryData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load gallery data from localStorage on component mount (client-side only)
  useEffect(() => {
    const savedGallery = localStorage.getItem('littleDropsGallery');
    if (savedGallery) {
      try {
        const parsedGallery = JSON.parse(savedGallery);
        // Restore icons for loaded data
        const restoredGallery = parsedGallery.map((item: { id: number; title: string; category: string; image: string; description: string; featured: boolean }) => ({
          ...item,
          icon: getIconForCategory(item.category)
        }));
        setGalleryItems(restoredGallery);
      } catch (error) {
        console.error('Error loading gallery from localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save gallery data to localStorage whenever it changes
  useEffect(() => {
    // Create a serializable version of gallery items (without React elements)
    const serializableGallery = galleryItems.map(item => ({
      ...item,
      icon: null // Remove React element before serialization
    }));
    localStorage.setItem('littleDropsGallery', JSON.stringify(serializableGallery));
  }, [galleryItems]);
  const [newImage, setNewImage] = useState({
    title: "",
    category: "events",
    image: "",
    description: "",
    featured: false
  });

  const filteredImages = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image: typeof galleryData[0], index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Admin Functions
  const deleteImage = (id: number) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setGalleryItems(prev => prev.filter(item => item.id !== id));
      // Close lightbox if the deleted image was being viewed
      if (selectedImage && selectedImage.id === id) {
        setSelectedImage(null);
      }
    }
  };

  const addImage = () => {
    if (newImage.title && newImage.image && newImage.description) {
      const newId = Math.max(...galleryItems.map(item => item.id)) + 1;

      const newItem = {
        id: newId,
        title: newImage.title,
        category: newImage.category,
        image: newImage.image,
        description: newImage.description,
        icon: getIconForCategory(newImage.category),
        featured: newImage.featured
      };

      setGalleryItems(prev => [...prev, newItem]);
      setNewImage({
        title: "",
        category: "events",
        image: "",
        description: "",
        featured: false
      });
      setShowAddModal(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImage(prev => ({
          ...prev,
          image: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetGallery = () => {
    if (confirm("Are you sure you want to reset the gallery to its original state? This will remove all added photos and restore deleted ones.")) {
      setGalleryItems(galleryData);
      localStorage.removeItem('littleDropsGallery');
    }
  };

  const handleAdminClick = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
    } else {
      setShowPasswordDialog(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === "0000") {
      setIsAdminMode(true);
      setShowPasswordDialog(false);
      setPassword("");
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordDialog(false);
    setPassword("");
    setPasswordError("");
  };

  // Show loading state until client-side data is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-2 text-xs">
            <Camera className="h-3 w-3 mr-1" />
            Our Impact Gallery
          </Badge>
          <h1 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight">
            Capturing Moments of
            <span className="block text-yellow-300">Hope & Change</span>
          </h1>
          <p className="text-xs md:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Explore our visual journey of making a difference in communities across Jharkhand. 
            Every image tells a story of transformation, hope, and positive impact.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className={`py-6 border-b ${isAdminMode ? 'bg-yellow-50 border-yellow-200' : 'bg-white'}`}>
        {isAdminMode && (
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-4">
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 flex items-center gap-2">
              <Settings className="h-4 w-4 text-yellow-700" />
              <span className="text-sm font-medium text-yellow-800">Admin Mode Active - You can now add and delete photos</span>
            </div>
          </div>
        )}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                suppressHydrationWarning
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-3 py-1.5 text-xs transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:bg-blue-50 hover:border-blue-300"
                  }`}
                  suppressHydrationWarning
                >
                  {category.icon}
                  <span className="ml-1">{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Admin Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={isAdminMode ? "default" : "outline"}
                size="sm"
                onClick={handleAdminClick}
                className="flex items-center gap-1"
                suppressHydrationWarning
              >
                <Settings className="h-4 w-4" />
                {isAdminMode ? "Admin Mode" : "Admin"}
              </Button>
              
              {isAdminMode && (
                <>
                  <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" suppressHydrationWarning>
                        <Plus className="h-4 w-4 mr-1" />
                        Add Photo
                      </Button>
                    </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Add New Photo to Gallery</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={newImage.title}
                          onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter photo title"
                          suppressHydrationWarning
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={newImage.category} onValueChange={(value) => setNewImage(prev => ({ ...prev, category: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.filter(cat => cat.id !== "all").map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="image">Image</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="flex-1"
                            suppressHydrationWarning
                          />
                          <Button variant="outline" size="sm" onClick={() => document.getElementById('image')?.click()}>
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                        {newImage.image && (
                          <div className="mt-2 relative w-32 h-24">
                            <Image src={newImage.image} alt="Preview" fill className="object-cover rounded" />
                          </div>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newImage.description}
                          onChange={(e) => setNewImage(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Enter photo description"
                          rows={3}
                          suppressHydrationWarning
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="featured"
                          checked={newImage.featured}
                          onChange={(e) => setNewImage(prev => ({ ...prev, featured: e.target.checked }))}
                          className="rounded"
                          suppressHydrationWarning
                        />
                        <Label htmlFor="featured">Featured Image</Label>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setShowAddModal(false)}>
                        Cancel
                      </Button>
                      <Button onClick={addImage} className="bg-green-600 hover:bg-green-700">
                        Add Photo
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={resetGallery}
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                  suppressHydrationWarning
                >
                  Reset Gallery
                </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Admin Access Required
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="admin-password">Enter Admin Password</Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="font-mono text-center text-lg tracking-wider"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handlePasswordSubmit();
                  }
                }}
                suppressHydrationWarning
              />
              {passwordError && (
                <p className="text-sm text-red-600 mt-1">{passwordError}</p>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={handlePasswordCancel}>
              Cancel
            </Button>
            <Button onClick={handlePasswordSubmit} className="bg-blue-600 hover:bg-blue-700">
              Access Admin
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gallery Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">
              Showing {filteredImages.length} of {galleryItems.length} images
            </p>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">Filtered by: {categories.find(cat => cat.id === selectedCategory)?.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredImages.map((item, index) => (
              <Card 
                key={item.id} 
                className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  item.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(item, index)}
              >
                <div className={`relative overflow-hidden ${
                  item.featured ? 'h-64' : 'h-48'
                }`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center mb-1.5">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2">
                        {item.icon}
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                    <h3 className="text-xs font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-200 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {!isAdminMode ? (
                      <>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-6 h-6 bg-white/20 hover:bg-white/30 text-white p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add download functionality
                          }}
                          suppressHydrationWarning
                        >
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-6 h-6 bg-white/20 hover:bg-white/30 text-white p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add share functionality
                          }}
                          suppressHydrationWarning
                        >
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-6 h-6 bg-red-500/80 hover:bg-red-600 text-white p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteImage(item.id);
                        }}
                        suppressHydrationWarning
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-gray-600 mb-1">No images found</h3>
              <p className="text-xs text-gray-500">Try adjusting your search or selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">{galleryItems.length}+</div>
              <div className="text-xs text-gray-600">Impact Stories</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">6</div>
              <div className="text-xs text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-purple-600 mb-1">1000+</div>
              <div className="text-xs text-gray-600">Lives Touched</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-red-600 mb-1">50+</div>
              <div className="text-xs text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={closeLightbox}
              suppressHydrationWarning
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={prevImage}
              suppressHydrationWarning
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={nextImage}
              suppressHydrationWarning
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Image */}
            <div className="relative w-full h-auto max-h-[75vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      {selectedImage.icon}
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">
                      {categories.find(cat => cat.id === selectedImage.category)?.name}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white" suppressHydrationWarning>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white" suppressHydrationWarning>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
              {currentImageIndex + 1} of {filteredImages.length}
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
              Use ← → keys to navigate, ESC to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
