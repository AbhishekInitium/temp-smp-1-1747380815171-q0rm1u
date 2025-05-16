import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, User, Lock, ChevronRight } from "lucide-react";
import InitiumLogo from "@/components/InitiumLogo";

const Index = () => {
  const [activeTab, setActiveTab] = useState("supplier");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    
    // This is a demo version, so we'll just simulate a successful login
    toast({
      title: "Login Successful",
      description: `Welcome back! You are now logged in as a ${userType}.`,
      duration: 3000,
    });
    
    // Redirect based on user type
    if (userType === "Supplier") {
      navigate("/dashboard");
    } else if (userType === "Admin") {
      navigate("/admin-dashboard");
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
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Welcome content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-initium-primary">
              Welcome to Initium Digital
            </h1>
            <p className="text-lg text-muted-foreground">
              Our supplier portal streamlines collaboration and enhances operational efficiency
              between Initium Digital and our valued suppliers.
            </p>
            <div className="hidden md:block space-y-4">
              <Feature 
                icon={<Building2 className="h-5 w-5 text-initium-accent" />} 
                title="Centralized Management"
                description="Manage all supplier relationships, contracts, and communications in one place." 
              />
              <Feature 
                icon={<User className="h-5 w-5 text-initium-accent" />} 
                title="Self-Service Portal"
                description="Update company information, manage users, and track orders independently." 
              />
              <Feature 
                icon={<Lock className="h-5 w-5 text-initium-accent" />} 
                title="Secure Communication"
                description="Exchange sensitive documents and information through encrypted channels." 
              />
            </div>
          </div>

          {/* Right side - Login tabs */}
          <div className="login-panel">
            <Tabs defaultValue="supplier" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="supplier">Supplier Login</TabsTrigger>
                <TabsTrigger value="admin">Admin Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="supplier" className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-semibold text-initium-primary">Supplier Access</h2>
                  <p className="text-muted-foreground text-sm">
                    Login to manage your supplier information and orders
                  </p>
                </div>
                
                <form onSubmit={(e) => handleLogin(e, "Supplier")}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="supplier-email">Email</Label>
                      <Input 
                        id="supplier-email"
                        type="email" 
                        placeholder="your-email@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="supplier-password">Password</Label>
                        <Link to="/forgot-password" className="text-xs link-text">
                          Forgot Password?
                        </Link>
                      </div>
                      <Input 
                        id="supplier-password"
                        type="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Login to Supplier Portal
                    </Button>
                    
                    <div className="text-center pt-2">
                      <p className="text-sm text-muted-foreground">
                        New Supplier?{" "}
                        <Link to="/register" className="link-text font-medium">
                          Register here
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="admin" className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-semibold text-initium-primary">Admin Access</h2>
                  <p className="text-muted-foreground text-sm">
                    Restricted access for Initium Digital administrators
                  </p>
                </div>
                
                <form onSubmit={(e) => handleLogin(e, "Admin")}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input 
                        id="admin-email"
                        type="email" 
                        placeholder="admin@initiumdigital.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input 
                        id="admin-password"
                        type="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Login as Administrator
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
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

// Feature component for the welcome section
const Feature = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="mt-1 bg-white rounded-full p-2 shadow-sm">{icon}</div>
    <div>
      <h3 className="font-medium text-initium-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Index;
