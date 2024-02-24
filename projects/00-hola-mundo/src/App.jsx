import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="tolerevo"
        name="Diego Tolentino"
      />
      <TwitterFollowCard
        isFollowing
        userName="pheralb"
        name="Pablo Hernandez"
      />
      <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard isFollowing userName="vxnder" name="Vanderhart" />
    </section>
  );
};
