import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "T.E FAM",
    role: "Accounting Trainer & Financial Support",
    period: "2021 – Present",
    achievements: [
      "Delivered high-quality accounting training programs",
      "Mentored students in mastering financial tools and systems",
      "Supported financial tasks and class program coordination",
      "Enhanced workflow efficiency through systematic approaches",
    ],
  },
  {
    company: "ACR",
    role: "Microsoft Office Trainer & Administrative Support",
    period: "2022 – 2024",
    achievements: [
      "Trained users on Microsoft Office applications",
      "Assisted in accounting and administrative duties",
      "Improved operational processes and documentation",
      "Delivered reliable administrative support",
    ],
  },
  {
    company: "Fit & Noble Collections",
    role: "Business Operations & Customer Service",
    period: "Present",
    achievements: [
      "Supporting business operations and customer service excellence",
      "Managing orders for quality fashion products",
      "Helping clients through WhatsApp communication channel",
      "Improved customer engagement and satisfaction",
      "Promoting quality clothing and fashion items",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Career Journey
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 transition-all hover:scale-[1.01]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-primary">{exp.role}</p>
                    </div>
                  </div>
                  <ul className="ml-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-right">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
