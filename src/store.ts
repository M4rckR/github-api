import { create } from "zustand";
import { GithubServices } from "./services/GithubServices";
import { GithubResponse } from "./types";

type GithubStore = {
    githubResponse: GithubResponse
    fetchGithub: (username:string) => void
}

export const useGithubStore = create<GithubStore>((set) => ({
    githubResponse: {
        login: "",
        id: 0,
        node_id: "",
        avatar_url: "",
        location: "",
        bio: ""
    },
    fetchGithub: async (username) => {
        await GithubServices(username)
    }
}))