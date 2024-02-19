import TwitterFollowCard from "./components/TwitterFollowCard";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="astro" name="Astro" initialIsFollowing />

      <TwitterFollowCard userName="sponge" name="Sponge Bob" initialIsFollowing />

      <TwitterFollowCard userName="homer" name="Homero" initialIsFollowing={false} />

      <TwitterFollowCard userName="natsu" name="Natsu Dragneel" initialIsFollowing />
    </section>
  );
}

export default App;
