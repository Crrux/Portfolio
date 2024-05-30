import reactLogo from "/assets/react.svg";
import ProgressBar from "../../components/progress_bar/progressbar";

function Home() {
  return (
    <main className="Home">
      <h1>home</h1>
      <div className="HomeReactProgress">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <ProgressBar progress="50" color="61dafbaa"></ProgressBar>
      </div>
    </main>
  );
}

export default Home;
