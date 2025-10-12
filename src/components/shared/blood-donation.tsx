"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Droplets, Heart, Users, Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function BloodDonation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stats = [
    {
      icon: <Droplets className="h-4 w-4" />,
      value: "500+",
      label: "Lives Saved",
    },
    {
      icon: <Users className="h-4 w-4" />,
      value: "200+",
      label: "Donors",
    },
    {
      icon: <Heart className="h-4 w-4" />,
      value: "15+",
      label: "Camps Organized",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Left Side - Content (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-3">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs">
                <Heart className="h-3 w-3 mr-1" />
                Blood Donation
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Give the Gift of Life
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Join our blood donation initiative and help save lives in Jharkhand. 
                Every drop counts in our mission to ensure blood availability for those in need.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="md:grid md:grid-cols-2 md:gap-3">
              {/* Mobile: Auto-sliding Cards */}
              <div className="md:hidden relative overflow-hidden rounded-xl bg-white shadow-md">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="flex items-start space-x-3 min-w-full p-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Save Lives</h4>
                      <p className="text-sm text-gray-600">Your donation can save up to 3 lives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 min-w-full p-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Regular Camps</h4>
                      <p className="text-sm text-gray-600">Monthly donation camps across Jharkhand</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 min-w-full p-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Easy Access</h4>
                      <p className="text-sm text-gray-600">Multiple locations for convenient donation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 min-w-full p-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Emergency blood requests handled</p>
                    </div>
                  </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center mt-3 space-x-2">
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-red-600 w-4' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Desktop: Grid Layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Save Lives</h4>
                    <p className="text-sm text-gray-600">Your donation can save up to 3 lives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Regular Camps</h4>
                    <p className="text-sm text-gray-600">Monthly donation camps across Jharkhand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Easy Access</h4>
                    <p className="text-sm text-gray-600">Multiple locations for convenient donation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Emergency blood requests handled</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="md:grid md:grid-cols-3 md:gap-4 pt-3">
              {/* Mobile: Auto-sliding Stats */}
              <div className="md:hidden relative overflow-hidden rounded-xl bg-white shadow-md">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center min-w-full p-4">
                      <div className="flex justify-center mb-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-xl font-bold text-red-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Stats Slide Indicators */}
                <div className="flex justify-center mt-2 space-x-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-red-600 w-3' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Desktop: Grid Layout */}
              <div className="hidden md:grid md:grid-cols-3 md:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-red-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-6 py-2.5">
                <Link href="/contact">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Blood
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-6 py-2.5">
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Camp
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image (2 columns) */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-gray-100 relative">
              <Image
                src="/blood-donat.jpg"
                alt="Blood donation in progress"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/25 via-red-900/10 to-transparent"></div>
            </div>
            
            {/* Floating Info Card */}
            <Card className="absolute -bottom-3 -left-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm max-w-[160px]">
              <CardContent className="p-3">
                <div className="text-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplets className="h-5 w-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Blood Donation</h4>
                  <p className="text-xs text-gray-600 mb-2">Safe & Professional</p>
                  <div className="flex flex-col space-y-0.5 text-xs text-gray-500">
                    <span>✓ Sterile Equipment</span>
                    <span>✓ Expert Staff</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
