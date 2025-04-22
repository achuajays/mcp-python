
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Info, GitBranch, Search, Linkedin, ArrowLeft, Hotel, Film, Tv, Trophy, Gamepad, Quote, Stars, Youtube, Instagram, ShoppingCart, Watch, CloudSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mcpData from "@/data/mcp.json";

interface McpCardProps {
  name: string;
  description: string;
  use: string;
  githubLink: string;
}

const McpCard = ({
  name,
  description,
  use,
  githubLink
}: McpCardProps) => {
  const getIcon = (name: string) => {
    if (name.includes("Anime")) return <Search className="h-5 w-5 text-primary" />;
    if (name.includes("LinkedIn")) return <Linkedin className="h-5 w-5 text-primary" />;
    if (name.includes("Movie")) return <Film className="h-5 w-5 text-primary" />;
    if (name.includes("Series")) return <Tv className="h-5 w-5 text-primary" />;
    if (name.includes("Hotel")) return <Hotel className="h-5 w-5 text-primary" />;
    if (name.includes("Cricket")) return <Trophy className="h-5 w-5 text-primary" />;
    if (name.includes("Game")) return <Gamepad className="h-5 w-5 text-primary" />;
    if (name.includes("Dev")) return <Quote className="h-5 w-5 text-primary" />;
    if (name.includes("Horoscope")) return <Stars className="h-5 w-5 text-primary" />;
    if (name.includes("YouTube")) return <Youtube className="h-5 w-5 text-primary" />;
    if (name.includes("Instagram")) return <Instagram className="h-5 w-5 text-primary" />;
    if (name.includes("Grocery")) return <ShoppingCart className="h-5 w-5 text-primary" />;
    if (name.includes("Watch")) return <Watch className="h-5 w-5 text-primary" />;
    if (name.includes("Weather")) return <CloudSun className="h-5 w-5 text-primary" />;
    return <Search className="h-5 w-5 text-primary" />;
  };

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg border-[#38BDF8]/20 bg-[#1E293B] backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
          {getIcon(name)}
          {name}
        </CardTitle>
        <CardDescription className="text-[#94A3B8]">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-2 text-sm">
          <Info className="h-4 w-4 mt-0.5 text-[#38BDF8]" />
          <p className="text-[#94A3B8]">{use}</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full flex items-center gap-2 border-[#38BDF8]/30 hover:border-[#38BDF8]/60 hover:bg-[#38BDF8]/10 text-[#F1F5F9]">
            <GitBranch className="h-4 w-4" />
            <span>View on GitHub</span>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const Mcp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A]">
      <Header />
      <div className="container py-8 max-w-screen-xl mx-auto flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2 mb-4 border-[#38BDF8]/30 hover:border-[#38BDF8]/60 hover:bg-[#38BDF8]/10 text-[#F1F5F9] transition-all">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
          
          <div className="mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#38BDF8] to-[#38BDF8]/70 bg-clip-text text-transparent mb-4">Model Context Protocol</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#38BDF8] to-[#38BDF8]/70 rounded-full mb-6"></div>
            <p className="text-lg text-[#94A3B8] max-w-2xl">
              Explore different MCP server options for your applications. Each card represents a different type of MCP server that you can use or customize.
            </p>
          </div>
          
          <div className={cn("grid gap-6", "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}>
            {mcpData.mcpOptions.map(option => (
              <McpCard 
                key={option.name} 
                name={option.name} 
                description={option.description} 
                use={option.use} 
                githubLink={option.githubLink} 
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mcp;
