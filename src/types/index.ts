import { z } from "zod";
import { GithubDetailAccSchema, GithubResponsesSchema, GithubDefaultAccSchema, GithubSelectedAccSchema } from "../schema/github-schema";

export type GithubResponses = z.infer<typeof GithubResponsesSchema>;
export type GithubDetailAcc = z.infer<typeof GithubDetailAccSchema>;
export type GithubDefaultAcc = z.infer<typeof GithubDefaultAccSchema>;
export type GithubSelectedAcc = z.infer<typeof GithubSelectedAccSchema>;


