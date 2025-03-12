"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Building2,
  Users,
  ShieldCheck,
  Banknote,
  ClipboardCheck,
  BookOpen,
  Heart,
  Settings,
  HelpCircle,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Estates Management",
    href: "/estates",
    icon: Building2,
  },
  {
    title: "HR",
    href: "/hr",
    icon: Users,
  },
  {
    title: "GDPR",
    href: "/gdpr",
    icon: ShieldCheck,
  },
  {
    title: "Finance",
    href: "/finance",
    icon: Banknote,
  },
  {
    title: "Compliance",
    href: "/compliance",
    icon: ClipboardCheck,
  },
  {
    title: "Teaching & Learning",
    href: "/teaching",
    icon: BookOpen,
  },
  {
    title: "SEND",
    href: "/send",
    icon: Heart,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/help",
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full w-64 border-r bg-white dark:bg-gray-950">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-schoolgle-primary">Schoolgle AI</h2>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-schoolgle-primary text-white"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Powered by Schoolgle
        </div>
      </div>
    </div>
  );
}