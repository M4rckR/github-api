import { create } from "zustand";
import { GithubServices } from "./services/GithubServices";
import { GithubDetailAcc } from "./types";
import { devtools } from "zustand/middleware";


type GithubStore = {
    githubDetailAcc: GithubDetailAcc,
    fetchGithub: (username:string) => void
}

export const useGithubStore = create<GithubStore>()(
    devtools((set) => ({
        githubDetailAcc: [],
        fetchGithub: async (username) => {
            const githubDetailAcc = await GithubServices(username)
            set({githubDetailAcc})
        }
    })
))