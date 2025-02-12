import { useState, ChangeEvent, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { useGithubStore } from "../store";
import debounce from "lodash/debounce";
import { SearchBox } from "./SearchBox";



export const SearchInput = () => {
 
  const [inputValue, setInputValue] = useState<string>('') 
  
  
  const fetchGithub = useGithubStore(state => state.fetchGithub)


  const debouncedFetchGithub =  useCallback(
    debounce((value: string) => {
      fetchGithub(value);
    }, 1000), // 500ms delay
    []
  );

  const handleChangueInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if(e.target.value.length > 3) {
      debouncedFetchGithub(e.target.value);
    } 
  }



  // const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   fetchGithub(inputValue)
  //   setInputValue('')
  // }

  // useEffect(() => {
  //   console.log(githubResponses); // Esto se ejecutará cada vez que githubResponses cambie
  // }, [githubResponses]);

  return (
    <section className="bg-[url(/hero-image-github-profile-sm.jpg)] pt-8 pb-32 bg-no-repeat bg-cover bg-bottom">
        <div className="container mx-auto px-4 relative">
            <form 
              className="flex justify-center relative"
              // onSubmit={handleSubmit}
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
              <SearchBox />
            </form>
        </div>
    </section>
  )
}
