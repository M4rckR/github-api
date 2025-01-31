import { z } from "zod";
import { GithubResponseSchema } from "../schema/github-schema";

export type GithubResponse = z.infer<typeof GithubResponseSchema>;

