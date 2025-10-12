"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  category: "beneficiary" | "volunteer" | "partner";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Education Program Beneficiary",
    content: "HopeBridge gave me the opportunity to continue my education when I thought all hope was lost. The support I received changed my life completely.",
    image: "/api/placeholder/60/60",
    category: "beneficiary",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Volunteer Coordinator",
    content: "Being part of HopeBridge has been incredibly rewarding. I've seen firsthand how our programs transform communities and create lasting change.",
    image: "/api/placeholder/60/60",
    category: "volunteer",
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    role: "Healthcare Partner",
    content: "Our partnership with HopeBridge has enabled us to reach underserved communities with essential healthcare services. Their dedication is inspiring.",
    image: "/api/placeholder/60/60",
    category: "partner",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Clean Water Project Beneficiary",
    content: "The clean water project in our village has improved the health of our entire community. We're grateful for HopeBridge's commitment to sustainable solutions.",
    image: "/api/placeholder/60/60",
    category: "beneficiary",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "beneficiary":
        return "bg-green-100 text-green-800";
      case "volunteer":
        return "bg-blue-100 text-blue-800";
      case "partner":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Stories of Impact
          </h2>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives have been transformed through our programs 
            and the dedicated volunteers who make it all possible.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Testimonial Card */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 md:p-4">
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <Quote className="h-3 w-3 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge className={`text-xs ${getCategoryColor(testimonials[currentIndex].category)}`}>
                      {testimonials[currentIndex].category.charAt(0).toUpperCase() + 
                       testimonials[currentIndex].category.slice(1)}
                    </Badge>
                  </div>
                  <blockquote className="text-xs md:text-sm text-gray-700 mb-2 leading-relaxed">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-sm hover:shadow-md transition-shadow duration-200"
            suppressHydrationWarning
          >
            <ChevronLeft className="h-3 w-3 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-sm hover:shadow-md transition-shadow duration-200"
            suppressHydrationWarning
          >
            <ChevronRight className="h-3 w-3 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-3 space-x-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
