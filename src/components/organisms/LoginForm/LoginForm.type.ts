import {z} from 'zod';

const schema = z.object({
  email: z.string().email('Email is invalid'),
  password: z.string().min(7, 'Password must be at least 7 characters long '),
});

type LogInFormData = z.infer<typeof schema>;

export {schema};
export type {LogInFormData};
