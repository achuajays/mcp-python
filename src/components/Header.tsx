
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-foreground">
              <span className="text-primary">MCP</span>
              <span className="text-muted-foreground">Docs</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              to="/" 
              className={`transition-colors hover:text-foreground/80 ${isActive('/') || isActive('/home') ? 'text-foreground font-bold' : 'text-foreground/60'}`}
            >
              Home
            </Link>
            <Link 
              to="/quickstart" 
              className={`transition-colors hover:text-foreground/80 ${isActive('/quickstart') ? 'text-foreground font-bold' : 'text-foreground/60'}`}
            >
              Quickstart
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <a 
              href="https://github.com/anthropics/anthropic-tools/tree/main/mcp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </a>
          </div>
        </div>

        <div className="md:hidden flex flex-1 items-center justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background">
            <div className="relative z-20 grid gap-6 rounded-md bg-background p-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute right-4 top-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" 
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
              <nav className="grid grid-flow-row auto-rows-max text-sm">
                <Link 
                  to="/"
                  className={`flex w-full items-center rounded-md p-2 text-sm font-medium ${isActive('/') || isActive('/home') ? 'bg-muted' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/quickstart"
                  className={`flex w-full items-center rounded-md p-2 text-sm font-medium ${isActive('/quickstart') ? 'bg-muted' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quickstart
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
