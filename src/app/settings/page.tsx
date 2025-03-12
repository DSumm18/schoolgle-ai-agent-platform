"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useOrganization } from "@/hooks/use-organization";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const { toast } = useToast();
  const { organization, updateOrganization, isLoading } = useOrganization();
  const [orgName, setOrgName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [secondaryColor, setSecondaryColor] = useState("#10B981");
  
  useEffect(() => {
    if (organization) {
      setOrgName(organization.name || "");
      setLogoUrl(organization.logoUrl || "");
      setPrimaryColor(organization.primaryColor || "#4F46E5");
      setSecondaryColor(organization.secondaryColor || "#10B981");
    }
  }, [organization]);

  const handleSave = () => {
    updateOrganization({
      name: orgName,
      logoUrl,
      primaryColor,
      secondaryColor,
    });
    
    toast({
      title: "Settings saved",
      description: "Your organization settings have been updated.",
    });
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-lg">Loading settings...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your organization settings and preferences
          </p>
        </div>

        <Tabs defaultValue="branding">
          <TabsList className="mb-6">
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="branding" className="space-y-6">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Organization Branding</h2>
              <p className="text-muted-foreground mb-6">
                Customize how the AI agent appears to your users
              </p>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="Enter your organization name"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="logoUrl">Logo URL</Label>
                  <Input
                    id="logoUrl"
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                    placeholder="https://example.com/logo.png"
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter a URL to your organization's logo (recommended size: 200x40px)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primaryColor"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        placeholder="#4F46E5"
                      />
                      <div
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondaryColor"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        placeholder="#10B981"
                      />
                      <div
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: secondaryColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {orgName.substring(0, 2).toUpperCase() || "OR"}
                  </div>
                  <span className="font-medium" style={{ color: primaryColor }}>
                    {orgName || "Your Organization"}
                  </span>
                </div>
                <div
                  className="mt-4 p-3 rounded-lg text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  Primary Button
                </div>
                <div
                  className="mt-2 p-3 rounded-lg text-white"
                  style={{ backgroundColor: secondaryColor }}
                >
                  Secondary Button
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="modules">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Module Settings</h2>
              <p className="text-muted-foreground">
                Enable or disable specific modules based on your organization's needs.
                This feature will be available in a future update.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="api">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">API Settings</h2>
              <p className="text-muted-foreground">
                Configure API keys and integration settings.
                This feature will be available in a future update.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}