/**
 * Vite plugin that generates per-route HTML files at build time.
 * Each route gets its own index.html with unique meta tags and
 * crawlable text content, so search engines can index each page
 * independently without needing to execute JavaScript.
 */

const pages = [
  {
    path: 'templates',
    title: 'Browse 20+ Free Resume Templates | ResumeMaker',
    description: 'Choose from 20+ professional resume templates. Classic, Modern, Creative, Executive, Tech, and more. Free to use, no sign-up needed.',
    content: `
      <h1>20+ Free Resume Templates</h1>
      <p>Choose a professional template to build your resume. All templates are free, customizable, and designed to pass ATS systems.</p>
      <h2>Available Templates</h2>
      <ul>
        <li>Classic - Traditional serif layout with centered header</li>
        <li>Modern - Clean and minimal with blue accents</li>
        <li>Bold - Dark header with strong typography</li>
        <li>Executive - Formal corporate layout with navy accents</li>
        <li>Creative - Two-column with colored sidebar</li>
        <li>Tech - Developer-focused with monospace and badges</li>
        <li>Academic - Dense formal layout for research and CV</li>
        <li>Minimal - Ultra-clean pure typography layout</li>
        <li>Elegant - Refined serif with gold accents</li>
        <li>Compact - Dense layout maximizing content space</li>
        <li>Timeline - Visual timeline for experience entries</li>
        <li>Corporate - Professional business with thick borders</li>
        <li>Fresh - Bright green tones with rounded elements</li>
        <li>Slate - Dark theme with sky blue highlights</li>
        <li>Professional - Clean layout with green section headers</li>
        <li>Simple - Bare essentials with no decoration</li>
        <li>Gradient - Purple-to-pink gradient header</li>
        <li>Newspaper - Multi-column editorial style</li>
        <li>Geometric - Orange geometric shapes and accents</li>
        <li>Royal - Dark background with gold typography</li>
      </ul>
    `,
  },
  {
    path: 'editor',
    title: 'Build Your Resume - Free Online Resume Editor | ResumeMaker',
    description: 'Build your professional resume with our free online editor. Live preview, custom colors, instant PDF download. No account needed.',
    content: `
      <h1>Free Online Resume Editor</h1>
      <p>Build your professional resume with our easy-to-use editor. See changes in real-time with live preview.</p>
      <h2>Features</h2>
      <ul>
        <li>Live side-by-side preview as you type</li>
        <li>Custom accent color picker</li>
        <li>Instant PDF download</li>
        <li>Auto-save to your browser</li>
        <li>Switch templates without losing data</li>
      </ul>
      <h2>Resume Sections</h2>
      <ul>
        <li>Personal Information - Name, email, phone, location, LinkedIn</li>
        <li>Professional Summary</li>
        <li>Work Experience with achievements</li>
        <li>Education and qualifications</li>
        <li>Skills</li>
        <li>Projects with links</li>
      </ul>
    `,
  },
]

export default function seoPages() {
  return {
    name: 'vite-plugin-seo-pages',
    apply: 'build',
    closeBundle() {
      const fs = require('fs')
      const path = require('path')
      const distDir = path.resolve(__dirname, 'dist')
      const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

      for (const page of pages) {
        const pageDir = path.join(distDir, page.path)
        fs.mkdirSync(pageDir, { recursive: true })

        let html = baseHtml
          .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
          .replace(
            /<meta name="description" content=".*?" \/>/,
            `<meta name="description" content="${page.description}" />`
          )
          .replace(
            /<meta property="og:title" content=".*?" \/>/,
            `<meta property="og:title" content="${page.title}" />`
          )
          .replace(
            /<meta property="og:description" content=".*?" \/>/,
            `<meta property="og:description" content="${page.description}" />`
          )

        // Add crawlable content inside noscript and as hidden text for SEO
        html = html.replace(
          '<div id="root"></div>',
          `<div id="root"></div>\n    <noscript><main>${page.content}</main></noscript>`
        )

        fs.writeFileSync(path.join(pageDir, 'index.html'), html)
      }
    },
  }
}
