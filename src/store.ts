import { create } from "zustand";
import { AccSelected, GithubServices } from "./services/GithubServices";
import { GithubDetailAcc, GithubSelectedAcc} from "./types";
import { devtools } from "zustand/middleware";


type GithubStore = {
    loadingInit : boolean,
    githubDetailAcc: GithubDetailAcc,
    githubSelectedAcc: GithubSelectedAcc,
    fetchGithub: (username:string) => void,
    fetchSelected: (username:string) => void,
}

export const useGithubStore = create<GithubStore>()(
    devtools((set) => ({
        githubSelectedAcc: {
            users: {
                login: '',
                id: 0,
                node_id: '',
                avatar_url:  '',
                url: '',
                bio: '',
            },
            repos: []
        },
        githubDetailAcc: [],
        loadingInit: true,

        fetchGithub: async (username) => {
            const githubDetailAcc = await GithubServices(username)
            set({githubDetailAcc})
        },

        fetchSelected: async (username) => {
            set({loadingInit: true})
            const githubSelectedAcc = await AccSelected(username)
            console.log(githubSelectedAcc)
            set({
                githubSelectedAcc: githubSelectedAcc,
                loadingInit: false
            })
        }

    })
))