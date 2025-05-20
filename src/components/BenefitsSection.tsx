
import { motion } from "framer-motion";
import { Check, Users, Zap, Shield } from "lucide-react";

const BenefitItem = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Enhanced Collaboration",
      description: "Enable seamless teamwork with real-time sync across all devices, ensuring everyone stays on the same page.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Increased Productivity",
      description: "Eliminate the need for constant file sharing and version control issues with instant updates for all participants.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Enterprise Security",
      description: "Built with bank-level security protocols to ensure your collaborative content remains protected and private.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Reliable Infrastructure",
      description: "Our globally distributed architecture ensures low-latency performance and 99.99% uptime for your applications.",
      icon: <Check className="h-6 w-6" />,
    },
  ];

  return (
    <section className="container px-4 py-24 relative overflow-hidden">
      <div className="glass rounded-2xl p-8 md:p-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-normal mb-6">
                Why Choose <span className="text-gradient font-medium">HelloSync</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform provides the foundation you need to build exceptional real-time collaborative experiences.
              </p>
            </motion.div>
          </div>
          
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BenefitItem
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
