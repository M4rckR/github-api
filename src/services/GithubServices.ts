import axios from "axios";
import { GithubResponsesSchema, GithubResponsesSchemaDetail } from "../schema/github-schema";


export async function GithubServices(username:string) {
  const url = `https://api.github.com/search/users?q=${username}&per_page=40`;

  const {data} = await axios(
        url
    );
  
  const responseData = GithubResponsesSchema.safeParse(data);

  if (responseData.success) {

    const users = responseData.data.items

    if(!users) {
      return [];
    }

    const usersData = await Promise.all(
      users.map(async (user) => {
        const userDetailResponse = await axios(user.url);
        const userDetailData = GithubResponsesSchemaDetail.safeParse(userDetailResponse.data);

        console.log(userDetailData.data.bio)
      })
    )
  }

  else {
    console.log(responseData.error)
  }

}
