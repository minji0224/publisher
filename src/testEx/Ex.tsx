import { greet } from "../module";

const Ex = () => {

  const name = "처음 url '/' 경로의 index화면";
  const test = greet(name);

  return <div>{test}</div>
}

export default Ex;

