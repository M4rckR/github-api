import { create } from "zustand";
import { GithubServices } from "./services/GithubServices";
import { GithubResponses } from "./types";
import { devtools } from "zustand/middleware";


type GithubStore = {
    githubResponses: GithubResponses
    fetchGithub: (username:string) => void
}

export const useGithubStore = create<GithubStore>()(
    devtools((set) => ({
        githubResponses: {
            items: [
                {
                    login: '',
                    id: 0,
                    node_id: '',
                    avatar_url: '',
                    location: '',
                    bio: ''
                }
            ]
        },
        fetchGithub: async (username) => {
            const githubResponses = await GithubServices(username)
            set({githubResponses})
        }
    })
))