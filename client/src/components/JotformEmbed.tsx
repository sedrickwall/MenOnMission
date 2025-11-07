import { useEffect, useRef } from "react";

interface JotformEmbedProps {
  formId: string;
  className?: string;
}

export default function JotformEmbed({ formId, className = "" }: JotformEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.type = "text/javascript";
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [formId]);

  return <div ref={containerRef} className={className} data-testid={`jotform-${formId}`} />;
}
