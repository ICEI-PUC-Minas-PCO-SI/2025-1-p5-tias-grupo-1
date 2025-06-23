import React from 'react';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={styles.sobrePage}>
      <section className={styles.sobreHeroSection}>
        <div className={styles.sobreHeroContent}>
          <p className={styles.sobreHeroSubtitle}>TRANSFORMANDO VIDAS</p>
          <h1 className={styles.sobreHeroTitle}>Nosso Impacto <span className={styles.highlightText}>na Sociedade</span></h1>
          <p className={styles.sobreHeroDescription}>
            No Projeto Mucuri, acreditamos no poder da educação e da criatividade para transformar comunidades e construir um futuro melhor.
          </p>
          <p className={styles.sobreHeroDescription}>
            A educação é a base de qualquer sociedade próspera. Ela abre portas, quebra barreiras e capacita indivíduos a alcançarem
            seu potencial máximo. No entanto, acreditamos que a educação tradicional, por si só, não é suficiente. É preciso ir além,
            integrando a <span className={styles.boldText}>criatividade</span> como um pilar fundamental para o desenvolvimento humano e social.
          </p>
          <p className={styles.sobreHeroDescription}>
            A criatividade não se limita às artes ou à inovação tecnológica. Ela está presente na maneira como resolvemos problemas,
            como nos relacionamos com os outros e como enxergamos o mundo ao nosso redor. Quando combinamos educação com
            criatividade, criamos um ambiente onde as pessoas podem pensar fora da caixa, encontrar soluções inovadoras e
            transformar desafios em oportunidades.
          </p>
        </div>
      </section>

      <section className={styles.metricsSection}>
        <h2 className={styles.metricsTitle}>Nossos Números</h2>
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <span className={styles.metricIcon}><i className="fas fa-heart"></i></span>
            <span className={styles.metricNumber}>XXX+</span>
            <p className={styles.metricText}>Projetos Criativos</p>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricIcon}><i className="fas fa-users"></i></span>
            <span className={styles.metricNumber}>XXX+</span>
            <p className={styles.metricText}>Educadores e Pais desenvolvidos</p>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricIcon}><i className="fas fa-lightbulb"></i></span>
            <span className={styles.metricNumber}>XXXX</span>
            <p className={styles.metricText}>Estudantes Impactados</p>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricIcon}><i className="fas fa-hands-helping"></i></span>
            <span className={styles.metricNumber}>XXX+</span>
            <p className={styles.metricText}>Pessoas Alcançadas</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsMainTitle}>Depoimentos</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              "O Projeto Mucuri mudou a vida da minha comunidade. Agora temos acesso a ferramentas e conhecimentos que antes pareciam distantes."
            </p>
            <p className={styles.testimonialAuthor}>- Maria, Líder Comunitária</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              "Participar dos projetos do Projeto Mucuri foi transformador. Aprendi as habilidades que me ajudaram a conseguir meu primeiro emprego."
            </p>
            <p className={styles.testimonialAuthor}>- João, Beneficiário</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Faça Parte Dessa Transformação</h2>
        <p className={styles.ctaDescription}>
          Sua contribuição pode ajudar a levar mais projetos como esses para quem mais precisa. Junte-se a nós e faça a diferença!
        </p>
        <button className={styles.ctaButton}>Doe Agora</button>
      </section>
    </div>
  );
}

export default Sobre;