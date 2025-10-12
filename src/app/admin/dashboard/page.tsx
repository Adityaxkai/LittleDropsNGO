"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Mail, 
  ImageIcon, 
  Settings, 
  LogOut, 
  Plus,
  Trash2,
  Eye
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

// Mock data for emails
const mockEmails = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Volunteer Inquiry",
    message: "I would like to volunteer for your NGO. Please let me know how I can help.",
    date: "2024-01-15",
    status: "unread"
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    subject: "Donation Question",
    message: "I want to make a donation. What are the available options?",
    date: "2024-01-14",
    status: "read"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    subject: "Partnership Proposal",
    message: "Our company would like to partner with your NGO for community development.",
    date: "2024-01-13",
    status: "unread"
  }
];

// Mock gallery data
const mockGalleryData = [
  {
    id: 1,
    title: "Science Awareness Mela",
    category: "events",
    image: "/gallery-1.jpg",
    description: "Educational event for students",
    date: "2024-01-10"
  },
  {
    id: 2,
    title: "Medical Camp",
    category: "healthcare",
    image: "/gallery-2.jpg",
    description: "Free medical check-ups",
    date: "2024-01-08"
  }
];

export default function AdminDashboard() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [emails, setEmails] = useState(mockEmails);
  const [galleryItems, setGalleryItems] = useState(mockGalleryData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newImage, setNewImage] = useState({
    title: "",
    category: "events",
    image: "",
    description: ""
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // In a real app, you would verify the token with the server
    setUser({ name: "Admin User", email: "admin@littledrops.org" });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const handleAddImage = () => {
    if (newImage.title && newImage.image && newImage.description) {
      const newId = Math.max(...galleryItems.map(item => item.id)) + 1;
      const newItem = {
        id: newId,
        ...newImage,
        date: new Date().toISOString().split('T')[0]
      };
      setGalleryItems(prev => [...prev, newItem]);
      setNewImage({ title: "", category: "events", image: "", description: "" });
      setShowAddModal(false);
    }
  };

  const handleDeleteImage = (id: number) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setGalleryItems(prev => prev.filter(item => item.id !== id));
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

  const markEmailAsRead = (id: number) => {
    setEmails(prev => prev.map(email => 
      email.id === id ? { ...email, status: 'read' } : email
    ));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Emails</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{emails.length}</div>
              <p className="text-xs text-muted-foreground">
                {emails.filter(e => e.status === 'unread').length} unread
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
              <ImageIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{galleryItems.length}</div>
              <p className="text-xs text-muted-foreground">
                Total photos in gallery
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                Active volunteers
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emails Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Recent Emails
              </CardTitle>
              <CardDescription>
                Manage incoming emails and inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      email.status === 'unread' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
                    }`}
                    onClick={() => markEmailAsRead(email.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-sm">{email.name}</h4>
                          {email.status === 'unread' && (
                            <Badge variant="secondary" className="text-xs">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{email.subject}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{email.message}</p>
                      </div>
                      <div className="text-xs text-gray-400 ml-4">
                        {email.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gallery Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <ImageIcon className="h-5 w-5 mr-2" />
                    Gallery Management
                  </CardTitle>
                  <CardDescription>
                    Add and manage gallery photos
                  </CardDescription>
                </div>
                <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
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
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={newImage.category} onValueChange={(value) => setNewImage(prev => ({ ...prev, category: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="events">Events</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="environment">Environment</SelectItem>
                            <SelectItem value="food">Food</SelectItem>
                            <SelectItem value="community">Community</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="image">Image</Label>
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
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
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setShowAddModal(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddImage}>
                        Add Photo
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {galleryItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <div className="relative w-16 h-16">
                      <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.category}</p>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleDeleteImage(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
