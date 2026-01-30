import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        capabilities: z.array(z.object({
            title: z.string(),
            description: z.string(),
        })).optional(),
    }),
});

export const collections = {
    'services': servicesCollection,
};
