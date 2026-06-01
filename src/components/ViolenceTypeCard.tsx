'use client'
import { ReactNode } from 'react';

interface ViolenceTypeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  examples: string[];
}

export default function ViolenceTypeCard({
  icon,
  title,
  description,
  examples,
}: ViolenceTypeCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Icon */}
      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Examples */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
          Exemplos:
        </p>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-secondary font-bold mt-0.5">•</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
