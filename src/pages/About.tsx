
import { Mail, MapPin, Phone, FileText, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="container py-12 max-w-screen-xl mx-auto flex-1">
        <Link to="/">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 mb-6 hover:bg-accent/80 transition-all">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </Link>

        <div className="mb-16 p-8 bg-card rounded-lg shadow-lg animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-8">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Adarsh Ajay</h2>
                <p className="text-lg text-muted-foreground">Software Development Engineer at AOT Technologies</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:adarshajays139@gmail.com" className="hover:text-primary transition-colors">
                    adarshajays139@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <span>+91 9605636297</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Trivandrum, India</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/achuajays" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <FileText className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/adarsh-ajay-9a8073226/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Expertise</h3>
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">AI & LLM Technologies</h4>
                    <p className="text-muted-foreground">Prompt Engineering, Agent-Based Systems, MCP, CREWAI, Langflow, Smolagents</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Languages & Frameworks</h4>
                    <p className="text-muted-foreground">Python, JavaScript, TypeScript, Java, SQL, FastAPI, Django, Flask, React</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">AI Frameworks</h4>
                    <p className="text-muted-foreground">Langchain, TensorFlow, PyTorch, Hugging Face</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Cloud & Infrastructure</h4>
                    <p className="text-muted-foreground">GCP (Vertex AI, Big Query), AWS (S3, SageMaker)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
