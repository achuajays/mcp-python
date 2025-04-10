
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20 lg:pb-32 lg:pt-24">
      <div className="container relative max-w-5xl text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-bold animate-fade-in">
            <span className="gradient-text">Multi-Client Protocol</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground animate-fade-in delay-100">
            Connect your AI assistant to powerful tools, resources and capabilities
          </p>
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in delay-200">
            <Button asChild className="text-base" size="lg">
              <Link to="/quickstart">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-base" size="lg">
              <a 
                href="https://github.com/anthropics/anthropic-tools/tree/main/mcp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-30 blur-3xl">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-mcp-blue to-mcp-purple" 
               style={{ 
                 clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
               }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
