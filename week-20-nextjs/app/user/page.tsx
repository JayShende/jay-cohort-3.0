import axios from "axios";
export default async function Home() {
  const resposne = await axios({
    method: "get",
    url: "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
  });

  const userData = resposne.data;

  return (
    <div>
      {userData.email}
      <br />
      {userData.name}
    </div>
  );
}
