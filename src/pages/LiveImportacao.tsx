import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, DollarSign, Package, ShieldCheck } from "lucide-react";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";
const LiveImportacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Header com Logo */}
      

      {/* Hero Section */}
      
    </div>;
};
export default LiveImportacao;