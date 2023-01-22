import styles from './about.module.scss'
import Image from 'next/image'
import About1 from '../Assets/images/about1.svg'
import About2 from '../Assets/images/about2.svg'
import About3 from '../Assets/images/about3.svg'
import React from 'react'

const About: React.FC = () => {

  let listBenefits = [
    {
        title: "Tempo",
        dataaos: "fade-right",
        image: About1,
        description: "O tempo e os recursos necessários para realizar um processo de mentoria bem sucedido podem ser enormes. A GuidanC ajuda você a reduzir esses custos enquanto ainda gerencia de maneira eficaz seu programa de mentoria, permitindo simplificar suas tarefas administrativas em um único sistema. Com ferramentas de correspondência de mentores que facilitam a correspondência automática e sistemas de tarefas que permitem registrar seu progresso, os mentores terão mais tempo para se concentrar no sucesso de sua mentoria.",
    },
    {
        title: "Organização",
        dataaos: "fade-left",
        image: About2,
        description: "As pessoas que escrevem seus objetivos têm muito mais chances de alcançá-los. Ser organizado pode ajudá-lo a reconhecer quais são seus objetivos e traçar um plano para alcançá-los. Ao se manter organizado, você economizará tempo procurando coisas e terá mais tempo para trabalhar em tarefas importantes. A plataforma possui as ferramentas necessárias para garantir um melhor aproveitamento do tempo do mentor e mentorado.",
    },
    {
        title: "Progressão",
        dataaos: "fade-right",
        image: About3,
        description: "O sucesso do seu programa de mentoria é determinado por vários fatores, que incluem o envolvimento do participante, o sucesso do relacionamento e as metas organizacionais. Sem as ferramentas certas, é impossível medir esses fatores e o sucesso geral do seu programa. A GuidanC fornece as ferramentas necessárias para coletar análises do programa para medir com eficácia o sucesso do seu programa.",
    }
];

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        {
            React.Children.toArray(
                listBenefits.map(item => {
                    return (
                        <div data-aos={item.dataaos} className={styles.boxitem}>
                            <Image src = {item.image} alt={item.title} className={styles.boxitemimg}/>
                          
                            <h2 className={styles.title}>{item.title}</h2> 

                            <p className={styles.description}>{item.description}</p>
                        </div>
                    )
                })
            )
        }
      </div>
    </section>
  );
};



export default About;