"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Heart, Users, Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function BloodDonation() {
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

    return (
    <section className="py-8 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Side - Content (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-sm">
                <Heart className="h-3 w-3 mr-2" />
                Blood Donation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Give the Gift of Life
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Join our blood donation initiative and help save lives in Jharkhand. 
                Every drop counts in our mission to ensure blood availability for those in need.
              </p>
            </div>

                         {/* Key Benefits */}
             <div className="md:grid md:grid-cols-2 md:gap-4">
               {/* Mobile: Horizontal Scrollable Cards */}
               <div className="flex md:hidden gap-4 overflow-x-auto pb-4 scrollbar-hide">
                 <div className="flex items-start space-x-3 min-w-[280px] bg-white rounded-xl p-4 shadow-md">
                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Heart className="h-4 w-4 text-red-600" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm mb-1">Save Lives</h4>
                     <p className="text-sm text-gray-600">Your donation can save up to 3 lives</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-3 min-w-[280px] bg-white rounded-xl p-4 shadow-md">
                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Calendar className="h-4 w-4 text-red-600" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm mb-1">Regular Camps</h4>
                     <p className="text-sm text-gray-600">Monthly donation camps across Jharkhand</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-3 min-w-[280px] bg-white rounded-xl p-4 shadow-md">
                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <MapPin className="h-4 w-4 text-red-600" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm mb-1">Easy Access</h4>
                     <p className="text-sm text-gray-600">Multiple locations for convenient donation</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-3 min-w-[280px] bg-white rounded-xl p-4 shadow-md">
                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Phone className="h-4 w-4 text-red-600" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm mb-1">24/7 Support</h4>
                     <p className="text-sm text-gray-600">Emergency blood requests handled</p>
                   </div>
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
             <div className="md:grid md:grid-cols-3 md:gap-6 pt-4">
               {/* Mobile: Horizontal Scrollable Cards */}
               <div className="flex md:hidden gap-4 overflow-x-auto pb-4 scrollbar-hide">
                 {stats.map((stat, index) => (
                   <div key={index} className="text-center min-w-[120px] bg-white rounded-xl p-4 shadow-md">
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-8 py-3">
                <Link href="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Blood
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-8 py-3">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Camp
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image (2 columns) */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="/blood-donat.jpg"
                alt="Blood donation in progress"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/25 via-red-900/10 to-transparent"></div>
            </div>
            
            {/* Floating Info Card */}
            <Card className="absolute -bottom-4 -left-4 border-0 shadow-xl bg-white/95 backdrop-blur-sm max-w-[180px]">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Droplets className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Blood Donation</h4>
                  <p className="text-sm text-gray-600 mb-2">Safe & Professional</p>
                  <div className="flex flex-col space-y-1 text-sm text-gray-500">
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
