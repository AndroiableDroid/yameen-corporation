"use client";

import { FunctionComponent } from "react";
import styles from "./para-1.module.css";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook

const Para1: FunctionComponent<{
  value: String,
  animate: boolean,
  showIcon: boolean,
  dark: boolean
}> = ({ value, animate, showIcon, dark }) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div
      className={`${animate ? styles.animatedRoot : styles.root}  ${
        animate && viewCount === 1 ? styles.animation : ""
      } 
      ${dark ? styles.dark : styles.light}`}
      ref={elemRef}
    >
      {showIcon && <img src="/left.png" alt="left icon" className={styles.icon} />}
      <p className={styles.para1}>{value}</p>
    </div>
  );
};

export default Para1;
