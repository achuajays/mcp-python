import { Link } from "react-router-dom";
import { ExternalLink, FileText, Info, GitBranch, Search, Linkedin, ArrowLeft, Hotel, Film, Tv, Trophy, Gamepad, Quote, Stars, Youtube, Instagram, ShoppingCart, Watch, CloudSun, Mail, MapPin, Phone } from "lucide-react";
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
    <Card className="flex flex-col h-full transition-all hover:shadow-lg hover:scale-[1.02] group">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 group-hover:text-primary">
          {getIcon(name)}
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground/90">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3 text-sm">
          <Info className="h-4 w-4 mt-1 text-primary/70" />
          <p className="leading-relaxed">{use}</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full flex items-center gap-2 transition-colors hover:bg-primary/10 hover:text-primary">
            <GitBranch className="h-4 w-4" />
            <span>View on GitHub</span>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const AboutSection = () => {
  return (
    <div className="mb-16 p-6 bg-card rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
        About the Developer
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Adarsh Ajay</h3>
          <p className="text-muted-foreground">Software Development Engineer at AOT Technologies</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:adarshajays139@gmail.com" className="hover:text-primary transition-colors">
                adarshajays139@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 9605636297</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Trivandrum, India</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/achuajays" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Expertise</h3>
          <div className="grid gap-2">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">AI & LLM:</span> Prompt Engineering, Agent-Based Systems, MCP, CREWAI
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Languages:</span> Python, JavaScript, TypeScript, Java, SQL
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Frameworks:</span> FastAPI, Django, Flask, React
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Cloud:</span> GCP (Vertex AI, Big Query), AWS (S3, SageMaker)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mcp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="container py-12 max-w-screen-xl mx-auto flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2 mb-6 hover:bg-accent/80 transition-all">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4">
                Model Context Protocol
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground/90 max-w-2xl leading-relaxed">
                Explore different MCP server options for your applications. Each card represents a different type of MCP server that you can use or customize.
              </p>
            </div>
          </div>
          
          <AboutSection />
          
          <div className={cn(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "animate-fade-in [&>*]:animate-slide-in"
          )}>
            {mcpData.mcpOptions.map((option, index) => (
              <div key={option.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <McpCard 
                  name={option.name} 
                  description={option.description} 
                  use={option.use} 
                  githubLink={option.githubLink} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mcp;
