import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ServiceCardSet.module.css";

export type ServiceCardSetType = {
  className?: string;
  rectangle5333?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const ServiceCardSet: FunctionComponent<ServiceCardSetType> = ({
  className = "",
  rectangle5333,
  propLeft,
  propTop,
}) => {
  const serviceCardSetStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={[styles.serviceCardSet, className].join(" ")}
      style={serviceCardSetStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src={rectangle5333}
        />
      </div>
      <div className={styles.loremIpsumDolorParent}>
        <div className={styles.loremIpsumDolor}>Lorem ipsum dolor</div>
        <div className={styles.loremIpsumDolorSitAmetCoParent}>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing `}</div>
          <div className={styles.seeAllWrapper}>
            <div className={styles.seeAll}>See All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSet;
