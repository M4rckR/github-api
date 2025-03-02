import { SearchInput } from "./components/SearchInput"
import { ContentAccount } from "./components/ContentAccount"

export const GitHubApp = () => {

  return (
    <>
      <header>
        <SearchInput />
      </header>

      <main className="bg-m-gray-bg min-h-screen">
        <div className="container  mx-auto p-0.5 px-4 md:px-0">
          <ContentAccount />
        </div>
      </main>
    </>
  )
}
