import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Terminal, Code, FileText, ArrowRight, Server, Zap, Globe } from "lucide-react";
const Index = () => {
  return <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Feature section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight animate-fade-in">What is Model Context Protocol?</h2>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in">
              MCP is a standard protocol for clients to connect with servers that provide tools, resources, and prompts for AI assistants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border rounded-lg p-6 animate-slide-in">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Tools</h3>
              <p className="mt-2 text-muted-foreground">
                Enable AI assistants to execute functions through server-side code, such as accessing APIs or retrieving data.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 animate-slide-in" style={{
            animationDelay: "100ms"
          }}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Resources</h3>
              <p className="mt-2 text-muted-foreground">
                Provide file-like data such as API responses, documents, or any other content for AI consumption.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 animate-slide-in" style={{
            animationDelay: "200ms"
          }}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Prompts</h3>
              <p className="mt-2 text-muted-foreground">
                Create pre-written templates to help users accomplish specific tasks with your tools.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why MCP section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight">Why use MCP?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                MCP provides a standardized way to extend the functionality of any AI assistant, making tools more portable and reusable.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Server Flexibility</h3>
                <p className="mt-2 text-muted-foreground">
                  Build servers in Python, TypeScript, Java, C#, and more. Choose the language that best fits your project.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Quick Integration</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect to popular AI hosts like Claude for Desktop with minimal configuration, or build your own custom client.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Wide Compatibility</h3>
                <p className="mt-2 text-muted-foreground">
                  Built with compatibility in mind, ensuring tools work across different platforms and AI models.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="rounded-lg border bg-background p-8 md:p-12 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold">Ready to get started?</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Follow our quickstart guide to build your first MCP weather server and connect it to Claude for Desktop.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link to="/quickstart">
                  View Quickstart Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;