import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, TrendingUp, Users } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Financial Training Excellence",
    description: "Delivered high-quality financial training that empowered learners with practical accounting skills",
  },
  {
    icon: Users,
    title: "Student Mentorship",
    description: "Successfully supported learners in mastering accounting systems and financial tools",
  },
  {
    icon: Target,
    title: "EBM Management",
    description: "Managed Electronic Billing Machine tasks with precision and full compliance",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Helped grow Fit & Noble Collections customer reach through excellent service",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative px-6 py-32 md:px-12">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Impact
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Achievements & Impact
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Consistently praised for precision, dedication, and a solution-driven mindset.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group rounded-2xl p-6 text-center transition-all hover:scale-105"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <achievement.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
