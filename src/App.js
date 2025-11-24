import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="nome">Bryan Soares de Carvalho</h1>
        <p className="subtitulo">Currículo Profissional</p>
      </header>

      <main className="container">

        <section className="card">
          <h2>Sobre Mim</h2>
          <p>
            Me chamo <strong>Bryan Soares de Carvalho</strong>, tenho <strong>17 anos</strong> e resido em <strong>Suzano, São Paulo</strong>.  
            Possuo dois cursos técnicos, no qual ainda estou cursando, oferecidos pela ETEC de Ribeirão Pires:
          </p>

          <ul>
            <li>Técnico em <strong>Informática para Internet</strong> — período da tarde.</li>
            <li>Técnico em <strong>Administração</strong> — período da noite.</li>
          </ul>

          <p>
            Também concluí <strong>1 ano de curso de inglês</strong> na instituição Start Pro.  
            Embora ainda não tenha experiência profissional registrada, trabalho desde os <strong>14 anos</strong>,
            desenvolvendo responsabilidade, disciplina e proatividade.
          </p>
        </section>

        <section className="card">
          <h2>Formações</h2>
          <ul>
            <li>Informática para Internet – ETEC de Ribeirão Pires</li>
            <li>Administração – ETEC de Ribeirão Pires</li>
            <li>Inglês – Start Pro (1 ano)</li>
          </ul>
        </section>

        <section className="card">
          <h2>Habilidades</h2>
          <ul>
            <li>HTML, CSS, JavaScript, PHP e kali linux</li>
            <li>Noções de Redes</li>
            <li>Administração e organização</li>
            <li>Comunicação e responsabilidade</li>
          </ul>
        </section>

        <section className="card">
          <h2>Contato</h2>
          <ul>
            <li>Email: soaresbryan313@gmail.com</li>
            <li>Telefone: (11) 9 6260-6110</li>
            <li>Cidade: Suzano - SP</li>
          </ul>
        </section>

      </main>

      <footer className="footer">
        © 2025 - Currículo: Bryan Soares de Carvalho
      </footer>
    </div>
  );
}

export default App;
