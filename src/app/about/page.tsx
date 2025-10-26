"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Eye, Users, Globe, Clock, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every challenge with empathy and understanding.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We measure success by the positive change we create in communities.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of transparency and accountability.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of collective action and local leadership.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We create solutions that last and empower communities long-term.",
  },
  {
    icon: Clock,
    title: "Commitment",
    description: "We are dedicated to long-term partnerships and lasting change.",
  },
];

const team = [
  {
    name: "Amresh Kumar Chourasia",
    role: "President",
    bio: "With over 15 years of experience in international development, Amresh leads our organization with passion and expertise.",
    image: "/WhatsApp Image 2025-08-17 at 15.10.39_83e7c93b.jpg",
  },
  {
    name: "Jiwan Kumar",
    role: "Secretary",
    bio: "Jiwan oversees our field operations and ensures our programs deliver maximum impact to communities.",
    image: "/WhatsApp Image 2025-08-17 at 15.11.24_55ec6342.jpg",
  },
  {
    name: "Deepak Kumar",
    role: "Treasurer",
    bio: "Deepak manages our financial operations and ensures transparent accounting practices for all our programs and initiatives.",
    image: "/Gemini_Generated_Image_5cojlx5cojlx5coj.png",
  },

];

export default function AboutPage() {
  const [currentValuesSlide, setCurrentValuesSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  // Auto-slide functionality for values
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValuesSlide((prev) => (prev + 1) % values.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-slide functionality for team
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % team.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            About Little Drops
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-blue-100">
            Humanity is Our Religion. Transforming lives and communities through humanitarian aid, 
            education, and sustainable development in Jharkhand and beyond.
          </p>
        </div>
      </section>

             {/* Our Story */}
       <section className="py-12 md:py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
             <div className="order-2 lg:order-1">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                 Our Story
               </h2>
               <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                 Little Drops was founded with a simple yet powerful belief: &ldquo;Humanity is Our Religion.&rdquo;
                 We started as a small initiative in Ranchi, Jharkhand, with the goal of serving 
                 the most vulnerable communities in our region.
               </p>
               <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                 What began as local community service has grown into a comprehensive organization 
                 that addresses multiple aspects of community development - from education and healthcare 
                 to clean water and sustainable development.
               </p>
               <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                 Today, we work across Jharkhand and neighboring regions, serving thousands of people 
                 annually through our various programs and initiatives.
               </p>
             </div>
             <div className="relative order-1 lg:order-2">
               <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg max-w-xs md:max-w-sm mx-auto relative">
                 <Image
                   src="/about-banner.jpg"
                   alt="Swami Vivekananda - Inspiring our humanitarian mission"
                   fill
                   className="object-cover object-top"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                 <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                   <p className="text-xs md:text-sm font-semibold mb-0.5">Swami Vivekananda</p>
                   <p className="text-xs opacity-90">Inspiring our humanitarian mission</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

                           {/* Mission & Vision */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 md:mr-4">
                      <Target className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    To serve humanity with compassion and dedication, providing essential services 
                    in education, healthcare, clean water, and community development. We strive to 
                    empower communities in Jharkhand and beyond, creating sustainable solutions that 
                    enable individuals and families to thrive independently.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3 md:mr-4">
                      <Eye className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    A world where every individual has access to basic necessities, quality education, 
                    and opportunities for growth. We envision thriving communities in Jharkhand and 
                    beyond that can sustain themselves and support future generations, guided by the 
                    principle that humanity is our religion.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mobile Scrollable Cards */}
            <div className="md:hidden">
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4">
                  <Card className="border-0 shadow-lg min-w-[300px] flex-shrink-0 snap-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30">
                    <CardContent className="p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 mr-4 shadow-md">
                          <Target className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        To serve humanity with compassion and dedication, providing essential services 
                        in education, healthcare, clean water, and community development. We strive to 
                        empower communities in Jharkhand and beyond, creating sustainable solutions that 
                        enable individuals and families to thrive independently.
                      </p>
                      <div className="mt-4 flex justify-center">
                        <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg min-w-[300px] flex-shrink-0 snap-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/30">
                    <CardContent className="p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 mr-4 shadow-md">
                          <Eye className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        A world where every individual has access to basic necessities, quality education, 
                        and opportunities for growth. We envision thriving communities in Jharkhand and 
                        beyond that can sustain themselves and support future generations, guided by the 
                        principle that humanity is our religion.
                      </p>
                      <div className="mt-4 flex justify-center">
                        <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* Scroll Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

             {/* Our Values */}
       <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Our Values
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               These core values guide everything we do and shape our approach to community development.
             </p>
           </div>
           
           {/* Desktop Grid */}
           <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {values.map((value, index) => (
               <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <CardContent className="p-6 text-center">
                   <div className="flex justify-center mb-4">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                       <value.icon className="h-6 w-6" />
                     </div>
                   </div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
                     {value.title}
                   </h3>
                   <p className="text-gray-600">
                     {value.description}
                   </p>
                 </CardContent>
               </Card>
             ))}
           </div>

                       {/* Mobile Auto-sliding Cards */}
            <div className="md:hidden">
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentValuesSlide * 100}%)` }}
                  >
                    {values.map((value, index) => (
                      <div key={index} className="min-w-full p-4">
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
                          <CardContent className="p-4 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                            <div className="flex justify-center mb-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 shadow-md">
                                <value.icon className="h-6 w-6" />
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {value.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {value.description}
                            </p>
                            <div className="mt-3 flex justify-center">
                              <div className="w-6 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center mt-3 space-x-2">
                  {values.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentValuesSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
         </div>
       </section>

             {/* Team */}
       <section className="py-16 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Our Leadership Team
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Meet the dedicated professionals who lead our organization and drive our mission forward.
             </p>
           </div>
           
                       {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden shadow-xl">
                      {/* Background blur effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 backdrop-blur-sm"></div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <Badge className="mb-3 bg-blue-100 text-blue-800">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

                       {/* Mobile Auto-sliding Cards */}
            <div className="md:hidden">
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
                  >
                    {team.map((member, index) => (
                      <div key={index} className="min-w-full p-4">
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
                          <CardContent className="p-4 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                            <div className="relative w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden shadow-xl">
                              {/* Background blur effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 backdrop-blur-sm"></div>
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {member.name}
                            </h3>
                            <Badge className="mb-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium px-3 py-1">
                              {member.role}
                            </Badge>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {member.bio}
                            </p>
                            <div className="mt-3 flex justify-center">
                              <div className="w-6 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center mt-3 space-x-2">
                  {team.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentTeamSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
         </div>
       </section>

             {/* Impact Stats */}
       <section className="py-12 md:py-16 bg-blue-600 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-8 md:mb-12">
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
               Our Impact Over the Years
             </h2>
             <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto">
               Since our founding, we&apos;ve made significant progress in improving lives and communities in Jharkhand.
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
             <div className="text-center">
               <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">15,000+</div>
               <div className="text-sm md:text-base text-blue-100">People Helped</div>
             </div>
             <div className="text-center">
               <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">250+</div>
               <div className="text-sm md:text-base text-blue-100">Projects Completed</div>
             </div>
             <div className="text-center">
               <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">12</div>
               <div className="text-sm md:text-base text-blue-100">Districts Reached</div>
             </div>
             <div className="text-center">
               <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">500+</div>
               <div className="text-sm md:text-base text-blue-100">Volunteers</div>
             </div>
           </div>
         </div>
       </section>
    </MainLayout>
  );
}
