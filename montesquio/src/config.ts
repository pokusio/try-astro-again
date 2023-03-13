import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Montesquio',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Jean-Baptiste Lasselle',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Chamalières, France',
  latlng: [45.7742, 3.0586] as [number, number],
  repository: 'https://github.com/montesquio/docs-astro-template',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@hellothamcom',
      icon: 'envelope',
    },
    {
      name: 'Phone',
      link: '555-5555',
      icon: 'telephone',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/hellothamcom',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/hellothamcom',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/hellothamcom',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/hellothamcom',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/hellothamcom',
      icon: 'github',
    },
  ],
  buildTime: new Date(),
}

// export const Logo = '../images/svg/astro/logomark-light.svg'
export const Logo = '../images/montesquio/montesquio-brain.png'
//export const LogoImage = '../images/astro/full-logo-light.png'
export const LogoImage = '../images/montesquio/montesquio-brain.png'

export const FeaturedSVG = '../images/svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../images/svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'About this website', href: 'about-this-website' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'Jean-Baptiste Lasselle',
    description: 'Devops Quant, Gitops Fanatic, Cybernetics player',
    contact: 'chris@christham.net',
    image: '../images/authors/jblasselle_profile_pic.png'
  }
]

export const DefaultAuthor = {
  name: 'Montesquio',
  image: '../images/authors/default.png',
  contact: 'info@montesquio.io',
  description: 'Montesquio Next-Gen Documentation'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/montesquio/docs-astro-template`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
