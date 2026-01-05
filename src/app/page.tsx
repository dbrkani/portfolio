import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

const skills = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'NodeJS', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'C++', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'PostgreSQL', category: 'DBMS' },
  { name: 'MySQL', category: 'DBMS' },
  { name: 'MongoDB', category: 'DBMS' },
  { name: 'Firebase', category: 'Deployment' },
  { name: 'Git', category: 'Development' },
]

// const projects = [
//   {
//     title:
//     description:
//     image: '/placeholder.svg?height=600&width=800',
//     link: '#',
//   },
//   {
//     title:
//     description: 
//     image: '/placeholder.svg?height=600&width=800',
//     link: '#',
//   },

export default function Page() {
  return (
    <main className="min-h-screen w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider">
            Dashamir Brkani
          </h1>
          <div className="flex gap-4">
            <Link 
              href="https://github.com/dbrkani" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
<Link 
  href="https://bsky.app/profile/dbrkani.bsky.social"
  className="text-gray-700 hover:text-gray-900 transition-colors"
  aria-label="Bluesky"
>
<svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Bluesky</title>
    <path d="M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
  </svg>
  
  </Link>
            <Link 
              href="https://www.linkedin.com/in/dashi-brkani/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] mb-12">
        <Image
          src="/splash.jpg"
          alt="Black and white landscape with bicycle silhouette"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* About Section */}
      <section className="space-y-6 mb-16 max-w-4xl">
        <p className="text-gray-700 leading-relaxed">
          I&apos;m a software engineer based in New York. I picked up programming off of youtube videos before attending a boot camp. After that, I graduated from CUNY CSI with a degree in Computer Science. Before my decision to make a career change, I was working as a property manager for over 150 apartment units.
          </p>
        <p className="text-gray-700 leading-relaxed">
          I&apos;m an adept problem solver, have a strong background of working in teams, and enjoy challenges. I&apos;m passionate about technology and using code to as a tool to facilitate day to day life.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
          SKILLS
        </h2>
        <p className="text-gray-700 mb-8">
          Some of the things I&apos;ve learned and worked with.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="text-gray-600 flex items-center">
              <span className="mr-2">•</span>
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
          WORKS
        </h2>
        <p className="text-gray-700 mb-8">
          Selected works and past projects.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <Link 
                href={project.link}
                className="inline-block text-gray-700 hover:text-gray-900 transition-colors"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
          CONTACT ME
        </h2>
        <p className="text-gray-700 mb-4">
          Reach out if you&apos;re looking for a developer, have a question, or would like to connect.
        </p>
        <p className="text-gray-700 mb-8">
        <a href="mailto: contact@dashibrkani.com" title="contact@dashibrkani.com" data-astro-cid-j7pv25f6="">contact@dashibrkani.com
</a>
        </p>
        <div className="flex gap-4">
  <Link 
    href="https://github.com/dbrkani" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-gray-900 transition-colors"
  >
    <Github className="w-6 h-6" />
  </Link>
  <Link 
    href="https://bsky.app/profile/dbrkani.bsky.social" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-gray-900 transition-colors"
  >
<svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Bluesky</title>
    <path d="M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
  </svg>
  </Link>
  <Link 
    href="https://www.linkedin.com/in/dashi-brkani/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-gray-900 transition-colors"
  >
    <Linkedin className="w-6 h-6" />
  </Link>
</div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500">
        Dashamir Brkani © 2026
      </footer>
    </main>
  )
}

