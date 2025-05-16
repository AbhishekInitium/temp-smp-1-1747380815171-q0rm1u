
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import InitiumLogo from "@/components/InitiumLogo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to an API to send a reset email
    setIsSubmitted(true);
    toast({
      title: "Reset Link Sent",
      description: `If an account exists with ${email}, we've sent password reset instructions. This is a demo version.`,
      duration: 5000,
    });
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
        <div className="w-full max-w-md mx-auto">
          <Card className="login-panel">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-initium-primary">Reset Your Password</CardTitle>
              <CardDescription>
                Enter your email address and we'll send you instructions to reset your password
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your-email@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary mt-2">
                    Send Reset Instructions
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-initium-accent" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-initium-primary">Check Your Email</h3>
                  
                  <p className="text-sm text-muted-foreground">
                    We've sent password reset instructions to:<br />
                    <span className="font-medium text-initium-primary">{email}</span>
                  </p>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    If you don't see the email, check your spam folder or 
                    <button 
                      onClick={handleSubmit}
                      className="text-initium-accent hover:text-initium-secondary hover:underline ml-1"
                    >
                      click here to resend
                    </button>
                  </p>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-center border-t pt-6">
              <Link to="/" className="flex items-center text-sm link-text">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </CardFooter>
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

export default ForgotPassword;
