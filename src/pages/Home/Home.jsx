import photo from "/assets/photo.jpg";

function Home() {
  return (
    <main className="Home">
      <section>
        <div className="Home_Presentation">
          <img src={photo} className="Home_Presentation_Photo" />
          <div>
            <h1>Welcome.</h1>
            <p>
              My name is Mursch Arthur and i&apos;m a fullstack web developper
              based in France.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
