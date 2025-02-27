import axios from "axios";

async function getUserDetails()
{
  const response = await axios({
    method:"get",
    url:"https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  });
  return response.data;
}

export default async function Home() {
  
  const data=await getUserDetails();
  
  return(
    <div>
      {JSON.stringify(data)}
    </div>
  ) ;
}
