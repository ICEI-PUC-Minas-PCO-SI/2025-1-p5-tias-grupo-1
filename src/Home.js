// src/Home.js
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homePage}>
      {/* Seção 1: Banner Principal (Hero Section) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>TRANSFORMANDO EM REALIDADE</p>
          <h1 className={styles.heroTitle}>Educação criativa e inovadora</h1>
          <p className={styles.heroDescription}>O Projeto Mucuri nasceu para transformar a vida das pessoas.</p>
          <button className={styles.heroButton}>Comece Agora</button>
        </div>
        <div className={styles.heroImages}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imageWrapper} ${styles.blueBg}`}>
              <img src="https://images.unsplash.com/photo-1594733306126-a07096d29990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ2ODU1fA&ixlib=rb-4.0.3&q=80&w=400" alt="Estudante 1" className={styles.gridImage} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.pinkBg}`}>
              <img src="https://images.unsplash.com/photo-1627575294021-998edc4e4df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ2OTY0fA&ixlib=rb-4.0.3&q=80&w=400" alt="Estudante 2" className={styles.gridImage} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.yellowBg}`}>
              <img src="https://images.unsplash.com/photo-1621570183141-b1e0f09b532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3MDEwfA&ixlib=rb-4.0.3&q=80&w=400" alt="Estudante 3" className={styles.gridImage} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.greenBg}`}>
              <img src="https://images.unsplash.com/photo-1599304245781-a957d19ef8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3MDQ0fA&ixlib=rb-4.0.3&q=80&w=400" alt="Estudante 4" className={styles.gridImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Métricas/Números */}
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

      {/* Seção 3: Vantagens dos Nossos Segmentos */}
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

      {/* Seção 4: Educação que Transforma - Cursos Ofertados */}
      <section className={styles.coursesOfferedSection}>
        <div className={styles.coursesOfferedImageWrapper}>
          <img src="https://images.unsplash.com/photo-1593642531955-b62e17b3bd04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3MTI5fA&ixlib=rb-4.0.3&q=80&w=600" alt="Estudante Feliz" className={styles.coursesOfferedImage} />
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

      {/* Seção 5: Professores Qualificados */}
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
          <img src="https://images.unsplash.com/photo-1552586708-8e6d97a9f8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3MjM2fA&ixlib=rb-4.0.3&q=80&w=600" alt="Professores" className={styles.teachersImage} />
        </div>
      </section>

      {/* Seção 6: Nossas Áreas de Ensino - Nossos Ensinos e Segmentos */}
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

      {/* Seção 7: Nossos Depoimentos */}
      <section className={styles.testimonialsSection}>
        <p className={styles.sectionSubtitle}>NOSSOS DEPOIMENTOS</p>
        <h2 className={styles.sectionTitle}>O Que Nossos Alunos Dizem Sobre Nós</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3MzY2fA&ixlib=rb-4.0.3&q=80&w=200" alt="Derick" className={styles.testimonialAvatar} />
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
              <img src="https://images.unsplash.com/photo-1547425260-76bc0fafa2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3MzkwfA&ixlib=rb-4.0.3&q=80&w=200" alt="Vinicius" className={styles.testimonialAvatar} />
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
              <img src="https://images.unsplash.com/photo-1620245084931-bd8132e01b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMjd8MHwxfGFsbHwxfHx8fHx8fHwxNzE4NzQ3NDI0fA&ixlib=rb-4.0.3&q=80&w=200" alt="Cristina" className={styles.testimonialAvatar} />
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