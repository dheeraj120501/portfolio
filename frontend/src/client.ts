import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'vkddxwml', 
  dataset: 'production', 
  useCdn: false
})

export async function getProfile() {
  const profile = await client.fetch('*[_type == "profile"]')
  return profile
}

export async function getSocials() {
  const socials = await client.fetch('*[_type == "social"]')
  return socials
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

