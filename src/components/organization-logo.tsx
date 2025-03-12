"use client";

import React from "react";
import Image from "next/image";
import { useOrganization } from "@/hooks/use-organization";

interface OrganizationLogoProps {
  className?: string;
}

export function OrganizationLogo({ className }: OrganizationLogoProps) {
  const { organization } = useOrganization();

  if (organization?.logoUrl) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={organization.logoUrl}
          alt={organization.name || "Organization logo"}
          width={100}
          height={40}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  // Fallback if no organization logo is set
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-8 w-8 rounded bg-gray-200 flex items-center justify-center text-gray-500">
        <span className="text-xs font-medium">ORG</span>
      </div>
      <span className="ml-2 font-medium text-gray-700 dark:text-gray-300">
        {organization?.name || "Your Organization"}
      </span>
    </div>
  );
}