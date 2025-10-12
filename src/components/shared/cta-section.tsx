import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "default" | "blue" | "gradient";
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "default",
  className = "",
}: CTASectionProps) {
  const variants = {
    default: "bg-gray-50",
    blue: "bg-blue-600 text-white",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
  };

  return (
    <section className={`py-16 ${variants[variant]} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href={primaryButton.href}>
              {primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {secondaryButton && (
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link href={secondaryButton.href}>
                {secondaryButton.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
