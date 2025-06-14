import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="mt-auto border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-lg text-foreground">
            <span className="text-primary">MCP MCP For Daily Use</span>
            <span className="text-muted-foreground"></span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Model Context Protocol Documentation - {currentYear}
        </div>
        <nav className="flex items-center space-x-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/mcp" className="text-muted-foreground hover:text-foreground">
            MCP
          </Link>
          <a href="https://github.com/anthropics/anthropic-tools/tree/main/mcp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            GitHub
          </a>
        </nav>
      </div>
    </footer>;
};
export default Footer;