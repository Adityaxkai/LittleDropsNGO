"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["littledrops1109@gmail.com"],
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9431146633"],
    description: "Monday - Friday, 9 AM - 6 PM IST",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["2nd Floor, Neemtand Colony Chuttu", "Neori Vikas, Dist. Ranchi", "Jharkhand 835217"],
    description: "Visit us during business hours",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM", "Sunday: Closed"],
    description: "We&apos;re here to help when you need us",
  },
];

const departments = [
  { value: "general", label: "General Inquiry" },
  { value: "donations", label: "Donations & Giving" },
  { value: "volunteer", label: "Volunteer Opportunities" },
  { value: "partnership", label: "Partnerships" },
  { value: "media", label: "Media & Press" },
  { value: "support", label: "Technical Support" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          department: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-orange-100">
            Get in touch with us. We&apos;d love to hear from you and answer any questions you may have about our work.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    required
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-600 hover:bg-orange-700" 
                  disabled={isSubmitting}
                  suppressHydrationWarning
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Need Immediate Help?
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    For urgent matters, please call us directly or send us an email. 
                    We&apos;re here to help when you need us most.
                  </p>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:+919431146633">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:littledrops1109@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come visit us at our headquarters in Ranchi. We&apos;d love to meet you in person and show you around.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-gray-500 text-sm">Embed Google Maps here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Office Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      2nd Floor, Neemtand Colony Chuttu<br />
                      Neori Vikas, Dist. Ranchi<br />
                      Jharkhand 835217
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
                    <p className="text-gray-600 text-sm">
                      We&apos;re located in Neori Vikas area of Ranchi, easily accessible by public transportation 
                      and with plenty of parking available.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                    <p className="text-gray-600 text-sm">
                      Free parking is available in our building. Additional street parking is also available.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Public Transportation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Bus</h4>
                    <p className="text-gray-600 text-sm">Multiple bus routes serve the Neori Vikas area</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Auto Rickshaw</h4>
                    <p className="text-gray-600 text-sm">Readily available from Ranchi city center</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Taxi</h4>
                    <p className="text-gray-600 text-sm">Ola and Uber services available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about contacting us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How quickly do you respond?</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to emails within 24 hours and phone calls during business hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I schedule a meeting?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Please contact us to schedule an appointment. We&apos;re happy to meet in person or virtually.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer tours?</h3>
                <p className="text-gray-600 text-sm">
                  We offer guided tours of our facility by appointment. Contact us to arrange a visit.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if I need urgent help?</h3>
                <p className="text-gray-600 text-sm">
                  For urgent matters, please call us directly. We have staff available during business hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I volunteer at your office?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We welcome office volunteers. Please contact our volunteer coordinator to learn more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you have field offices?</h3>
                <p className="text-gray-600 text-sm">
                  We have field offices in several districts of Jharkhand. Contact us for specific location information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
