import axios from "axios";
import { GithubResponsesSchema, GithubResponsesSchemaDetail, GithubDetailAccSchema } from "../schema/github-schema";


export async function GithubServices(username:string) {
  const url = `https://api.github.com/search/users?q=${username}&per_page=2`;

  try {
      const {data} = await axios(
          url
      );
      const responseData = GithubResponsesSchema.safeParse(data);

      if (!responseData.success) {
        console.log(responseData.error)
        return []
      }

      const users = responseData.data.items || [];

      const usersWithBio = await Promise.all(
        users.map(async (user) => {
          const userDetailUrl = `https://api.github.com/users/${user.login}`;
  
          try {
            const { data: userDetails } = await axios(userDetailUrl);
            const bioData = GithubResponsesSchemaDetail.safeParse(userDetails);
  
            return { ...user, bio: bioData.success ? bioData.data.bio : "Bio no disponible" };
          } catch (error) {
            console.error(`Error fetching bio for ${user.login}:`, error);
            return { ...user, bio: "Bio no disponible" }; // 🔥 Si falla, no rompe el código
          }
        })
      )

      const usersWithBioData = GithubDetailAccSchema.safeParse(usersWithBio);

      if (!usersWithBioData.success) {
        console.log(usersWithBioData.error)
        return []
      }


      return usersWithBio

  } catch (error) {
      console.log(error)
      return []
  }



}
