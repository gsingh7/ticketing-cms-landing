import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "strong";
  animate?: boolean;
}

export function GradientBackground({
  className,
  intensity = "medium",
  animate = true,
  ...props
}: GradientBackgroundProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mediaQuery.matches);

      // Listen for theme changes
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      setIsDark(theme === "dark");
    }
  }, [theme]);

  // Use default colors during SSR and initial client render to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          "fixed inset-0 z-[-1] overflow-hidden",
          animate && "animate-gradient-slow",
          className
        )}
        {...props}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-[40vw]"
          style={{
            background: `linear-gradient(90deg, #14B8A640 -10%, transparent 100%)`,
            filter: `blur(100px)`,
            opacity: 0.7,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-[40vw]"
          style={{
            background: `linear-gradient(-90deg, #174B7340 -10%, transparent 100%)`,
            filter: `blur(100px)`,
            opacity: 0.7,
          }}
        />
      </div>
    );
  }

  // Base colors from theme
  const primaryColor = isDark ? "#56E0D6" : "#14B8A6"; // accent colors from theme
  const secondaryColor = isDark ? "#2B6EA6" : "#174B73"; // primary colors from theme

  // Intensity mappings
  const blurMappings = {
    light: "200px",
    medium: "300px",
    strong: "400px",
  };

  const opacityMappings = {
    light: "0.15",
    medium: "0.3",
    strong: "0.5",
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[-1] overflow-hidden",
        animate && "animate-gradient-slow",
        className
      )}
      {...props}
    >
      {/* Left side gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[40vw]"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}40 -10%, transparent 100%)`,
          filter: `blur(100px)`,
          opacity: 0.7,
        }}
      />

      {/* Right side gradient */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[40vw]"
        style={{
          background: `linear-gradient(-90deg, ${secondaryColor}40 -10%, transparent 100%)`,
          filter: `blur(100px)`,
          opacity: 0.7,
        }}
      />
    </div>
  );
}
