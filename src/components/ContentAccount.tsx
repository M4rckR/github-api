import { useEffect } from "react"
import { useGithubStore } from "../store"
import { ContentEstadistics } from "./ContentEstadistics"
import { Loader } from "../utils/Loader"


export const ContentAccount = () => {

  const fetchSelected = useGithubStore(state => state.fetchSelected)
  const githubDefaultAcc = useGithubStore(state => state.githubSelectedAcc)
  const loadingInit = useGithubStore(state => state.loadingInit)
  // const hola = useGithubStore(state => state.hola) 

  useEffect(() => {
    fetchSelected('Github')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loadingInit? 
        (
          <div className="flex justify-center items-center mt-16">
            <Loader/> 
          </div>
        )
      : (
        <>
          <section className="flex flex-col items-start -mt-10 gap-4 lg:gap-10 lg:flex-row lg:items-end mb-6">
                <picture className="p-2 bg-m-gray-bg rounded-xl">
                  <img className="rounded-xl" src={githubDefaultAcc.users.avatar_url} width={100} alt="Image ACC" />
                </picture>
        
                <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-start"> 
                  <ContentEstadistics
                    title="Followers">
                    {githubDefaultAcc.users.followers}
                  </ContentEstadistics>
        
                  <ContentEstadistics
                    title="Following">
                    {githubDefaultAcc.users.following}
                  </ContentEstadistics>
        
                  <ContentEstadistics
                    title="Location">
                    {githubDefaultAcc.users.location}
                  </ContentEstadistics>
                </div>
            </section>
            <section>
              <div>
                <h1 className="text-m-gray-text text-4xl mb-2">{githubDefaultAcc.name}</h1>
                <p className="text-m-gray-text text-lg">{githubDefaultAcc.bio}</p>
              </div>
            </section>
        </>
              
      )}



    </>
  )
}
