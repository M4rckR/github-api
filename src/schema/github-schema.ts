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


export const GithubDetailAccSchema = z.array(
    z.object ({
        login: z.string(),
        id: z.number(),
        node_id: z.string(),
        avatar_url: z.string(),
        url: z.string(),
        bio: z.string().nullable().optional(),
    })
) 




export const GithubDefaultAccSchema = z.object({
    id: z.number(),
    avatar_url: z.string(),
    followers: z.number(),
    following: z.number(),
    location: z.string().nullable().optional(),
    name: z.string(),
    bio: z.string().nullable().optional(),
})


export const GithubDefaultAccSchemaRepos = z.array(
    z.object({
        name: z.string(),
    })
)


export const GithubSelectedAccSchema = z.object({
    users: z.object({
            login: z.string(),
            id: z.number(),
            node_id: z.string(),
            avatar_url: z.string(),
            url: z.string(),
            bio: z.string().nullable().optional(),
            followers: z.number(),
            following: z.number(),
            location: z.string().nullable().optional(),
    }),    
    repos : z.array(
        z.object({
            name: z.string(),
        })
    )
})