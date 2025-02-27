import { z } from "zod";


export const GithubResponsesSchema = z.object({
    items: z.array(
        z.object({
            login: z.string(),
            id: z.number(),
            node_id: z.string(),
            avatar_url: z.string(),
            url: z.string(),
        })
    ).optional()
})


export const GithubResponsesSchemaDetail = z.object({
    bio: z.string().nullable().optional(),
})


export const GithubDetailAccSchema = z.object ({
    login: z.string(),
    id: z.number(),
    node_id: z.string(),
    avatar_url: z.string(),
    url: z.string(),
    bio: z.string().nullable().optional(),
})