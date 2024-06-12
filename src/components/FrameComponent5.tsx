import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.finalInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.instanceChild}
          loading="lazy"
          alt=""
          src="/rectangle-5322@2x.png"
        />
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-5322-1@2x.png"
          />
        </div>
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-5322-2@2x.png"
        />
        <img
          className={styles.instanceInner}
          alt=""
          src="/rectangle-5322-3@2x.png"
        />
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-5322-4@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameInner}
            alt=""
            src="/group-1000001874@2x.png"
          />
        </div>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-1000001875@2x.png"
        />
        <img
          className={styles.instanceChild1}
          loading="lazy"
          alt=""
          src="/group-1000001876@2x.png"
        />
        <img
          className={styles.instanceChild2}
          loading="lazy"
          alt=""
          src="/group-1000001877@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent5;
