
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nic-accent/30 to-transparent -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="bg-nic-accent px-3 py-1 rounded-full text-xs font-medium text-nic-primary">
              National Industrial Classification
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-nic-primary animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Navigating Industrial Classifications Made Simple
          </h1>
          
          <p className="mt-6 text-lg text-nic-muted animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Explore the comprehensive guide to National Industrial Classification codes, 
            simplifying business categorization for regulatory compliance and statistical analysis.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button className="gap-2 bg-nic-primary hover:bg-nic-primary/90 text-white">
              Explore NIC Codes
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="border-nic-primary text-nic-primary hover:bg-nic-primary/5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
