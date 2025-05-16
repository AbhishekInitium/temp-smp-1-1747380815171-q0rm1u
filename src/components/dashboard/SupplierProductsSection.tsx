
import React from "react";
import { Package2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { ProductStatusIndicator } from "./ProductStatusIndicator";

// Mock data for supplier products
const supplierProducts = [
  { id: "PROD-001", name: "High-Performance SSD", supplier: "Tech Solutions Inc.", category: "Electronics", price: "$120.00", status: "Approved" },
  { id: "PROD-002", name: "Ergonomic Office Chair", supplier: "Global Logistics Ltd.", category: "Furniture", price: "$249.99", status: "Pending" },
  { id: "PROD-003", name: "Carbon Fiber Components", supplier: "Innovative Materials Co.", category: "Raw Materials", price: "$85.50/kg", status: "Approved" },
  { id: "PROD-004", name: "LED Monitor 27\"", supplier: "Smart Electronics", category: "Electronics", price: "$199.99", status: "Rejected" },
  { id: "PROD-005", name: "Solar Panel Kit", supplier: "Green Energy Systems", category: "Energy", price: "$349.99", status: "Pending" },
];

const SupplierProductsSection = () => {
  const { toast } = useToast();

  const handleProductAction = (productId: string, action: string) => {
    toast({
      title: action === "approve" ? "Product Approved" : "Product Rejected",
      description: `Product ${productId} has been ${action === "approve" ? "approved" : "rejected"}.`,
      duration: 3000,
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-gray-50 border-b">
        <CardTitle className="flex items-center gap-2">
          <Package2 className="h-6 w-6 text-initium-accent" />
          Supplier Product List
        </CardTitle>
        <CardDescription>
          Review and manage products submitted by suppliers
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Products Catalog</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {supplierProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.supplier}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <ProductStatusIndicator status={product.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {product.status === "Pending" && (
                        <>
                          <Button 
                            size="sm" 
                            onClick={() => handleProductAction(product.id, "approve")}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleProductAction(product.id, "reject")}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      {product.status !== "Pending" && (
                        <Button 
                          size="sm" 
                          variant="outline"
                        >
                          View Details
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierProductsSection;
