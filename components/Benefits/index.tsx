import styles from "./benefits.module.scss";
import Benefit1 from "../Assets/images/benefit1.svg";
import Benefit2 from "../Assets/images/benefit2.svg";
import Benefit3 from "../Assets/images/benefit3.svg";
import React from "react";

const Benefits: React.FC = () => {

let listBenefits = [
    {
        title: "Tempo",
        image: Benefit1.src
    },
    {
        title: "Organização",
        image: Benefit2.src
    },
    {
        title: "Progressão",
        image: Benefit3.src
    }
];

  return (
    <section className={styles.container}>
      <div className={styles.flexbox}>
        {
            React.Children.toArray(
                listBenefits.map(item => {
                    return (
                        <div data-aos='zoom-in' className={styles.flexitem}>
                            <img src={item.image} alt={item.title} className={styles.icon} />
                            <h2>{item.title}</h2>
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
