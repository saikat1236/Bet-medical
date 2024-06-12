import { FunctionComponent } from "react";
import ServiceCardSet from "./ServiceCardSet";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.finalInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.sectionHeading2ServingWrapper}>
          <h1 className={styles.sectionHeading}>
            We provide the following Medical Portfolios
          </h1>
        </div>
        <div className={styles.serviceCardSetParent}>
          <div className={styles.serviceCardSet}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/rectangle-5317@2x.png"
              />
            </div>
            <div className={styles.loremIpsumDolorParent}>
              <div className={styles.loremIpsumDolor}>Lorem ipsum dolor</div>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <div
                  className={styles.loremIpsumDolor1}
                >{`Lorem ipsum dolor sit amet, consectetur adipisc  Lorem ipsum dolor sit amet, conse ctetur adi `}</div>
                <div className={styles.seeAllWrapper}>
                  <div className={styles.seeAll}>See All</div>
                </div>
              </div>
            </div>
          </div>
          <ServiceCardSet rectangle5333="/rectangle-5333@2x.png" />
          <ServiceCardSet
            rectangle5333="/rectangle-5333-1@2x.png"
            propLeft="796px"
            propTop="0px"
          />
          <ServiceCardSet
            rectangle5333="/rectangle-5333-1@2x.png"
            propLeft="0px"
            propTop="388px"
          />
          <ServiceCardSet
            rectangle5333="/rectangle-5333@2x.png"
            propLeft="398px"
            propTop="388px"
          />
          <ServiceCardSet
            rectangle5333="/rectangle-5317@2x.png"
            propLeft="796px"
            propTop="388px"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.arrowDownWrapper}>
                <img
                  className={styles.arrowDownIcon}
                  alt=""
                  src="/arrowdown.svg"
                />
              </div>
              <div className={styles.text}>Load more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
