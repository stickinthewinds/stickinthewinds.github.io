import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav class="links">
        <a
          href="assets/files/Axel_Bremner_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="https://github.com/stickinthewinds"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://gitlab.com/StickInTheWind"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </a>
        <a
          href="https://www.linkedin.com/in/axel-bremner-0111aa1b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </nav>
      <header className="App-header">
        <div className="info">
          <h1>Axel Bremner</h1>
          <div className="email">
            <a className="underline" href="mailto:contact@axelbremner.id.au">Email</a>
          </div>
        </div>
        <div className="occupation">
          Computer Science student at Curtin University
        </div>
      </header>
    </div>
  );
}

export default App;
