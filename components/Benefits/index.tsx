import styles from "./benefits.module.scss";
import Student from "../Assets/images/beneficio1.png";
import React from "react";

const Benefits: React.FC = () => {

let listBenefits = [
    {
        title: "Benefícios",
        image: Student.src
    },
    {
        title: "Benefícios",
        image: Student.src
    },
    {
        title: "Benefícios",
        image: Student.src
    }
];

  return (
    <section className={styles.container}>
      <div className={styles.flexbox}>
        {
            React.Children.toArray(
                listBenefits.map(item => {
                    return (
                        <div className={styles.flexitem}>
                            <img src={item.image} alt={item.title} />
                            <h6>{item.title}</h6>
                        </div>
                    )
                })
            )
        }
      </div>
    </section>
  );
};

export default Benefits;
