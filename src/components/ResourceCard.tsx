'use client';
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action: string;
  link: string;
  isPhoneLink?: boolean;
}

export default function ResourceCard({
  icon,
  title,
  description,
  action,
  link,
  isPhoneLink = false,
}: ResourceCardProps) {
  const href = isPhoneLink ? `tel:${link}` : link;

  return (
    <a
      href={href}
      target={isPhoneLink ? undefined : "_blank"}
      rel={isPhoneLink ? undefined : "noopener noreferrer"}
      className="bg-white border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Action */}
      <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
        <span>{action}</span>
        <ArrowRight size={16} />
      </div>
    </a>
  );
}
