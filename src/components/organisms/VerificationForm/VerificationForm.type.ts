import {z} from 'zod';

const schema = z.object({
  otp: z
    .string()
    .length(6, 'opt must be 4 digits'),
});

type VerificationFormData = z.infer<typeof schema>;
export type {VerificationFormData};
export {schema};
