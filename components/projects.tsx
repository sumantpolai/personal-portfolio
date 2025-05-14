import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import chatimg from "../public/Block-the-user.png"
import tureimg from "../public/incredeble.png"
import agri from "../public/agrimarket.png"
import port from "../public/portfolio.png"
import ware from "../public/warehousingAdda.png"
import home from "../public/homesearch.png"

const projects = [
  {
    title: "Incredible Odisha",
    description:
      "Built a responsive website using React.js for the frontend and PostgreSQL for database management.",
    tech: ["React.js", "PostgreSQL", "Node.js", "Express.js"],
    Image: tureimg,
    github: "https://github.com/sumantpolai/incredible-odisha",
    demo: "https://incredible-odisha.vercel.app",
  },
  {
    title: "Chat Application",
    description:
      "Made a chat app where we can create profiles and chat with other users with intelligent chat recommendations.",
    tech: ["React.js", "Node.js", "Firebase", "Express.js"],
    Image: chatimg,
    github: "https://github.com/sumantpolai/React-Chat_App",
    demo: "https://billing-software-demo.vercel.app",
  },
  {
    title: "AgriMarket",
    description:
      "Made an AgriMarket website and designed an intuitive interface to streamline agricultural trading.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    Image: agri,
    github: "https://github.com/sumantpolai/AgriMarket-frontend",
    demo: "https://agri-market-frontend.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a portfolio showcasing skills and projects.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    Image: port,
    github: "https://github.com/sumantpolai/portfolio",
    demo: "https://portfolio-demo.vercel.app",
  },
  {
    title: "WareHousingAdda",
    description:
      "Developed a responsive website where users can add their warehouse and search for warehouses.",
    tech: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
    Image: ware,
    github: "https://github.com/sumantpolai/WarehousingAdda",
    demo: "https://warehousing-adda.vercel.app",
  },
  {
    title: "Homesearch",
    description:
      "Developed a responsive website where users can add their home and search for homes.",
    tech: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
    Image: home,
    github: "https://github.com/sumantpolai/homesearch",
    demo: "https://homesearch-two.vercel.app",
  },
]

const Button = ({ href, label, icon: Icon, variant }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full text-sm font-medium px-4 py-2 rounded-lg text-center transition ${
      variant === "primary"
        ? "bg-indigo-600 text-white hover:bg-indigo-700"
        : "border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
    }`}
  >
    <div className="flex items-center justify-center gap-2">
      <Icon className="w-4 h-4" />
      {label}
    </div>
  </a>
)

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -50,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  }

  return (
    <section id="projects" className="py-20 section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              variants={cardVariants}
              viewport={{ once: false }}
              className="animated-card rounded-xl p-4 transform-gpu hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 relative w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={project.Image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-8 h-8" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  href={project.github}
                  label="Code"
                  icon={Github}
                  variant="primary"
                />
                <Button
                  href={project.demo}
                  label="Demo"
                  icon={ExternalLink}
                  variant="secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}