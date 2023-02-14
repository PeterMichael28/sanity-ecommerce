import sanityClient from '@sanity/client'
import ImageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient( {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION,
    useCdn: true
} );


const builder = ImageUrlBuilder( client )

export const urlFor = (source) => builder.image(source)
