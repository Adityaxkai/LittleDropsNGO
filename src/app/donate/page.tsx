"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, DollarSign, Users, BookOpen, Droplets, Shield } from "lucide-react";

const donationTiers = [
  {
    amount: 25,
    title: "Education Supporter",
    description: "Provides school supplies for 5 children for one month",
    impact: "5 children get school supplies",
    icon: BookOpen,
  },
  {
    amount: 50,
    title: "Water Champion",
    description: "Provides clean water access for 10 people for one month",
    impact: "10 people get clean water",
    icon: Droplets,
  },
  {
    amount: 100,
    title: "Healthcare Hero",
    description: "Provides medical care for 20 people in need",
    impact: "20 people receive medical care",
    icon: Heart,
  },
  {
    amount: 250,
    title: "Community Builder",
    description: "Supports community development programs for a month",
    impact: "1 community gets development support",
    icon: Users,
  },
];

const impactExamples = [
  {
    amount: "$25",
    impact: "Provides clean water for a family for 1 month",
  },
  {
    amount: "$50",
    impact: "Sends a child to school for 3 months",
  },
  {
    amount: "$100",
    impact: "Provides healthcare for 20 people",
  },
  {
    amount: "$250",
    impact: "Builds a community well serving 500 people",
  },
  {
    amount: "$500",
    impact: "Funds a teacher's salary for 6 months",
  },
  {
    amount: "$1,000",
    impact: "Establishes a mobile health clinic",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("one-time");
  const [program, setProgram] = useState<string>("general");

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock donation processing
    alert("Thank you for your donation! This is a demo - no actual payment will be processed.");
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Make a Donation
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-green-100">
            Your donation directly supports our programs and helps us reach more communities in need. 
            Every dollar makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Donation Details
              </h2>
              
              <form onSubmit={handleDonation} className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Select Amount</Label>
                  <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
                    <div className="grid grid-cols-2 gap-4">
                      {donationTiers.map((tier) => (
                        <div key={tier.amount} className="relative">
                          <RadioGroupItem
                            value={tier.amount.toString()}
                            id={`amount-${tier.amount}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`amount-${tier.amount}`}
                            className="flex flex-col p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl font-bold text-gray-900">${tier.amount}</span>
                              <tier.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <span className="font-semibold text-gray-900">{tier.title}</span>
                            <span className="text-sm text-gray-600">{tier.impact}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Or enter a custom amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      className="text-lg"
                    />
                  </div>
                </div>

                {/* Frequency */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Donation Frequency</Label>
                  <RadioGroup value={frequency} onValueChange={setFrequency}>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yearly" id="yearly" />
                        <Label htmlFor="yearly">Yearly</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Program Selection */}
                <div className="space-y-4">
                  <Label htmlFor="program" className="text-lg font-semibold">
                    Designate to Program (Optional)
                  </Label>
                  <Select value={program} onValueChange={setProgram}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Fund</SelectItem>
                      <SelectItem value="education">Education for All</SelectItem>
                      <SelectItem value="water">Clean Water Initiative</SelectItem>
                      <SelectItem value="healthcare">Healthcare Access</SelectItem>
                      <SelectItem value="community">Community Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required suppressHydrationWarning />
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <Label htmlFor="anonymous">Make this donation anonymous</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700" suppressHydrationWarning>
                  <DollarSign className="mr-2 h-5 w-5" />
                  Complete Donation
                </Button>
              </form>
            </div>

            {/* Impact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-blue-600" />
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {impactExamples.map((example, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-900">{example.amount}</span>
                        <span className="text-gray-600">{example.impact}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Why Donate?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Direct Impact</h4>
                      <p className="text-gray-600 text-sm">Your donation goes directly to programs that help communities in need.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparency</h4>
                      <p className="text-gray-600 text-sm">We provide detailed reports on how your donation is used and its impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sustainable Change</h4>
                      <p className="text-gray-600 text-sm">We focus on long-term solutions that empower communities to thrive independently.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Deductible</h3>
                  <p className="text-gray-600 text-sm">
                    All donations to HopeBridge are tax-deductible. You will receive a receipt for your records.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Trust Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to transparency and accountability in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Donations</h3>
              <p className="text-gray-600">
                Your payment information is protected with bank-level security.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Impact</h3>
              <p className="text-gray-600">
                90% of every dollar goes directly to our programs and beneficiaries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-gray-600">
                Receive updates on how your donation is making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
