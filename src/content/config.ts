import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // We can add an image field later if we want to explicitly specific one in frontmatter
        // For now, mapping by slug or hardcoding in the template might be easier if we don't edit MDs
    }),
});

export const collections = {
    'services': servicesCollection,
};
