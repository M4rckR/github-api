import axios from "axios";
import { GithubResponseSchema } from "../schema/github-schema";


export async function GithubServices(username:string) {
  const url = `https://api.github.com/users/${username}`;

  const {data} = await axios(url);
  
  const responseData = GithubResponseSchema.safeParse(data);

  if (responseData.success) {
    console.log(responseData.data)
  }

}
