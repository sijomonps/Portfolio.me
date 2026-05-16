import { MetadataRoute } from 'next'

const SITE_URL = process.env.SITE_URL ?? 'https://sijomonps.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['']

  return pages.map((page) => ({
    url: `${SITE_URL}/${page}`,
    lastModified: new Date().toISOString(),
  }))
}
