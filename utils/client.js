import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient(
  {
    projectId: 'vxddr8wd',
    dataset: 'production',
    apiVersion: '2023-05-23',
    useCdn: true,
  }
)

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)