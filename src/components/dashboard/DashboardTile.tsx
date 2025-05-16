
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardTileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
  onClick: () => void;
}

const DashboardTile = ({ 
  icon, 
  title, 
  description, 
  isActive = false,
  onClick 
}: DashboardTileProps) => {
  return (
    <Card 
      className={`h-full transition-all hover:shadow-md cursor-pointer ${isActive ? 'ring-2 ring-primary shadow-md' : ''}`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className={`rounded-full p-3 ${isActive ? 'bg-primary/10' : 'bg-gray-100'}`}>{icon}</div>
        </div>
        <CardTitle className="mt-4 text-base">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default DashboardTile;
