
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import InitiumLogo from "@/components/InitiumLogo";
import { 
  Package2, ClipboardList, TruckIcon, Receipt, BarChart3, User, LogOut, Bell, Settings 
} from "lucide-react";

const SupplierDashboard = () => {
  const supplierName = "Acme Supplies Ltd."; // This would come from auth in a real app
  
  const dashboardTiles = [
    {
      title: "My Products",
      description: "Manage your product catalog",
      icon: <Package2 className="h-12 w-12 text-initium-primary opacity-80" />,
      link: "/products"
    },
    {
      title: "Requirement List",
      description: "View active procurement requirements",
      icon: <ClipboardList className="h-12 w-12 text-initium-primary opacity-80" />,
      link: "/requirements"
    },
    {
      title: "Order Fulfillment",
      description: "Track and manage orders",
      icon: <TruckIcon className="h-12 w-12 text-initium-primary opacity-80" />,
      link: "/orders"
    },
    {
      title: "Invoicing & Payment",
      description: "Manage invoices and payments",
      icon: <Receipt className="h-12 w-12 text-initium-primary opacity-80" />,
      link: "/invoicing"
    },
    {
      title: "Supplier Performance",
      description: "View your performance metrics",
      icon: <BarChart3 className="h-12 w-12 text-initium-primary opacity-80" />,
      link: "/performance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-border py-4 px-6 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <InitiumLogo className="h-8 w-auto" />
            <span className="text-xl font-semibold text-initium-primary hidden sm:inline-block">
              Supplier Management System
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <User className="h-5 w-5" />
              </Button>
              <span className="text-sm font-medium hidden md:inline-block">{supplierName}</span>
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-4 md:p-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {supplierName}</h1>
            <p className="text-gray-600">
              Manage your supplier activities and track your performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardTiles.map((tile, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <Link to={tile.link}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{tile.title}</CardTitle>
                    <CardDescription>{tile.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex justify-center py-4">
                      {tile.icon}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
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

export default SupplierDashboard;
