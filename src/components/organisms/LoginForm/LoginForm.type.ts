import {z} from 'zod';

const schema = z.object({
  email: z.string().email('Email is invalid'),
  password: z.string().min(7, 'Password does not match correct credentials '),
});

type LogInFormData = z.infer<typeof schema>;

export {schema};
export type {LogInFormData};
