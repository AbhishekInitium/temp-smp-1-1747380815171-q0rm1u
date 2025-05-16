
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";

const OnboardedVendors = () => {
  // Mock data for onboarded vendors
  const onboardedVendors = [
    { id: "V001", name: "Tech Solutions Inc.", location: "New York, USA", email: "contact@techsolutions.com", phone: "+1 212-555-0123", postingBlock: "No", purchasingBlock: "No" },
    { id: "V002", name: "Global Logistics Ltd.", location: "London, UK", email: "info@globallogistics.com", phone: "+44 20-7946-0234", postingBlock: "Yes", purchasingBlock: "No" },
    { id: "V003", name: "Innovative Materials Co.", location: "Tokyo, Japan", email: "support@innovativematerials.com", phone: "+81 3-1234-5678", postingBlock: "No", purchasingBlock: "No" },
    { id: "V004", name: "Smart Electronics", location: "Seoul, South Korea", email: "sales@smartelectronics.com", phone: "+82 2-1234-5678", postingBlock: "No", purchasingBlock: "Yes" },
    { id: "V005", name: "Green Energy Systems", location: "Berlin, Germany", email: "contact@greenenergy.com", phone: "+49 30-1234-5678", postingBlock: "No", purchasingBlock: "No" },
    { id: "V006", name: "Quantum Computing Labs", location: "San Francisco, USA", email: "info@quantumlabs.com", phone: "+1 415-555-0189", postingBlock: "No", purchasingBlock: "No" },
    { id: "V007", name: "Advanced Medical Supplies", location: "Toronto, Canada", email: "sales@advancedmedical.com", phone: "+1 416-555-0147", postingBlock: "Yes", purchasingBlock: "Yes" },
  ];

  return (
    <AdminLayout title="Onboarded Vendors List">
      <div className="flex items-center gap-2 mb-6">
        <Link to="/admin-dashboard" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle>Supplier Directory</CardTitle>
          <CardDescription>
            View and manage all onboarded suppliers in the system
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Email ID</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Posting Block</TableHead>
                  <TableHead>Purchasing Block</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {onboardedVendors.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell className="font-medium">{vendor.id}</TableCell>
                    <TableCell>{vendor.name}</TableCell>
                    <TableCell>{vendor.location}</TableCell>
                    <TableCell>{vendor.email}</TableCell>
                    <TableCell>{vendor.phone}</TableCell>
                    <TableCell>
                      <span className={vendor.postingBlock === "Yes" ? "text-red-500" : "text-green-500"}>
                        {vendor.postingBlock}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={vendor.purchasingBlock === "Yes" ? "text-red-500" : "text-green-500"}>
                        {vendor.purchasingBlock}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default OnboardedVendors;
