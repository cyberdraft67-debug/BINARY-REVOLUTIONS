import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const projects = [
  {
    name: 'MOH',
    description: 'Ministry of Health — Mobile App for Saudi Arabia',
    tags: ['Mobile App', 'iOS', 'Android'],
    url: 'https://www.moh.gov.sa',
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/MOH.jpg',
    fallback: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
  },
  {
    name: 'Skoolify',
    description: 'School management mobile app connecting parents and schools',
    tags: ['Mobile App', 'iOS', 'Android'],
    url: 'https://www.skoolify.app',
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/skoolify.jpg',
    fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
  },
  {
    name: 'SupplyCity',
    description: 'Dental Supply Chain & Inventory Management Platform',
    tags: ['Web', 'Enterprise'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/SPPlucity.jpg',
    fallback: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
  },
  {
    name: 'Saztex',
    description: 'Fabric and textile eCommerce web platform',
    tags: ['Web', 'eCommerce'],
    url: 'https://saztex.net',
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/saztex.jpg',
    fallback: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600',
  },
  {
    name: 'Connexion',
    description: 'Web development and digital solutions',
    tags: ['Web', 'Development'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/connexion.jpg',
    fallback: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
  },
  {
    name: 'ICMA Pakistan',
    description: 'Mobile app for Institute of Cost & Management Accountants',
    tags: ['Mobile App', 'iOS', 'Android'],
    url: 'https://www.icmainternational.com',
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/icma.jpg',
    fallback: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
  },
  {
    name: 'CareerVision',
    description: 'Career guidance and job finder mobile application',
    tags: ['Mobile App'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/careervision.jpg',
    fallback: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
  },
  {
    name: 'Hajj App',
    description: 'Mobile application for Hajj guidance and navigation',
    tags: ['Mobile App', 'iOS'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/hajj.jpg',
    fallback: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600',
  },
  {
    name: 'Find Mosque',
    description: 'Mosque finder mobile application',
    tags: ['Mobile App'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/findmosque.jpg',
    fallback: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=600',
  },
  {
    name: 'Red Dot',
    description: 'Media training and documentation platform',
    tags: ['Web', 'Mobile App'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/reddot.jpg',
    fallback: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600',
  },
  {
    name: 'Skycom',
    description: 'Local Touch Global Reach — international web platform',
    tags: ['Web', 'Branding'],
    url: 'http://www.skycomex.com',
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/skycom.jpg',
    fallback: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
  },
  {
    name: 'Premiere',
    description: 'Enterprise hotel and conference management solution',
    tags: ['Web', 'Enterprise'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/premiere.jpg',
    fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
  },
  {
    name: 'Economy Forum',
    description: 'Web platform for economic forum and events',
    tags: ['Web'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/economyforum.jpg',
    fallback: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600',
  },
  {
    name: 'ERP Solution',
    description: 'Web based ERP solution for enterprise businesses',
    tags: ['Web', 'Enterprise'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/erp.jpg',
    fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  },
  {
    name: 'JustGPS Tracking',
    description: 'Fleet management and GPS tracking system',
    tags: ['Web', 'Enterprise'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/justgps.jpg',
    fallback: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=600',
  },
  {
    name: 'Debuzy',
    description: 'Creative web platform and branding',
    tags: ['Web', 'Branding'],
    url: null,
    image: 'https://binaryrevolutions.com/wp-content/uploads/2019/08/debuzy.jpg',
    fallback: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
  },
]

const filters = ['All', 'Web', 'Mobile App', 'Enterprise', 'Branding', 'eCommerce']

function ProjectCard({ project }) {
  // 'primary' -> real screenshot, 'fallback' -> Unsplash stand-in, 'failed' -> styled placeholder
  const [imageStage, setImageStage] = useState('primary')
  const CardTag = project.url ? motion.a : motion.div
  const linkProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {}

  const handleImageError = () => {
    setImageStage((stage) => (stage === 'primary' ? 'fallback' : 'failed'))
  }

  return (
    <CardTag
      {...linkProps}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 light:border-[#e2e8f0] bg-white/[0.02] light:bg-white transition-colors duration-300 hover:border-[#1b8ef5]/40 hover:shadow-[0_20px_50px_-12px_rgba(27,142,245,0.35)]"
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        {imageStage === 'failed' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1e]">
            <span className="px-4 text-center text-xl font-bold text-white">{project.name}</span>
          </div>
        ) : (
          <img
            src={imageStage === 'primary' ? project.image : project.fallback}
            alt={project.name}
            onError={handleImageError}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            className="absolute inset-0 scale-105 transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 flex translate-y-2 flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-[0_0_20px_rgba(27,142,245,0.6)]">
            {project.url ? (
              <>
                Visit Site
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L11.29 6.15a.75.75 0 111.02-1.1l4.5 4.25a.75.75 0 010 1.1l-4.5 4.25a.75.75 0 11-1.02-1.1l3.098-3.1H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              'Private Project'
            )}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white light:text-[#0a0f1e]">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400 light:text-gray-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#1b8ef5]/30 bg-[#1b8ef5]/10 px-3 py-1 text-xs font-medium text-[#93c5fd] light:text-[#1d4ed8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardTag>
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

      <section className="relative bg-[#07080f] light:bg-[#f0f4ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'text-white'
                    : 'text-gray-400 light:text-gray-600 hover:text-white light:hover:text-[#0a0f1e]'
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
