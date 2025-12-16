import { useState } from "react";
import { Copy, Check, Github, ExternalLink, Layers, Zap, Settings, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

const installCommand = "pip install tingly-box";

const features = [
  {
    icon: Layers,
    title: "Multi-Provider Support",
    description: "Connect to OpenAI, Anthropic, Google, and more through a single interface.",
  },
  {
    icon: Zap,
    title: "Unified API",
    description: "OpenAI-compatible API that works with all your existing tools and libraries.",
  },
  {
    icon: Settings,
    title: "Config-Based Routing",
    description: "Route requests to different providers based on model names and custom rules.",
  },
  {
    icon: Layout,
    title: "Web Management UI",
    description: "Monitor usage, manage API keys, and configure providers through a clean interface.",
  },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 
        className="text-5xl md:text-7xl font-bold mb-6 text-glow animate-fade-up"
        style={{ animationDelay: "0ms" }}
      >
        <span className="text-primary">Tingly</span> Box
      </h1>
      
      <p 
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        Provider-agnostic AI model proxy with unified API
      </p>

      <div 
        className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3 font-mono text-sm">
          <span className="text-muted-foreground">$</span>
          <span>{installCommand}</span>
          <button
            onClick={handleCopy}
            className="ml-2 p-1 hover:bg-muted rounded transition-colors"
            aria-label="Copy install command"
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      <div 
        className="flex flex-wrap justify-center gap-4 animate-fade-up"
        style={{ animationDelay: "300ms" }}
      >
        <Button asChild size="lg" className="gap-2">
          <a href="https://github.com/yourusername/tingly-box" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <a href="https://github.com/yourusername/tingly-box#readme" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5" />
            Documentation
          </a>
        </Button>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickStart = () => {
  const [copied, setCopied] = useState(false);
  
  const codeExample = `# Install Tingly Box
pip install tingly-box

# Start the server
tingly-box serve --config config.yaml

# Use with OpenAI client
from openai import OpenAI
client = OpenAI(base_url="http://localhost:8000/v1")`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Start</h2>
        <div className="relative rounded-lg bg-secondary border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <span className="text-sm text-muted-foreground font-mono">terminal</span>
            <button
              onClick={handleCopy}
              className="p-1 hover:bg-muted rounded transition-colors"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono">{codeExample}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">
          MIT License © {new Date().getFullYear()} Tingly Box
        </div>
        <a
          href="https://github.com/yourusername/tingly-box"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <QuickStart />
      <Footer />
    </main>
  );
};

export default Index;
