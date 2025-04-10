
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Info, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface McpCardProps {
  name: string;
  description: string;
  use: string;
  githubLink: string;
}

const mcpOptions: McpCardProps[] = [
  {
    name: "Weather Server",
    description: "A simple MCP weather server that provides forecast data and severe weather alerts.",
    use: "Ideal for applications that need real-time weather information.",
    githubLink: "https://github.com/anthropics/anthropic-tools/tree/main/mcp/examples/weather",
  },
  {
    name: "Calculator Server",
    description: "An MCP server that provides basic and scientific calculation capabilities.",
    use: "Perfect for applications requiring computational assistance.",
    githubLink: "https://github.com/anthropics/anthropic-tools/tree/main/mcp/examples/calculator",
  },
  {
    name: "File Server",
    description: "An MCP server that allows access to local files and directories.",
    use: "Great for applications that need to interact with the local file system.",
    githubLink: "https://github.com/anthropics/anthropic-tools/tree/main/mcp/examples/file-server",
  },
  {
    name: "Knowledge Base",
    description: "An MCP server that provides access to a local knowledge base.",
    use: "Useful for applications that need to search and retrieve information from a knowledge base.",
    githubLink: "https://github.com/anthropics/anthropic-tools/tree/main/mcp/examples/knowledge-base",
  }
];

const McpCard = ({ name, description, use, githubLink }: McpCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
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
    <div className="container py-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="mb-4">Model Context Protocol</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore different MCP server options for your applications. Each card represents a different type of MCP server that you can use or customize.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            Check out our comprehensive quickstart guide to learn how to build and deploy your own MCP server.
          </p>
          <Link to="/quickstart">
            <Button className="gap-2">
              <FileText className="h-4 w-4" />
              Quickstart Guide
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mcp;
