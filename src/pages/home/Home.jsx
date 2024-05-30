import reactLogo from "/assets/react.svg";

function Home() {
  return (
    <main className="Home">
      <h1>home</h1>

      <img src={reactLogo} className="logo react" alt="React logo" />
      <progress value={0.5} id="test" />
    </main>
  );
}

export default Home;
