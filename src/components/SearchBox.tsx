import { useEffect } from "react"
import { useGithubStore } from "../store"

export const SearchBox = () => {
    const githubDetailAcc = useGithubStore(state => state.githubDetailAcc)


    useEffect(() => {
        console.log(githubDetailAcc); // Esto se ejecutará cada vez que githubResponses cambie
    }, [githubDetailAcc]);
    
  return (
    <section className="absolute w-full max-w-[480px] left-0 top-full mt-2 px-4 sm:px-0 bg-m-purple-bg-high  rounded-2xl overflow-hidden shadow-lg">
        
        {githubDetailAcc.map((item) => (
            <article key={item.id} className="bg-m-purple-bg-high hover:bg-gray-800 cursor-pointer">
                <div  className="flex items-center p-4 gap-4 font-semibold">
                    <img src={item.avatar_url} alt="avatar" className="w-16 h-16 rounded" />
                    <div className="text-m-gray-text">
                        <p>{item.login}</p>
                        {item.bio && item.bio.length > 25 ? <p>{`${item.bio.slice(0, 25)}...`}</p> : <p>{item.bio}</p>}
                    </div>
                </div>

            </article>
        ))}
    </section>
  )
}
