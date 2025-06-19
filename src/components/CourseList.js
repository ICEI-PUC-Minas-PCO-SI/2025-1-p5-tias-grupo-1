import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const courses = [
  {
    title: 'Curso de informática básica',
    description: 'Dê os primeiros passos no mundo digital! Este curso é ideal para quem busca dominar o uso do computador, internet, editores de texto e planilhas eletrônicas. É uma qualificação fundamental para o dia a dia e para diversas oportunidades de trabalho.',
    img: '/image_4.jpg'
  },
  {
    title: 'Curso de automaquiagem',
    description: 'Descubra os segredos da maquiagem e realce sua beleza natural! Com este curso, você aprenderá técnicas para diferentes ocasiões, escolha de produtos ideais para seu tipo de pele e como criar looks incríveis e duradouros para o seu dia a dia ou eventos especiais.',
    img: '/image_3.jpg',
    reverse: true
  },
  {
    title: 'Curso de biscuit',
    description: 'Libere sua criatividade e aprenda a modelar peças incríveis em biscuit! Neste curso, você vai dominar as técnicas para criar desde pequenos objetos decorativos até peças personalizadas, explorando cores, texturas e formas do para dar vida às suas ideias. Ideal para quem busca uma nova forma de expressão ou quer iniciar um pequeno negócio artesanal.',
    img: '/image_2.jpg'
  }
];


export default function CourseList() {
  return (
    <section className="courses">
      {courses.map((c, idx) => <CourseCard key={idx} {...c} />)}
    </section>
  );
}
