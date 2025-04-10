
import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
  className?: string;
}

const CodeBlock = ({
  code,
  language = "python",
  showLineNumbers = false,
  title,
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const codeLines = code.trim().split("\n");

  return (
    <div className={cn("relative rounded-lg overflow-hidden my-6", className)}>
      {title && (
        <div className="px-4 py-2 bg-muted text-foreground text-sm border-b">
          {title}
        </div>
      )}
      <div className="relative bg-muted text-foreground overflow-x-auto">
        <pre className={`p-4 ${showLineNumbers ? 'pl-12' : ''} text-sm`}>
          <code>
            {codeLines.map((line, i) => (
              <div key={i} className="relative">
                {showLineNumbers && (
                  <span className="absolute left-[-2rem] select-none text-muted-foreground text-xs w-8 text-right">
                    {i + 1}
                  </span>
                )}
                {line || ' '}
              </div>
            ))}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 rounded-md text-muted-foreground hover:bg-muted-foreground/10 transition-all"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
