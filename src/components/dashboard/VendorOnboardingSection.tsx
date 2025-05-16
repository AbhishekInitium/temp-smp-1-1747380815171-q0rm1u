
import React from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VendorOnboardingSection = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="bg-gray-50 border-b">
        <CardTitle className="flex items-center gap-2">
          <UserCheck className="h-6 w-6 text-initium-accent" />
          Vendor Onboarding
        </CardTitle>
        <CardDescription>
          Manage supplier registration and verification process
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/admin-dashboard/document-verification" className="block">
          <Card className="h-full transition-all hover:shadow-md cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="rounded-full p-3 bg-blue-100">
                  <ClipboardCheck className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <CardTitle className="mt-4 text-base">Document Verification Process</CardTitle>
              <CardDescription className="text-xs">
                Review and verify supplier documentation
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        
        <Link to="/admin-dashboard/onboarded-vendors" className="block">
          <Card className="h-full transition-all hover:shadow-md cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="rounded-full p-3 bg-green-100">
                  <UserCheck className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <CardTitle className="mt-4 text-base">Onboarded Vendors List</CardTitle>
              <CardDescription className="text-xs">
                View and manage onboarded suppliers
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VendorOnboardingSection;
