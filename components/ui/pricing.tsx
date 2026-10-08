"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import NumberFlow from "@number-flow/react";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you.\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  return (
    <div className="container py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-navy font-display">
          {title}
        </h2>
        <p className="text-navy/70 text-lg whitespace-pre-line max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1], // TaxwiseIndia standard ease
            }}
            className={cn(
              "relative flex flex-col p-6 lg:p-8 rounded-3xl border transition-all duration-300",
              plan.isPopular
                ? "bg-mint-soft border-mint-line shadow-[0_5px_0_#C2EEDC]"
                : "bg-white border-line-2 shadow-sm hover:border-navy hover:shadow-md"
            )}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-navy mb-2 font-display">{plan.name}</h3>
              <p className="text-navy/70 text-sm h-10">{plan.description}</p>
            </div>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl lg:text-5xl font-bold text-navy tracking-tight font-display">
                <NumberFlow
                  value={Number(plan.price)}
                  format={{
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  transformTiming={{
                    duration: 500,
                    easing: "ease-out",
                  }}
                  willChange
                  className="font-variant-numeric: tabular-nums"
                />
              </span>
              <span className="text-navy/60 font-medium">/{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald" />
                  </div>
                  <span className="text-navy/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={cn(
                "btn w-full",
                plan.isPopular ? "btn-primary" : "btn-ghost"
              )}
            >
              {plan.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
