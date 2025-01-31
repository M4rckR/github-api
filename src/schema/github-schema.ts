import { z } from "zod";

export const GithubResponseSchema = z.object({
    login: z.string(),
    id: z.number(),
    node_id: z.string(),
    avatar_url: z.string(),
    location: z.string().nullable(),
    bio: z.string().nullable(),
})