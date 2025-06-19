import React from 'react';
import Header from './components/Header';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="intro">
          <h4>ENTENDA COMO AJUDAMOS NA EDUCAÇÃO</h4>
          <h2>NOSSOS CURSOS E<br />QUALIFICAÇÕES</h2>
          <p>
            Há mais de 30 anos, o Projeto Social Mucuri transforma vidas através da educação e
            qualificação profissional. Nesta seção, você encontrará nossa variedade de cursos gratuitos,
            cuidadosamente elaborados para oferecer as ferramentas e o conhecimento que você precisa para
            se destacar no mercado de trabalho e construir um futuro de sucesso. Acreditamos que o acesso à
            qualificação é um direito, e estamos aqui para te ajudar a conquistar seus objetivos. Explore
            nossas opções e venha fazer parte dessa história de mais de três décadas de impacto social!
          </p>
        </section>

        <CourseList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
