import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, FileText, Receipt, TrendingUp, Users, PiggyBank, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounts Receivable Management",
    description: "Efficient tracking and management of incoming payments, ensuring timely collections and healthy cash flow for your business.",
  },
  {
    icon: FileText,
    title: "Payroll Processing",
    description: "Comprehensive payroll services including salary calculations, deductions, and compliance with local tax regulations.",
  },
  {
    icon: Receipt,
    title: "Tax Preparation & Filing",
    description: "Expert tax preparation services ensuring compliance and maximizing deductions while minimizing tax liabilities.",
  },
  {
    icon: TrendingUp,
    title: "Financial Reporting",
    description: "Detailed financial statements and reports that provide clear insights into your business performance and health.",
  },
  {
    icon: PiggyBank,
    title: "Budgeting & Forecasting",
    description: "Strategic budget planning and financial forecasting to help you make informed business decisions.",
  },
  {
    icon: Users,
    title: "EBM Management",
    description: "Complete Electronic Billing Machine management for seamless invoicing and tax compliance.",
  },
  {
    icon: GraduationCap,
    title: "Accounting & BME Training",
    description: "Professional training sessions in Accounting, Finance, and Business Management & Economics (BME) for students and professionals.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative px-6 py-32 md:px-12 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            What I Offer
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Professional Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in financial management with tailored solutions for your business needs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-xl group"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
