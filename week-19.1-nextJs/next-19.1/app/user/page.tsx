import axios from "axios";

async function getUserDetails()
{
  const response = await axios({
    method:"get",
    url:"https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  });

  await new Promise(r=>setTimeout(r,5000));
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
