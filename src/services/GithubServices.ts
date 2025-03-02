import axios from "axios";
import { GithubResponsesSchema, GithubResponsesSchemaDetail, GithubDetailAccSchema, GithubDefaultAccSchema, GithubDefaultAccSchemaRepos } from "../schema/github-schema";


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


export async function AccSelected(username:string = 'github') {

  const urlAcc = `https://api.github.com/users/${username}`;
  const urlRepos = `https://api.github.com/users/${username}/repos?per_page=4`;

  try {

      const [userData, reposData] = await Promise.all([
        axios.get(urlAcc),
        axios.get(urlRepos)
      ])

      const userValidation  = GithubDefaultAccSchema.safeParse(userData.data);
      const reposValidation  = GithubDefaultAccSchemaRepos.safeParse(reposData.data);

    // Comprobamos que ambas validaciones sean exitosas
    if (!userValidation.success || !reposValidation.success) {
      console.log('Error en la validación:', userValidation.error, reposValidation.error);
      return {};
    }

    
    // Usamos Zod para construir un objeto combinado y tipado correctamente
    const combinedData = {
      user: userValidation.data,
      repos: reposValidation.data
    };

    console.log(combinedData)
    return combinedData;



  } catch (error) {
      console.log(error)
  }


}
