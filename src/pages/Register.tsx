import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileCheck, CheckCircle2, XCircle, Clock } from "lucide-react";
import InitiumLogo from "@/components/InitiumLogo";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [kycUploaded, setKycUploaded] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState("pending");
  
  const [formData, setFormData] = useState({
    // General Information
    title: "",
    vendorName: "",
    companyWebsite: "",
    communicationLanguage: "",
    businessAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    contactNumber: "",
    
    // Registration Information
    companyRegistrationNumber: "",
    taxIdentificationNumber: "",
    establishmentYear: "",
    
    // Products and Services
    productsOffered: "",
    
    // KYC Documents
    aadharCard: null,
    panCard: null,
    gstCertificate: null,
    companyRegistrationDocs: null,
    bankDetails: null,
    businessAddressProof: null,
    
    // Account Information
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure both password fields match.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would connect to an API to register the user
    toast({
      title: "Registration Submitted",
      description: "Your registration request has been submitted for review.",
      duration: 5000,
    });
    
    setFormSubmitted(true);
    setActiveTab("kyc");
  };

  const handleKycSubmit = (e) => {
    e.preventDefault();
    
    // Validate that all required documents are uploaded
    const kycFields = ['aadharCard', 'panCard', 'gstCertificate', 'companyRegistrationDocs', 'bankDetails', 'businessAddressProof'];
    const missingDocuments = kycFields.filter(field => !formData[field]);
    
    if (missingDocuments.length > 0) {
      toast({
        title: "Missing Documents",
        description: "Please upload all required KYC documents.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Documents Uploaded",
      description: "Your KYC documents have been uploaded successfully and are pending review.",
      duration: 5000,
    });
    
    setKycUploaded(true);
    setActiveTab("status");
  };

  const nextTab = () => {
    if (activeTab === "general") setActiveTab("registration");
    else if (activeTab === "registration") setActiveTab("products");
    else if (activeTab === "products") setActiveTab("kyc");
    else if (activeTab === "kyc") setActiveTab("status");
  };

  const prevTab = () => {
    if (activeTab === "status") setActiveTab("kyc");
    else if (activeTab === "kyc") setActiveTab("products");
    else if (activeTab === "products") setActiveTab("registration");
    else if (activeTab === "registration") setActiveTab("general");
  };

  const getStatusIcon = (status: string = "notStarted") => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "notStarted":
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
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
              Supplier Management System
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto">
          <Card className="registration-panel">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-initium-primary">Supplier Registration</CardTitle>
              <CardDescription>
                Register your company as a supplier for Initium Digital
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-5 mb-8">
                  <TabsTrigger value="general">General Info</TabsTrigger>
                  <TabsTrigger value="registration">Registration Info</TabsTrigger>
                  <TabsTrigger value="products">Products & Services</TabsTrigger>
                  <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
                  <TabsTrigger value="status">Approval Status</TabsTrigger>
                </TabsList>
                
                {/* General Information */}
                <TabsContent value="general">
                  <form id="generalForm" onSubmit={(e) => { e.preventDefault(); nextTab(); }} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Select 
                          name="title" 
                          value={formData.title} 
                          onValueChange={(value) => handleSelectChange(value, "title")}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Title" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mr">Mr.</SelectItem>
                            <SelectItem value="mrs">Mrs.</SelectItem>
                            <SelectItem value="ms">Ms.</SelectItem>
                            <SelectItem value="dr">Dr.</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="vendorName">Vendor Name (Legal Entity)</Label>
                        <Input
                          id="vendorName"
                          name="vendorName"
                          value={formData.vendorName}
                          onChange={handleInputChange}
                          placeholder="Legal Company Name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyWebsite">Company Website</Label>
                        <Input
                          id="companyWebsite"
                          name="companyWebsite"
                          type="url"
                          value={formData.companyWebsite}
                          onChange={handleInputChange}
                          placeholder="https://www.example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="communicationLanguage">Communication Language</Label>
                        <Select 
                          name="communicationLanguage" 
                          value={formData.communicationLanguage} 
                          onValueChange={(value) => handleSelectChange(value, "communicationLanguage")}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="hindi">Hindi</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="telugu">Telugu</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessAddress">Business Address</Label>
                      <Textarea
                        id="businessAddress"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        placeholder="Enter your complete business address"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State/Province"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="Postal/Zip Code"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select 
                          name="country" 
                          value={formData.country} 
                          onValueChange={(value) => handleSelectChange(value, "country")}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="company@example.com"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number</Label>
                        <Input
                          id="contactNumber"
                          name="contactNumber"
                          type="tel"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          placeholder="+91 9000000000"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Link to="/">
                        <Button type="button" variant="outline">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Login
                        </Button>
                      </Link>
                      <Button type="submit">Next: Registration Info</Button>
                    </div>
                  </form>
                </TabsContent>
                
                {/* Registration Information */}
                <TabsContent value="registration">
                  <form id="registrationForm" onSubmit={(e) => { e.preventDefault(); nextTab(); }} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyRegistrationNumber">Company Registration Number</Label>
                        <Input
                          id="companyRegistrationNumber"
                          name="companyRegistrationNumber"
                          value={formData.companyRegistrationNumber}
                          onChange={handleInputChange}
                          placeholder="CIN/LLPIN/Registration Number"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="taxIdentificationNumber">Tax Identification Number</Label>
                        <Input
                          id="taxIdentificationNumber"
                          name="taxIdentificationNumber"
                          value={formData.taxIdentificationNumber}
                          onChange={handleInputChange}
                          placeholder="GST/PAN/TAN Number"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="establishmentYear">Establishment Year</Label>
                      <Input
                        id="establishmentYear"
                        name="establishmentYear"
                        type="number"
                        min="1900"
                        max={new Date().getFullYear()}
                        value={formData.establishmentYear}
                        onChange={handleInputChange}
                        placeholder="Year of establishment"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Create Password</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevTab}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                      <Button type="submit">Next: Products & Services</Button>
                    </div>
                  </form>
                </TabsContent>
                
                {/* Products and Services */}
                <TabsContent value="products">
                  <form id="productsForm" onSubmit={(e) => { e.preventDefault(); nextTab(); }} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="productsOffered">List of Products Offered</Label>
                      <Textarea
                        id="productsOffered"
                        name="productsOffered"
                        value={formData.productsOffered}
                        onChange={handleInputChange}
                        placeholder="Please list all products and services your company offers"
                        className="min-h-[200px]"
                        required
                      />
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevTab}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                      <Button type="submit">Next: KYC Documents</Button>
                    </div>
                  </form>
                </TabsContent>
                
                {/* KYC Documents */}
                <TabsContent value="kyc">
                  <form id="kycForm" onSubmit={handleKycSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <Label>Required KYC Documents</Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please upload all the required documents for verification
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-4 space-y-2">
                        <Label htmlFor="aadharCard" className="flex items-center">
                          <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                          Aadhar Card
                        </Label>
                        <div className="flex items-center justify-between gap-2">
                          <Input
                            id="aadharCard"
                            name="aadharCard"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                          {formData.aadharCard && (
                            <span className="text-xs text-green-600">File selected</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-2">
                        <Label htmlFor="panCard" className="flex items-center">
                          <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                          PAN Card
                        </Label>
                        <div className="flex items-center justify-between gap-2">
                          <Input
                            id="panCard"
                            name="panCard"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                          {formData.panCard && (
                            <span className="text-xs text-green-600">File selected</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-2">
                        <Label htmlFor="gstCertificate" className="flex items-center">
                          <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                          GST Registration Certificate
                        </Label>
                        <div className="flex items-center justify-between gap-2">
                          <Input
                            id="gstCertificate"
                            name="gstCertificate"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                          {formData.gstCertificate && (
                            <span className="text-xs text-green-600">File selected</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-2">
                        <Label htmlFor="companyRegistrationDocs" className="flex items-center">
                          <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                          Company Registration Documents
                        </Label>
                        <div className="flex items-center justify-between gap-2">
                          <Input
                            id="companyRegistrationDocs"
                            name="companyRegistrationDocs"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                          {formData.companyRegistrationDocs && (
                            <span className="text-xs text-green-600">File selected</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-2">
                        <Label htmlFor="bankDetails" className="flex items-center">
                          <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                          Bank Details (Cancelled Cheque)
                        </Label>
                        <div className="flex items-center justify-between gap-2">
                          <Input
                            id="bankDetails"
                            name="bankDetails"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                          {formData.bankDetails && (
                            <span className="text-xs text-green-600">File selected</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-2">
                        <Label htmlFor="businessAddressProof" className="flex items-center">
                          <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                          Proof of Business Address
                        </Label>
                        <div className="flex items-center justify-between gap-2">
                          <Input
                            id="businessAddressProof"
                            name="businessAddressProof"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                          {formData.businessAddressProof && (
                            <span className="text-xs text-green-600">File selected</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevTab}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                      <Button type="submit">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Documents
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                {/* Approval Status */}
                <TabsContent value="status">
                  <div className="space-y-8">
                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Vendor Approval Status</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {formSubmitted ? 
                                getStatusIcon("complete") : 
                                getStatusIcon("pending")}
                            </div>
                            <span>Registration Form Submitted</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {formSubmitted ? "Completed" : "Pending"}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {kycUploaded ? 
                                getStatusIcon("complete") : 
                                getStatusIcon("pending")}
                            </div>
                            <span>KYC Documents Uploaded</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {kycUploaded ? "Completed" : "Pending"}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {kycUploaded ? 
                                getStatusIcon("pending") : 
                                getStatusIcon("notStarted")}
                            </div>
                            <span>Submitted for Approval</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {kycUploaded ? "Under Review" : "Not Started"}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                          <div className="flex items-center">
                            <div className="mr-3">{getStatusIcon("notStarted")}</div>
                            <span>Approved/Rejected</span>
                          </div>
                          <div className="text-sm text-muted-foreground">Pending</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevTab}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                      <Link to="/">
                        <Button>Back to Login</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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

export default Register;
