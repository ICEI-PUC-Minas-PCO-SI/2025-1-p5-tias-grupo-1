import React from 'react';
import './Doacao.css';

function Doacao() {
  return (
    <div className="doacao-container">
      <section className="texto-principal">
        <p className="verde">MAIS DO QUE NUNCA,</p>
        <h1>Nós precisamos <span className="amarelo">da sua ajuda</span></h1>
        <p>
          No Projeto Mucuri, acreditamos no poder da educação e da criatividade para transformar comunidades e construir um futuro melhor.
        </p>
        <p>
          A educação é a base de qualquer sociedade próspera. Ela abre portas, quebra barreiras e capacita indivíduos a alcançarem seu potencial máximo.
        </p>
        <p>
          No entanto, acreditamos que a educação tradicional, por si só, não é suficiente. É preciso ir além, integrando a criatividade como um pilar fundamental para o desenvolvimento humano e social.
        </p>
        <p>
          A criatividade não se limita às artes ou à inovação tecnológica. Ela está presente na maneira como resolvemos problemas, como nos relacionamos com os outros e como enxergamos o mundo ao nosso redor. 
          Quando combinamos educação com criatividade, criamos um ambiente onde as pessoas podem pensar fora da caixa, encontrar soluções inovadoras e transformar desafios em oportunidades.
        </p>
      </section>

      <section className="doe-agora">
        <h2>DOE AGORA</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Quero doar alimentos ou itens</h3>
            <button className="btn-doar">Doe Agora</button>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <h3>Quero doar um valor em dinheiro</h3>
            <button className="btn-doar">Doe Agora</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doacao;
