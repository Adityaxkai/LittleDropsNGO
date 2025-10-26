"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { X, Home, Users, BookOpen, Camera, Video, Heart, DollarSign, Phone, Shield } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Programs", href: "/programs", icon: BookOpen },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "Media", href: "/media", icon: Video },
  { name: "Get Involved", href: "/get-involved", icon: Heart },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin">Admin</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="w-12 h-12">
                <div className="flex flex-col items-center justify-center space-y-1">
                  <div className="w-5 h-0.5 bg-gray-700"></div>
                  <div className="w-5 h-0.5 bg-gray-700"></div>
                  <div className="w-5 h-0.5 bg-gray-700"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Button asChild variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200" suppressHydrationWarning>
                <Link href="/admin" className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200" suppressHydrationWarning>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="relative w-12 h-12 rounded-xl hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-300 group"
                  suppressHydrationWarning
                >
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="w-5 h-0.5 bg-gray-700 group-hover:bg-blue-600 transition-all duration-300 transform group-hover:rotate-45 group-hover:translate-y-1.5"></div>
                    <div className="w-5 h-0.5 bg-gray-700 group-hover:bg-blue-600 transition-all duration-300"></div>
                    <div className="w-5 h-0.5 bg-gray-700 group-hover:bg-blue-600 transition-all duration-300 transform group-hover:-rotate-45 group-hover:-translate-y-1.5"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetPrimitive.Portal>
                <SheetPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
                <SheetPrimitive.Content
                  className={cn(
                    "bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-[300px] sm:w-[340px]"
                  )}
                >
                  <div className="flex flex-col h-full">
                    {/* Professional Header with Logo */}
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200/50">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md relative">
                          <Image src="/logo.png" alt="Little Drops Logo" fill className="w-6 h-6 rounded object-cover" />
                        </div>
                        <div>
                          <SheetTitle className="text-base font-bold text-gray-900">
                            Little Drops
                          </SheetTitle>
                          <p className="text-xs text-gray-500">Humanity is Our Religion</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsOpen(false)}
                        className="w-7 h-7 p-0 hover:bg-gray-100 hover:text-gray-700 rounded-md transition-all duration-200"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Navigation Links - Optimized for Screen Fit */}
                    <div className="flex-1 pt-1">
                      <div className="space-y-0.5">
                        {navigation.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-all duration-200 flex-shrink-0">
                                <Icon className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                              </div>
                              <span className="font-semibold text-base">{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Professional Footer - Optimized */}
                    <div className="pt-2 border-t border-gray-200/50">
                      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-lg p-2.5 mb-2.5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
                        <div className="relative">
                          <p className="text-white text-sm font-bold mb-0.5">Make a Difference Today</p>
                          <p className="text-blue-100 text-xs leading-relaxed">Your support helps us serve more communities</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button asChild variant="outline" className="w-full border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 rounded-lg py-2.5 text-sm font-semibold">
                          <Link href="/admin" onClick={() => setIsOpen(false)} className="flex items-center justify-center">
                            <Shield className="h-4 w-4 mr-2" />
                            Admin Panel
                          </Link>
                        </Button>
                        <Button asChild className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-2.5 text-sm font-semibold relative overflow-hidden group">
                          <Link href="/donate" onClick={() => setIsOpen(false)}>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center justify-center">
                              <DollarSign className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                              <span className="group-hover:scale-105 transition-transform duration-300">Donate Now</span>
                            </div>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetPrimitive.Content>
              </SheetPrimitive.Portal>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
