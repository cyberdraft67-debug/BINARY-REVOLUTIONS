import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const projects = [
  {
    name: 'MOH',
    description: 'Ministry of Health - Mobile Application for Saudi Arabia',
    tags: ['Mobile App', 'iOS', 'Android'],
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/MOH.jpg',
    gradient: 'linear-gradient(135deg, #0c1e3d 0%, #1d4ed8 100%)',
  },
  {
    name: 'Skoolify',
    description: 'Mobile Application - iOS and Android App Development',
    tags: ['Mobile App', 'iOS', 'Android'],
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/skoolify.jpg',
    gradient: 'linear-gradient(135deg, #1e1145 0%, #7c3aed 100%)',
  },
  {
    name: 'SPPlucity',
    description: 'Rental Supply Chain & Inventory Management Simplified',
    tags: ['Web', 'Enterprise'],
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/SPPlucity.jpg',
    gradient: 'linear-gradient(135deg, #042f2e 0%, #0d9488 100%)',
  },
  {
    name: 'Saztix',
    description: 'Web platform and mobile application',
    tags: ['Web', 'Mobile App'],
    gradient: 'linear-gradient(135deg, #0c1e3d 0%, #1d4ed8 100%)',
  },
  {
    name: 'Connexion',
    description: 'Web development and digital solutions',
    tags: ['Web', 'Development'],
    gradient: 'linear-gradient(135deg, #042f2e 0%, #0d9488 100%)',
  },
  {
    name: 'ICMA Pakistan',
    description: 'Mobile app for ICMA Pakistan',
    tags: ['Mobile App', 'iOS', 'Android'],
    gradient: 'linear-gradient(135deg, #1e1145 0%, #7c3aed 100%)',
  },
  {
    name: 'CareerVision',
    description: 'Career guidance mobile application',
    tags: ['Mobile App'],
    gradient: 'linear-gradient(135deg, #2a0a29 0%, #a21caf 100%)',
  },
  {
    name: 'Hajj App',
    description: 'Mobile application for Hajj guidance',
    tags: ['Mobile App', 'iOS'],
    gradient: 'linear-gradient(135deg, #052e1c 0%, #059669 100%)',
  },
  {
    name: 'Find Mosque',
    description: 'Mosque finder mobile application',
    tags: ['Mobile App'],
    gradient: 'linear-gradient(135deg, #241505 0%, #b45309 100%)',
  },
  {
    name: 'Red Dot',
    description: 'Mobile application development',
    tags: ['Mobile App'],
    gradient: 'linear-gradient(135deg, #240a0a 0%, #b91c1c 100%)',
  },
  {
    name: 'Skycom',
    description: 'Local Touch Global Reach - web platform',
    tags: ['Web', 'Branding'],
    gradient: 'linear-gradient(135deg, #052a30 0%, #0891b2 100%)',
  },
  {
    name: 'Premiere',
    description: 'Enterprise web development',
    tags: ['Web', 'Enterprise'],
    gradient: 'linear-gradient(135deg, #111827 0%, #475569 100%)',
  },
]

const filters = ['All', 'Android', 'Branding', 'Design', 'Development', 'iOS', 'Mobile App']

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = project.image && !imageFailed

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-[#1b8ef5]/40 hover:shadow-[0_20px_50px_-12px_rgba(27,142,245,0.35)]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        {showImage ? (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="absolute inset-0 flex scale-105 items-center justify-center transition-transform duration-500 group-hover:scale-110"
            style={{ background: project.gradient }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
            <span className="relative px-6 text-center text-2xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              {project.name}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 flex translate-y-2 flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-[0_0_20px_rgba(27,142,245,0.6)]">
            View Project
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L11.29 6.15a.75.75 0 111.02-1.1l4.5 4.25a.75.75 0 010 1.1l-4.5 4.25a.75.75 0 11-1.02-1.1l3.098-3.1H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#1b8ef5]/30 bg-[#1b8ef5]/10 px-3 py-1 text-xs font-medium text-[#93c5fd]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Our Projects"
        subtitle="A selection of what we've shipped for clients across web, mobile, and enterprise."
      />

      <section className="relative bg-[#07080f] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#1b8ef5] shadow-[0_0_20px_rgba(27,142,245,0.5)]"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </AnimatePresence>
          </div>

          {visibleProjects.length === 0 && (
            <p className="py-16 text-center text-gray-500">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
