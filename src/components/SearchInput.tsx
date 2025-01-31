import { useState, ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useGithubStore } from "../store";


export const SearchInput = () => {
 
  const [inputValue, setInputValue] = useState<string>('') 
  
  const fetchGithub = useGithubStore(state => state.fetchGithub)


  const handleChangueInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchGithub(inputValue)
  }

  return (
    <section className="bg-[url(/hero-image-github-profile-sm.jpg)] pt-8 pb-32 bg-no-repeat bg-cover bg-bottom">
        <div className="container mx-auto px-4">
            <form 
              className="flex justify-center"
              onSubmit={handleSubmit}
              >
                <div className="bg-m-gray-bg relative w-full max-w-[480px] rounded-lg">
                    <div className=" absolute text-m-gray-text text-2xl top-1/2 left-4 transform -translate-y-1/2">
                        <IoSearch />
                    </div>
                    <input
                        className="outline-none text-m-gray-text placeholder:text-m-gray-text-low pl-12 p-4 w-full" 
                        type="text" 
                        name="username"
                        placeholder="Username" 
                        onChange={handleChangueInput}
                        value={inputValue}
                        />
                </div>
            </form>
        </div>
    </section>
  )
}
