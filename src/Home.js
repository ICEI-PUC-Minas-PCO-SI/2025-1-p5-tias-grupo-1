import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>TRANSFORMANDO EM REALIDADE</p>
          <h1 className={styles.heroTitle}>Educação criativa e inovadora</h1>
          <p className={styles.heroDescription}>O Projeto Mucuri nasceu para transformar a vida das pessoas.</p>
          <button className={styles.heroButton}>Comece Agora</button>
        </div>
        <div className={styles.heroImages}>
          <img
            src="image_5.png" // MAKE SURE THIS PATH IS CORRECT. Place image_58dc07.jpg into public/images/ and rename it to hero-composite-students.png
            alt="Estudantes felizes e engajados"
            className={styles.singleHeroImage}
          />
        </div>
      </section>

      <section className={styles.metricsSection}>
        <div className={styles.metricItem}>
          <span className={styles.metricNumber}>XXX+</span>
          <p className={styles.metricText}>Projetos Criativos</p>
        </div>
        <div className={styles.metricItem}>
          <span className={styles.metricNumber}>XXX+</span>
          <p className={styles.metricText}>Educadores e Pais desenvolvidos</p>
        </div>
        <div className={styles.metricItem}>
          <span className={styles.metricNumber}>XXX+</span>
          <p className={styles.metricText}>Estudantes Impactados</p>
        </div>
        <div className={styles.metricItem}>
          <span className={styles.metricNumber}>XXX+</span>
          <p className={styles.metricText}>Pessoas alcançadas</p>
        </div>
      </section>

      <section className={styles.segmentsSection}>
        <p className={styles.sectionSubtitle}>CONHEÇA NOSSOS SEGMENTOS</p>
        <h2 className={styles.sectionTitle}>Vantagens dos Nossos Segmentos</h2>
        <div className={styles.segmentCards}>
          <div className={styles.segmentCard}>
            <div className={`${styles.segmentIcon} ${styles.iconAprendizado}`}>💡</div>
            <h3>Aprendizado</h3>
            <p>Desenvolvimento de pensamento crítico, empreendedorismo, matemática e computação.</p>
          </div>
          <div className={styles.segmentCard}>
            <div className={`${styles.segmentIcon} ${styles.iconPrimeiroEmprego}`}>🌱</div>
            <h3>Primeiro Emprego</h3>
            <p>Competências e habilidades para jovens ingressarem no mercado de trabalho.</p>
          </div>
          <div className={styles.segmentCard}>
            <div className={`${styles.segmentIcon} ${styles.iconRecolocacao}`}>🔄</div>
            <h3>Recolocação</h3>
            <p>Desenvolvimento de pensamento crítico, empreendedorismo, matemática e computação.</p>
          </div>
          <div className={styles.segmentCard}>
            <div className={`${styles.segmentIcon} ${styles.iconBemEstar}`}>❤️</div>
            <h3>Bem-Estar</h3>
            <p>Assistência social por meio de atividades, terapias, doação de alimentos e palestras.</p>
          </div>
        </div>
      </section>

      <section className={styles.coursesOfferedSection}>
        <div className={styles.coursesOfferedImageWrapper}>
          <img src="image_6.png" alt="Estudante Feliz" className={styles.coursesOfferedImage} />
        </div>
        <div className={styles.coursesOfferedContent}>
          <p className={styles.sectionSubtitle}>EDUCAÇÃO QUE TRANSFORMA</p>
          <h2 className={styles.sectionTitle}>Cursos ofertados</h2>
          <p className={styles.coursesOfferedDescription}>
            Oferecemos cursos com professores qualificados e uma metodologia inovadora, garantimos que você nunca perca uma aula e consiga acompanhar seu progresso de forma eficiente.
          </p>
          <button className={styles.primaryButton}>Quero ver os cursos!</button>
        </div>
      </section>

      <section className={styles.teachersSection}>
        <div className={styles.teachersContent}>
          <p className={styles.sectionSubtitle}>PROFESSORES QUALIFICADOS</p>
          <h2 className={styles.sectionTitle}>Educadores Comprometidos com o Seu Sucesso</h2>
          <p className={styles.teachersDescription}>
            Nossa equipe de professores é formada por profissionais experientes e dedicados, prontos para oferecer o suporte que você precisa.
          </p>
          <button className={styles.primaryButton}>Quero ver os cursos!</button>
        </div>
        <div className={styles.teachersImageWrapper}>
          <img src="image_7.png" alt="Professores" className={styles.teachersImage} />
        </div>
      </section>

      <section className={styles.areasOfStudySection}>
        <p className={styles.sectionSubtitle}>NOSSAS ÁREAS DE ENSINO</p>
        <h2 className={styles.sectionTitle}>Nossos Ensinos e Segmentos</h2>
        <div className={styles.areaCards}>
          <div className={styles.areaCard}>
            <i className="fas fa-laptop-code"></i>
            <span>Tecnologia</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-book-open"></i>
            <span>Literatura</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-palette"></i>
            <span>Arte e Cultura</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-lightbulb"></i>
            <span>Empreendedorismo</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-users"></i>
            <span>Educação Social</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-hand-holding-heart"></i>
            <span>Voluntariado</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-leaf"></i>
            <span>Sustentabilidade</span>
          </div>
          <div className={styles.areaCard}>
            <i className="fas fa-th"></i>
            <span>Ver Todos</span>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <p className={styles.sectionSubtitle}>NOSSOS DEPOIMENTOS</p>
        <h2 className={styles.sectionTitle}>O Que Nossos Alunos Dizem Sobre Nós</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img src="image_8.avif" alt="Derick" className={styles.testimonialAvatar} />
              <div className={styles.testimonialInfo}>
                <h3>Derick</h3>
                <p>Barros</p>
              </div>
            </div>
            <p className={styles.testimonialText}>Os cursos é incrível! Aprendi muito e recomendo para todos que querem evoluir profissionalmente.</p>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img src="image_8.avif" alt="Vinicius" className={styles.testimonialAvatar} />
              <div className={styles.testimonialInfo}>
                <h3>Vinicius</h3>
                <p>Vinicius</p>
              </div>
            </div>
            <p className={styles.testimonialText}>Os cursos são bem estruturados e os professores são muito experientes. Vale cada minuto investido!</p>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img src="image_8.avif" alt="Cristina" className={styles.testimonialAvatar} />
              <div className={styles.testimonialInfo}>
                <h3>Cristina</h3>
                <p>Cristina</p>
              </div>
            </div>
            <p className={styles.testimonialText}>Adorei os cursos e poder estudar em um ambiente incrível</p>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;