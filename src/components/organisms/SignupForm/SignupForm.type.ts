import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, 'name must be at least 1 character'),
    email: z.string().email('Email is invalid'),
    password: z.string().min(7, 'Password must be at least 7 characters long '),
    phonenumber: z.string().length(8, 'Phone number must be exactly 8 digits'),
});

type SignupFormData = z.infer<typeof schema>;

export { schema };
export type { SignupFormData };
