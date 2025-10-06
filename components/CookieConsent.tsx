"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50"
        >
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">We use cookies</h3>
                <p className="text-foreground/70 text-sm">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking
                  &quot;Accept&quot;, you consent to our use of cookies.
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Close cookie notice"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={acceptCookies}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-foreground/70 hover:text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
