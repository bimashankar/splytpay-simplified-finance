
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

export const PartnerCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100000);
  const [tenure, setTenure] = useState(6);
  
  // Interest rates
  const splytRate = 10.5;
  const creditCardRate = 16;
  const personalLoanRate = 24;

  // Calculate EMI
  const calculateEMI = (principal: number, rate: number, time: number) => {
    const r = rate / 12 / 100;
    const t = time;
    const emi = principal * r * Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1);
    return Math.round(emi);
  };

  // Calculate subvention (the discount required to make it a no-cost EMI)
  const calculateSubvention = (principal: number, rate: number, time: number) => {
    const totalPayment = calculateEMI(principal, rate, time) * time;
    const subventionAmount = totalPayment - principal;
    const subventionPercentage = (subventionAmount / principal) * 100;
    
    return {
      amount: Math.round(subventionAmount),
      percentage: Math.round(subventionPercentage * 100) / 100
    };
  };

  // Calculate subventions for different loan types
  const splytSubvention = calculateSubvention(amount, splytRate, tenure);
  const creditCardSubvention = calculateSubvention(amount, creditCardRate, tenure);
  const personalLoanSubvention = calculateSubvention(amount, personalLoanRate, tenure);

  // Calculate savings compared to other options
  const savingsVsCreditCard = creditCardSubvention.amount - splytSubvention.amount;
  const savingsVsPersonalLoan = personalLoanSubvention.amount - splytSubvention.amount;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="partner-calculator" className="py-20 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots text-purple-100 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
            Calculate & Compare
          </div>
          <AnimatedGradientText
            element="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            See How Much You Can Save
          </AnimatedGradientText>
          <p className="text-lg text-midnight-700">
            Compare subvention costs with Splytpay vs credit cards and other loan providers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <GlassmorphicCard className="h-full">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label 
                      htmlFor="purchase-amount"
                      className="text-lg font-medium"
                    >
                      Purchase Amount: {formatCurrency(amount)}
                    </Label>
                  </div>
                  <Slider
                    id="purchase-amount"
                    min={25000}
                    max={500000}
                    step={5000}
                    value={[amount]}
                    onValueChange={(value) => setAmount(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹25,000</span>
                    <span>₹5,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label 
                      htmlFor="tenure"
                      className="text-lg font-medium"
                    >
                      Tenure: {tenure} months
                    </Label>
                  </div>
                  <Slider
                    id="tenure"
                    min={3}
                    max={36}
                    step={1}
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>3 months</span>
                    <span>36 months</span>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>

          <div className="order-1 lg:order-2">
            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-6">Subvention Comparison</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-purple-50">
                    <p className="text-sm text-purple-700 font-medium mb-1">Splytpay</p>
                    <p className="text-xs text-purple-600 mb-2">{splytRate}% p.a.</p>
                    <p className="text-xl font-bold text-purple-700">{formatCurrency(splytSubvention.amount)}</p>
                    <p className="text-xs text-purple-600">({splytSubvention.percentage}%)</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-700 font-medium mb-1">Credit Card</p>
                    <p className="text-xs text-gray-600 mb-2">{creditCardRate}% p.a.</p>
                    <p className="text-xl font-bold text-gray-700">{formatCurrency(creditCardSubvention.amount)}</p>
                    <p className="text-xs text-gray-600">({creditCardSubvention.percentage}%)</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-700 font-medium mb-1">Other Lenders</p>
                    <p className="text-xs text-gray-600 mb-2">{personalLoanRate}% p.a.</p>
                    <p className="text-xl font-bold text-gray-700">{formatCurrency(personalLoanSubvention.amount)}</p>
                    <p className="text-xs text-gray-600">({personalLoanSubvention.percentage}%)</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Original Purchase Amount</span>
                    <span className="font-medium">{formatCurrency(amount)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Splytpay Subvention Cost</span>
                    <span className="font-medium">{formatCurrency(splytSubvention.amount)}</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 mt-4">
                  <p className="text-sm font-medium text-purple-800 mb-3">Your Savings with Splytpay</p>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">vs Credit Card</span>
                    <span className="font-semibold text-purple-700">{formatCurrency(savingsVsCreditCard)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm">vs Other Lenders</span>
                    <span className="font-semibold text-purple-700">{formatCurrency(savingsVsPersonalLoan)}</span>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCalculator;
