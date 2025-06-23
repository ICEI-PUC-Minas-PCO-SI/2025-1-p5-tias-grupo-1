import React, { useState } from 'react';
import './Doacao.css';

function Doacao() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tipoDoacao, setTipoDoacao] = useState('');

  const abrirFormulario = (tipo) => {
    setTipoDoacao(tipo);
    setMostrarFormulario(true);
  };

  const fecharFormulario = () => {
    setMostrarFormulario(false);
    setTipoDoacao('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado pela doação!');
    // Aqui você pode enviar os dados para o backend se quiser
    fecharFormulario();
  };

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
            <button className="btn-doar" onClick={() => abrirFormulario('itens')}>Doe Agora</button>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <h3>Quero doar um valor em dinheiro</h3>
            <button className="btn-doar" onClick={() => abrirFormulario('dinheiro')}>Doe Agora</button>
          </div>
        </div>

        {mostrarFormulario && (
          <div className="formulario-doacao">
            <h3>Formulário de Doação ({tipoDoacao === 'itens' ? 'Alimentos/Itens' : 'Dinheiro'})</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" required />
              </label>
              <label>
                E-mail:
                <input type="email" required />
              </label>
              {tipoDoacao === 'dinheiro' ? (
                <label>
                  Valor da doação (R$):
                  <input type="number" required />
                </label>
              ) : (
                <label>
                  Descreva o que deseja doar:
                  <textarea required />
                </label>
              )}
              <div className="botoes-form">
                <button type="submit" className="btn-enviar">Enviar</button>
                <button type="button" className="btn-cancelar" onClick={fecharFormulario}>Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default Doacao;
