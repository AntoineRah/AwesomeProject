import {z} from 'zod';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z
    .string()
    .refine(val => !isNaN(Number(val)), 'Price must be a number'),
  location: z
    .object({
      name: z.string().min(1, 'Location name is required'),
      longitude: z.number(),
      latitude: z.number(),
    })
    .optional(),
  images: z
    .array(
      z.object({
        uri: z.string(),
        name: z.string(),
        type: z.string(),
      }),
    )
    .min(1, 'At least one image is required'),
});

export type AddProductFormData = z.infer<typeof schema>;

export {schema};
