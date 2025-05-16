
import React from "react";
import { CheckCircle2, FileText, XCircle } from "lucide-react";

interface ProductStatusIndicatorProps {
  status: string;
}

export const ProductStatusIndicator = ({ status }: ProductStatusIndicatorProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepted":
      case "Approved":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "Rejected":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {getStatusIcon(status)}
      <span>{status}</span>
    </div>
  );
};
