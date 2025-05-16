
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, CheckCircle2, XCircle, FileText } from "lucide-react";
import InitiumLogo from "@/components/InitiumLogo";
import { Link } from "react-router-dom";

const DocumentVerification = () => {
  const { toast } = useToast();
  
  // Mock data for document verification
  const verificationData = [
    { srNo: 1, regId: "REG-001", supplierName: "Tech Solutions Inc.", status: "Approved", email: "contact@techsolutions.com" },
    { srNo: 2, regId: "REG-002", supplierName: "Global Logistics Ltd.", status: "Pending", email: "info@globallogistics.com" },
    { srNo: 3, regId: "REG-003", supplierName: "Innovative Materials Co.", status: "Discrepancy", email: "support@innovativematerials.com" },
    { srNo: 4, regId: "REG-004", supplierName: "Smart Electronics", status: "Approved", email: "sales@smartelectronics.com" },
    { srNo: 5, regId: "REG-005", supplierName: "Green Energy Systems", status: "Pending", email: "contact@greenenergy.com" },
  ];

  const handleReviewDocuments = (regId: string) => {
    toast({
      title: "Document Review Started",
      description: `Starting document review for registration ID ${regId}`,
      duration: 3000,
    });
  };

  const handleOnboardSupplier = (regId: string) => {
    toast({
      title: "Supplier Onboarding",
      description: `Onboarding process initiated for registration ID ${regId}`,
      duration: 3000,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "Discrepancy":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-initium-background">
      {/* Header */}
      <header className="bg-white border-b border-border py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <InitiumLogo className="h-8 w-auto" />
            <span className="text-xl font-semibold text-initium-primary hidden sm:inline-block">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, Admin</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <Link to="/admin-dashboard" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold text-initium-primary">Document Verification Process</h1>
          </div>

          <Card className="shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Supplier Document Verification</CardTitle>
              <CardDescription>
                Review supplier documents and manage their verification status
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sr No</TableHead>
                      <TableHead>Registration ID</TableHead>
                      <TableHead>Supplier Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Review Documents</TableHead>
                      <TableHead>Onboard Supplier</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verificationData.map((item) => (
                      <TableRow key={item.regId}>
                        <TableCell>{item.srNo}</TableCell>
                        <TableCell className="font-medium">{item.regId}</TableCell>
                        <TableCell>{item.supplierName}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(item.status)}
                            <span>{item.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReviewDocuments(item.regId)}
                          >
                            Review Documents
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            disabled={item.status !== "Approved"}
                            onClick={() => handleOnboardSupplier(item.regId)}
                          >
                            Onboard Supplier
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-4 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Initium Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DocumentVerification;
