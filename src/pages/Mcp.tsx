
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Info, GitBranch, Search, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface McpCardProps {
  name: string;
  description: string;
  use: string;
  githubLink: string;
}

const mcpOptions: McpCardProps[] = [
  {
    name: "Anime Search MCP",
    description: "This MCP server is configured to return anime titles based on a query.",
    use: "Perfect for applications that need to search and retrieve anime titles based on user input.",
    githubLink: "https://github.com/achuajays/MCP_Server/tree/main/Anime_Search_Mcp",
  },
  {
    name: "LinkedIn Profile MCP",
    description: "This MCP server extracts and provides detailed information from LinkedIn profiles.",
    use: "Ideal for applications that need to retrieve and analyze professional profile data from LinkedIn.",
    githubLink: "https://github.com/achuajays/MCP_Server/tree/main/Linkedin_Profile_Mcp",
  }
];

const McpCard = ({ name, description, use, githubLink }: McpCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {name.includes("Anime") ? (
            <Search className="h-5 w-5 text-primary" />
          ) : (
            <Linkedin className="h-5 w-5 text-primary" />
          )}
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-2 text-sm">
          <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <p>{use}</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2"
          >
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container py-8 max-w-screen-xl mx-auto flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 mb-4 border-muted-foreground/30 hover:border-primary/40 hover:bg-accent/80 transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
          
          <div className="mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Model Context Protocol</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore different MCP server options for your applications. Each card represents a different type of MCP server that you can use or customize.
            </p>
          </div>
          
          <div className={cn(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}>
            {mcpOptions.map((option) => (
              <McpCard
                key={option.name}
                name={option.name}
                description={option.description}
                use={option.use}
                githubLink={option.githubLink}
              />
            ))}
          </div>
          
          <div className="mt-8 bg-accent rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Ready to build your own MCP server?</h2>
            <p className="mb-4">
              Check out our comprehensive documentation to learn how to build and deploy your own MCP server.
            </p>
            <a 
              href="https://github.com/anthropics/anthropic-tools/tree/main/mcp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <FileText className="h-4 w-4" />
                Documentation
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mcp;
