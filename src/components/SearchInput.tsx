import { useState, ChangeEvent, useCallback, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useGithubStore } from "../store";
import debounce from "lodash/debounce";
import { SearchBox } from "./SearchBox";


export const SearchInput = () => {
 
  const [inputValue, setInputValue] = useState<string>('') 
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false)
  const searchRef = useRef<HTMLDivElement>(null);

  
  const fetchGithub = useGithubStore(state => state.fetchGithub)


  const debouncedFetchGithub =  useCallback(
    debounce((value: string) => {
      fetchGithub(value);
    }, 500), // 500ms delay
    []
  );

  const handleChangueInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if(e.target.value.length > 2) {
      setShowSearchBox(true)
      debouncedFetchGithub(e.target.value);
    } else {
      setShowSearchBox(false)
    }
  }

    // useEffect para detectar clics fuera del contenedor
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Si la referencia existe y el clic NO fue dentro del contenedor:
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
          setShowSearchBox(false); // Oculta el SearchBox
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);



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
              className="relative w-full max-w-[480px] mx-auto"
              // onSubmit={handleSubmit}
              >
                <div className="bg-m-gray-bg relative w-full rounded-lg">
                    <div className=" absolute text-m-gray-text text-2xl top-1/2 left-4 transform -translate-y-1/2">
                        <IoSearch />
                    </div>
                    <div ref={searchRef} className="relative">
                          <input
                              className="outline-none text-m-gray-text placeholder:text-m-gray-text-low pl-12 p-4 w-full" 
                              type="text" 
                              name="username"
                              placeholder="Username" 
                              onChange={handleChangueInput}
                              onFocus={() => inputValue.length > 2 && setShowSearchBox(true)}
                              value={inputValue}
                          />
                          {showSearchBox && <SearchBox />}
                    </div>
                    
                </div>
            </form>
        </div>
    </section>
  )
}
