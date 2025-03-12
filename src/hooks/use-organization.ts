"use client";

import { useState, useEffect } from "react";

export interface Organization {
  id: string;
  name: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

// This would typically come from an API or database
const defaultOrganization: Organization = {
  id: "default",
  name: "Demo School",
  logoUrl: undefined,
  primaryColor: "#4F46E5",
  secondaryColor: "#10B981",
};

export function useOrganization() {
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const fetchOrganization = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        // Get organization from localStorage or use default
        const savedOrg = localStorage.getItem("schoolgle-organization");
        const org = savedOrg ? JSON.parse(savedOrg) : defaultOrganization;
        
        setOrganization(org);
      } catch (error) {
        console.error("Failed to fetch organization:", error);
        setOrganization(defaultOrganization);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrganization();
  }, []);

  const updateOrganization = (updates: Partial<Organization>) => {
    if (!organization) return;
    
    const updatedOrg = { ...organization, ...updates };
    setOrganization(updatedOrg);
    
    // Save to localStorage
    localStorage.setItem("schoolgle-organization", JSON.stringify(updatedOrg));
  };

  return {
    organization,
    isLoading,
    updateOrganization,
  };
}