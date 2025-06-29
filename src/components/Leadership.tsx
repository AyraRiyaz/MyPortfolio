import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Users,
  Calendar,
  Heart,
  BookOpen,
  Camera,
  Trophy,
  Star,
} from "lucide-react";

const Leadership = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const leadershipRoles = [
    {
      title: "IEEE Python Hub Lead",
      organization: "IEEE Student Branch",
      description:
        "Organized PyLaunch Bootcamp for 50+ students, leading technical workshops and programming initiatives.",
      icon: BookOpen,
      gradient: "from-blue-500 to-purple-600",
      achievements: [
        "50+ students trained",
        "Technical workshop leadership",
        "Programming bootcamp coordination",
      ],
    },
    {
      title: "Social Media Manager",
      organization: "TACS (Technical Association)",
      description:
        "Managed content strategy across 3+ social media platforms, increasing engagement and community outreach.",
      icon: Camera,
      gradient: "from-pink-500 to-rose-600",
      achievements: [
        "Multi-platform management",
        "Content strategy",
        "Community engagement",
      ],
    },
    {
      title: "Working Secretary",
      organization: "AIMA (Blood donation wing)",
      description:
        "Coordinated blood donation camps with 3 hospitals, organizing life-saving community health initiatives.",
      icon: Heart,
      gradient: "from-red-500 to-pink-600",
      achievements: [
        " Hospital partnerships",
        "Blood donation drives",
        "Community health initiatives",
      ],
    },
    {
      title: "Documentation Lead",
      organization: "NSS (National Service Scheme)",
      description:
        "Oversaw comprehensive documentation for 10+ outreach events, ensuring proper record-keeping and reporting.",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      achievements: [
        "10+ events documented",
        "Process standardization",
        "Team coordination",
      ],
    },
  ];

  const volunteerActivities = [
    { name: "Xtrinia", type: "Technical Event", role: "Volunteer Coordinator" },
    { name: "Milen", type: "Technical Fest", role: "Event Management" },
    {
      name: "TACS Day",
      type: "Association Event",
      role: "Organizing Committee",
    },
    { name: "Sarga", type: " Tech Fest", role: "Documentation Team" },
    { name: "Sports Events", type: "Athletic Events", role: "Event Support" },
    {
      name: "Arts Events",
      type: "Creative Programs",
      role: "Program Assistant",
    },
  ];

  const certifications = [
    {
      title: "Google Cybersecurity Specialization",
      provider: "Google",
      description:
        "Comprehensive 8-course program covering cybersecurity fundamentals and advanced practices",
      icon: "🛡️",
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      provider: "Techmaghi & IIT Delhi",
      description:
        "Advanced training in cybersecurity principles and ethical hacking methodologies",
      icon: "🔒",
    },
    {
      title: "Generative AI with Bing Copilot",
      provider: "Microsoft",
      description:
        "Specialized training in AI-powered development tools and generative AI applications",
      icon: "🤖",
    },
    {
      title: "Odoo Workshop",
      provider: "Prosevo",
      description:
        "Enterprise resource planning and business application development training",
      icon: "💼",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-20 bg-theme-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            Leadership & <span className="text-primary-500">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
            Driving positive change through leadership roles, community service,
            and continuous learning
          </p>
        </motion.div>

        {/* Leadership Roles */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-theme-text mb-8 flex items-center"
          >
            <Trophy className="text-primary-500 mr-3" size={28} />
            Leadership Positions
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="glass border border-theme-border rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
                }}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${role.gradient} mb-4 rounded`}
                ></div>

                <div className="flex items-start mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${role.gradient} mr-4`}
                  >
                    <role.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-theme-text mb-1">
                      {role.title}
                    </h4>
                    <p className="text-primary-400 text-sm font-semibold">
                      {role.organization}
                    </p>
                  </div>
                </div>

                <p className="text-theme-text-secondary mb-4 leading-relaxed">
                  {role.description}
                </p>

                <div>
                  <h5 className="text-sm font-semibold text-primary-400 mb-2">
                    Key Achievements:
                  </h5>
                  <div className="space-y-1">
                    {role.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-center text-sm text-theme-text-secondary"
                      >
                        <Star size={12} className="text-primary-500 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Activities */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-bold text-theme-text mb-8 flex items-center"
          >
            <Heart className="text-primary-500 mr-3" size={28} />
            Volunteer Activities
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass border border-theme-border rounded-lg p-4 hover:border-primary-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-theme-text font-semibold mb-1">
                  {activity.name}
                </h4>
                <p className="text-primary-400 text-sm mb-2">{activity.type}</p>
                <p className="text-theme-text-secondary text-xs">
                  {activity.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl font-bold text-theme-text mb-8 flex items-center"
          >
            <Award className="text-primary-500 mr-3" size={28} />
            Certifications & Training
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="glass border border-theme-border rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)",
                }}
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4 mt-1">{cert.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-theme-text mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-primary-400 text-sm font-semibold mb-2">
                      {cert.provider}
                    </p>
                    <p className="text-theme-text-secondary text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-xl p-8 border border-primary-500/20"
        >
          <h3 className="text-2xl font-bold text-theme-text mb-4">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                8.63
              </div>
              <p className="text-theme-text-secondary">
                CGPA - Academic Excellence
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                2025
              </div>
              <p className="text-theme-text-secondary">
                Paper Published - ICCSCE
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">🏆</div>
              <p className="text-theme-text-secondary">Scholarship Winner</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
