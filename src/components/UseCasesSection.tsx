
import { motion } from "framer-motion";
import { Book, Layout, Pencil } from "lucide-react";
import { CardSpotlight } from "./pricing/CardSpotlight";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UseCaseCard = ({ title, description, icon }: UseCaseCardProps) => {
  return (
    <CardSpotlight className="h-full">
      <div className="p-6 h-full flex flex-col">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </div>
    </CardSpotlight>
  );
};

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Edtech Tools",
      description: "Enable interactive learning experiences with real-time document collaboration and virtual whiteboarding for classrooms.",
      icon: <Book className="h-6 w-6" />,
    },
    {
      title: "Productivity Apps",
      description: "Build seamless team collaboration into your productivity tools with real-time document editing and commenting.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      title: "Design Tools",
      description: "Create collaborative design environments where teams can work together on visual projects in real-time.",
      icon: <Pencil className="h-6 w-6" />,
    },
  ];

  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
          Perfect Solutions for
          <br />
          <span className="text-gradient font-medium">Multiple Use Cases</span>
        </h2>
        <p className="text-lg text-gray-400 text-left">
          HelloSync's infrastructure powers a wide range of real-time collaboration experiences across different applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <UseCaseCard
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
