import { z } from "zod";

// export const GithubResponseSchema = z.object({
//     login: z.string(),
//     id: z.number(),
//     node_id: z.string(),
//     avatar_url: z.string(),
//     location: z.string().nullable(),
//     bio: z.string().nullable(),
// })
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