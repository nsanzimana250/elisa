import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import elisaAbout from "@/assets/elisa-about.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Profile Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
              <img
                src={elisaAbout}
                alt="Elisa Twizerimana"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Committed to
              <br />
              Financial Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a dedicated accounting specialist with solid experience in
                accounts receivable, payroll processing, budgeting, tax
                preparation, and EBM management. My expertise spans across
                financial operations and business administration.
              </p>
              <p>
                Skilled in Microsoft Office Suite (Excel, Word, PowerPoint),
                Sage Line 50 & 100, and EBM operations. I bring accuracy,
                reliability, and a commitment to excellence in every financial
                and operational role I undertake.
              </p>
              <p>
                Beyond technical skills, I am passionate about mentoring others
                and sharing knowledge, helping teams and individuals develop
                their financial management capabilities.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { number: "3+", label: "Years" },
                { number: "100%", label: "Commitment" },
                { number: "3", label: "Languages" },
                { number: "∞", label: "Dedication" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center transition-all hover:scale-105"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
