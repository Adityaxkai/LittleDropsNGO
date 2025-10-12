"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Globe, Award } from "lucide-react";

interface CounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

function Counter({ icon, value, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-3">
        <div className="flex justify-center mb-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            {icon}
          </div>
        </div>
        <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-xs text-gray-600 font-medium">{label}</p>
      </CardContent>
    </Card>
  );
}

export function ImpactCounters() {
  const counters = [
    {
      icon: <Users className="h-3 w-3" />,
      value: 15000,
      label: "People Helped",
    },
    {
      icon: <Heart className="h-3 w-3" />,
      value: 250,
      label: "Projects Completed",
    },
    {
      icon: <Globe className="h-3 w-3" />,
      value: 12,
      label: "Countries Reached",
    },
    {
      icon: <Award className="h-3 w-3" />,
      value: 500,
      label: "Volunteers",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Our Impact
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            Together, we&apos;ve made a difference in the lives of thousands of people
                around the world. Here&apos;s what we&apos;ve accomplished so far.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              icon={counter.icon}
              value={counter.value}
              label={counter.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
