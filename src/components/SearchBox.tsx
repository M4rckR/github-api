import { useEffect } from "react"
import { useGithubStore } from "../store"

export const SearchBox = () => {
    const githubResponses = useGithubStore(state => state.githubResponses)

    useEffect(() => {
        console.log(githubResponses); // Esto se ejecutará cada vez que githubResponses cambie
    }, [githubResponses]);

    
  return (
    <section className="absolute w-full max-w-[480px] left-1/2  -translate-x-1/2  -translate-y-1/2 top-64 rounded px-4 sm:px-0 bg-white">
        {githubResponses.items?.map((item) => (
            <article key={item.id} className="bg-m-purple-bg-high">
                <div  className="flex items-center p-4 gap-4 font-semibold">
                    <img src={item.avatar_url} alt="avatar" className="w-16 h-16 rounded" />
                    <div className="text-m-gray-text">
                        <p>{item.login}</p>
                        <p>{item.id}</p>
                    </div>
                </div>

            </article>
        ))}
    </section>
  )
}
