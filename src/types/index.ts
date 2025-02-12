import { z } from "zod";
import { GithubResponsesSchema } from "../schema/github-schema";

export type GithubResponses = z.infer<typeof GithubResponsesSchema>;

