import { MainLayout } from "@/components/layout/main-layout";
import Image from "next/image";

import { ImpactCounters } from "@/components/shared/impact-counters";
import { Testimonials } from "@/components/shared/testimonials";
import { BloodDonation } from "@/components/shared/blood-donation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Droplets, Users, DollarSign, Globe } from "lucide-react";

const programs = [
  {
    title: "Education for All",
    description: "Providing quality education to underprivileged children in rural communities.",
    icon: BookOpen,
    href: "/programs",
    image: "/program-education.jpg",
  },
  {
    title: "Clean Water Initiative",
    description: "Building sustainable water systems in communities without access to clean water.",
    icon: Droplets,
    href: "/programs",
    image: "/program-water.jpg",
  },
  {
    title: "Healthcare Access",
    description: "Delivering essential healthcare services to remote and underserved areas.",
    icon: Heart,
    href: "/programs",
    image: "/program-healthcare.jpg",
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[500px] flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Banner Image */}
        <div className="relative w-full lg:w-1/2 h-full group">
          <Image
            src="/ChatGPT Image Aug 17, 2025, 10_46_22 AM.png"
            alt="Little Drops Banner"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10"></div>
          
          {/* Very minimal smoke effect transition */}
          <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-20"></div>
          

        </div>

        {/* Right Side - Content with Background */}
        <div className="w-full lg:w-1/2 h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative flex items-center px-8 lg:px-16 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
          <div className="max-w-xl mx-auto text-white relative z-10">
            <div className="space-y-6">
              {/* Header with enhanced typography */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
                  Little Drops
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-blue-50 leading-tight">
                  Humanity is Our Religion
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-1 bg-blue-300 rounded-full shadow-lg"></div>
                  <div className="w-6 h-1 bg-blue-400 rounded-full shadow-lg"></div>
                  <div className="w-3 h-1 bg-blue-500 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-blue-50 leading-relaxed font-medium">
                Empowering communities through humanitarian aid, education, and sustainable development
                in Jharkhand and beyond. Every little drop makes a difference.
              </p>
              
              {/* Professional CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 rounded-xl px-8 py-3">
                  <Link href="/donate">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-gray-800 text-white hover:bg-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-8 py-3">
                  <Link href="/get-involved">
                    <Users className="mr-2 h-5 w-5" />
                    Get Involved
                  </Link>
                </Button>
              </div>
              
              {/* Glass morphism impact stats */}
              <div className="mt-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                    <div className="text-sm text-blue-50 font-medium">Families Helped</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
                    <div className="text-sm text-blue-50 font-medium">Villages Reached</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">5+</div>
                    <div className="text-sm text-blue-50 font-medium">Years of Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Little Drops
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with the belief that &ldquo;Humanity is Our Religion,&rdquo; Little Drops works tirelessly 
                to serve communities in Jharkhand and beyond. We focus on education, healthcare, 
                clean water, and community development.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in Ranchi, Jharkhand, we reach out to the most vulnerable communities, 
                providing them with the resources and support they need to thrive.
              </p>
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/banner-littledrops.jpg"
                  alt="Little Drops NGO Banner"
                  fill
                  className="object-contain object-center bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on four key areas that address the fundamental needs of communities 
              and create sustainable, long-term impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <program.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{program.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={program.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BloodDonation />
      <ImpactCounters />
      <Testimonials />
      
      {/* Impact Stories Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stories of Hope & Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Little Drops is creating lasting change in communities across Jharkhand. 
              Every story represents a life transformed through compassion and action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-08-17 at 15.43.11_921efcda.jpg"
                  alt="Science Awareness Mela Inauguration"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-500/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Science Awareness</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Science Awareness Mela</h4>
                <p className="text-gray-600 mb-4">
                  Organized three-day science awareness fairs sponsored by Ministry of Science & Technology, 
                  Govt. of India, reaching over 300 students across multiple schools in Jharkhand.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">300+ Students</span>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/gallery">View Gallery</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-08-17 at 15.49.51_32e49d80.jpg"
                  alt="Cultural Performance at Science Mela"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-green-500/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Cultural Programs</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Cultural Performances</h4>
                <p className="text-gray-600 mb-4">
                  Children presenting traditional dances and dramas to convey environmental protection messages, 
                  combining cultural expression with scientific awareness.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">225+ Participants</span>
                  <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/media">View Media</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-08-17 at 15.37.16_c7cbb4bc.jpg"
                  alt="Award Ceremony at Science Mela"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-purple-500/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Awards & Recognition</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Student Achievements</h4>
                <p className="text-gray-600 mb-4">
                  Students receiving certificates and trophies for their participation in science competitions, 
                  encouraging scientific thinking and innovation among young minds.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">50+ Awards</span>
                  <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/gallery">View Gallery</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Be Part of the Change
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join our community of changemakers and help us create more stories of hope and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-8 py-3">
                  <Link href="/donate">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Support Our Mission
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-gray-800 text-white hover:bg-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl px-8 py-3">
                  <Link href="/get-involved">
                    <Users className="mr-2 h-5 w-5" />
                    Join Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
    </div>
      </section>
    </MainLayout>
  );
}
