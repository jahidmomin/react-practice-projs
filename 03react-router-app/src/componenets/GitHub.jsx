import { useLoaderData } from "react-router-dom";

export default function GitHub() {

const data=useLoaderData();

  return (
    <div>
      <h1>Github Live Data</h1>
      <ul>
        <li>{data.login}</li>
        <li>{data.followers}</li>
        <li>
          <img src={data.avatar_url} alt="avatar" height={200} width={200} />
        </li>
      </ul>
    </div>
  );
}

export let fetchGithubData = async () => {
  let data = await fetch("https://api.github.com/users/jahidmomin")
  return data.json();
};
