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
          <h5>axel.bremner@gmail.com</h5>
        </div>
        <div className="occupation">
          Computer Science student
        </div>
      </header>
    </div>
  );
}

export default App;
