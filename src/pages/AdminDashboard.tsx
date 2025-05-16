
import React, { useState } from "react";
import { BarChart3, FileText, Package2, Receipt, ShoppingCart, Users } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";
import DashboardTile from "@/components/dashboard/DashboardTile";
import VendorOnboardingSection from "@/components/dashboard/VendorOnboardingSection";
import SupplierProductsSection from "@/components/dashboard/SupplierProductsSection";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("vendor-onboarding");

  const renderActiveTab = () => {
    if (activeTab === "vendor-onboarding") {
      return <VendorOnboardingSection />;
    } else if (activeTab === "supplier-products") {
      return <SupplierProductsSection />;
    } else {
      return <div className="p-6 text-center text-muted-foreground">Select a tile to view more details</div>;
    }
  };

  return (
    <AdminLayout title="Admin Dashboard">
      {/* Active Tab Content */}
      {renderActiveTab()}

      {/* Dashboard Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <DashboardTile 
          icon={<Users className="h-8 w-8 text-blue-500" />}
          title="Vendor Onboarding"
          description="Manage supplier registrations"
          isActive={activeTab === "vendor-onboarding"}
          onClick={() => setActiveTab("vendor-onboarding")}
        />
        
        <DashboardTile 
          icon={<Package2 className="h-8 w-8 text-purple-500" />}
          title="Supplier Product List"
          description="View and manage supplier products"
          isActive={activeTab === "supplier-products"}
          onClick={() => setActiveTab("supplier-products")}
        />
        
        <DashboardTile 
          icon={<ShoppingCart className="h-8 w-8 text-green-500" />}
          title="Sourcing"
          description="Manage sourcing activities"
          isActive={activeTab === "sourcing"}
          onClick={() => setActiveTab("sourcing")}
        />
        
        <DashboardTile 
          icon={<FileText className="h-8 w-8 text-yellow-500" />}
          title="Purchase Order Management"
          description="Track purchase orders"
          isActive={activeTab === "purchase-orders"}
          onClick={() => setActiveTab("purchase-orders")}
        />
        
        <DashboardTile 
          icon={<Receipt className="h-8 w-8 text-pink-500" />}
          title="Invoicing & Payment"
          description="Process invoices and payments"
          isActive={activeTab === "invoicing"}
          onClick={() => setActiveTab("invoicing")}
        />
        
        <DashboardTile 
          icon={<BarChart3 className="h-8 w-8 text-orange-500" />}
          title="Performance Management"
          description="Monitor supplier performance"
          isActive={activeTab === "performance"}
          onClick={() => setActiveTab("performance")}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
