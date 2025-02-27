import { z } from "zod";
import { GithubDetailAccSchema, GithubResponsesSchema } from "../schema/github-schema";

export type GithubResponses = z.infer<typeof GithubResponsesSchema>;
export type GithubDetailAcc = z.infer<typeof GithubDetailAccSchema>;

