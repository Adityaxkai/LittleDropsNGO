import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-xs text-sm",
    md: "text-sm text-lg",
    lg: "text-base text-xl"
  };

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Image */}
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/logo.png"
          alt="Little Drops Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-medium text-blue-600 leading-none ${textSizes[size].split(' ')[0]}`}>
            Little
          </span>
          <span className={`font-bold text-gray-900 leading-none ${textSizes[size].split(' ')[1]}`}>
            Drops
          </span>
        </div>
      )}
    </Link>
  );
}
