
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";
import { Link } from "react-router-dom";
import { Building, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is loan against mutual fund? Why is it better?",
    answer: "Loan Against Mutual Funds is a type of loan where you can borrow money by using your mutual funds investment as collateral. Since this is a secured loan, the interest rates are much lower than conventional loan options. It is one of the best ways to generate liquidity without redeeming your Mutual Fund portfolio. It also saves you from unexpected losses due to market downfall."
  },
  {
    question: "What is the credit limit and how is it calculated?",
    answer: "The credit limit is calculated by taking a percentage of the current market value of the mutual funds you wish to pledge. This percentage is 50% for equity MFs and 75% for debt MFs. To calculate credit limit, we will need your PAN, phone number linked to your mutual funds holdings. Checking your credit limit does not have any impact on your CIBIL score, however, it is a necessary step in order to determine your loan eligibility."
  },
  {
    question: "What is the tenure of the loan?",
    answer: "The tenure of the loan is up to 36 months. During this tenure, you can do part-prepayment or foreclosure of the loan without any charges."
  },
  {
    question: "How much EMI will be deducted monthly?",
    answer: "On a monthly basis, you pay an interest at the rate of 10.5% p.a. on the outstanding loan amount. Additionally, you can choose to repay the principal at any time during the loan tenure. For example, if you have an outstanding loan of 1L, your monthly payment would be (100000 x (10.5/12)/100) = 875"
  },
  {
    question: "Will there be any pre-payment charges or foreclosure charges?",
    answer: "There are NO pre-payment or foreclosure charges. You can close the loan at any point by paying the due amount."
  },
  {
    question: "What if the value of my mutual funds falls so that Loan-To-Mutual Fund value goes above 50%?",
    answer: "The margins will be checked on a daily basis and alert message will be sent to the registered mobile numbers/email id during the shortfall. In case of shortfall, the borrower can bring in additional securities to overcome shortfall or make a repayment to extent of shortfall. Customer is always expected to maintain a 50% Loan To Value till the loan maturity and at any point of time."
  },
  {
    question: "How much loan can I get?",
    answer: "You can avail a loan against mutual funds from ₹25,000 to ₹5,00,00,000."
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-splyt-50/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-splyt-50 text-splyt-700 text-sm font-medium mb-4">
            Common Questions
          </div>
          <AnimatedGradientText
            element="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Frequently Asked Questions
          </AnimatedGradientText>
          <p className="text-lg text-midnight-700">
            Find answers to the most common questions about Splytpay
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <GlassmorphicCard className="mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassmorphicCard>

          {/* Partner CTA Section */}
          <div className="text-center bg-gradient-to-r from-splyt-50 to-frost-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-3">Are you a business looking to offer better payment options?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join our growing network of partners and help your customers access affordable EMIs at the lowest interest rates.
            </p>
            <Button 
              size="lg"
              className="bg-gradient hover:opacity-90"
              asChild
            >
              <Link to="/partners">
                <Building className="mr-2 h-4 w-4" />
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
