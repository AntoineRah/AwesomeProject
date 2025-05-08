import {z} from 'zod';

const schema = z.object({
  otp: z
    .string()
    .length(4, 'opt must be 4 digits')
    .regex(/^\d{4}$/, 'Only digits allowed'),
});

type VerificationFormData = z.infer<typeof schema>;
export type {VerificationFormData};
export {schema};
